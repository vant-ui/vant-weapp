import { VantComponent } from '../../../common/component';
import {
  getMonthEndDay,
  compareDay,
  getPrevDay,
  getNextDay,
} from '../../utils';

export interface Day {
  date: Date;
  type: string;
  text: number;
  bottomInfo?: string;
}

VantComponent({
  props: {
    date: {
      type: null,
      observer: 'setDays',
    },
    type: {
      type: String,
      observer: 'setDays',
    },
    color: String,
    minDate: {
      type: null,
      observer: 'setDays',
    },
    maxDate: {
      type: null,
      observer: 'setDays',
    },
    visible: {
      type: Boolean,
      value: true,
      observer: 'setDays',
    },
    showMark: Boolean,
    rowHeight: null,
    formatter: {
      type: null,
      observer: 'setDays',
    },
    currentDate: {
      type: null,
      observer: 'setDays',
    },
    firstDayOfWeek: {
      type: Number,
      observer: 'setDays',
    },
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
  },

  data: {
    // visible: true,
    days: [] as Day[],
  },

  methods: {
    onClick(event) {
      const { index } = event.currentTarget.dataset;
      const item: Day = this.data.days[index];
      if (item.type !== 'disabled') {
        this.$emit('click', item);
      }
    },

    setDays() {
      const days: Day[] = [];
      const startDate = new Date(this.data.date);
      const year = startDate.getFullYear();
      const month = startDate.getMonth();

      const totalDay = getMonthEndDay(
        startDate.getFullYear(),
        startDate.getMonth() + 1
      );

      for (let day = 1; day <= totalDay; day++) {
        const date = new Date(year, month, day);
        const type = this.getDayType(date);

        let config: Day = {
          date,
          type,
          text: day,
          bottomInfo: this.getBottomInfo(type),
        };

        if (this.data.formatter) {
          config = this.data.formatter(config);
        }

        days.push(config);
      }

      this.setData({ days });
    },

    getMultipleDayType(day) {
      const { currentDate } = this.data;
      if (!Array.isArray(currentDate)) {
        return '';
      }

      const isSelected = (date) =>
        currentDate.some((item) => compareDay(item, date) === 0);

      if (isSelected(day)) {
        const prevDay = getPrevDay(day);
        const nextDay = getNextDay(day);
        const prevSelected = isSelected(prevDay);
        const nextSelected = isSelected(nextDay);

        if (prevSelected && nextSelected) {
          return 'multiple-middle';
        }

        if (prevSelected) {
          return 'end';
        }

        return nextSelected ? 'start' : 'multiple-selected';
      }

      return '';
    },

    getRangeDayType(day) {
      const { currentDate, allowSameDay } = this.data;
      if (!Array.isArray(currentDate)) {
        return '';
      }

      const [startDay, endDay] = currentDate;

      if (!startDay) {
        return '';
      }

      const compareToStart = compareDay(day, startDay);

      if (!endDay) {
        return compareToStart === 0 ? 'start' : '';
      }

      const compareToEnd = compareDay(day, endDay);

      if (compareToStart === 0 && compareToEnd === 0 && allowSameDay) {
        return 'start-end';
      }

      if (compareToStart === 0) {
        return 'start';
      }

      if (compareToEnd === 0) {
        return 'end';
      }

      if (compareToStart > 0 && compareToEnd < 0) {
        return 'middle';
      }

      return '';
    },

    getDayType(day) {
      const { type, minDate, maxDate, currentDate } = this.data;

      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled';
      }

      if (type === 'single') {
        return compareDay(day, currentDate) === 0 ? 'selected' : '';
      }

      if (type === 'multiple') {
        return this.getMultipleDayType(day);
      }

      /* istanbul ignore else */
      if (type === 'range') {
        return this.getRangeDayType(day);
      }

      return '';
    },

    getBottomInfo(type) {
      if (this.data.type === 'range') {
        if (type === 'start') {
          return '开始';
        }
        if (type === 'end') {
          return '结束';
        }
        if (type === 'start-end') {
          return '开始/结束';
        }
      }
    },
  },
});
