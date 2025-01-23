import { VantComponent } from '../../common/component';

type Data = {
  id?: string;
  type?: 'single' | 'multiple' | 'range';
  round?: boolean;
  color?: string;
  minDate?: number;
  maxDate?: number;
  maxRange?: any;
  position?: 'top' | 'right' | 'bottom' | 'left';
  formatter?: any;
  showConfirm?: boolean;
  showCalendar?: boolean;
  tiledMinDate?: number;
  tiledMaxDate?: number;
  confirmText?: string | '确定';
  confirmDisabledText?: string | '确定';
  firstDayOfWeek?: number;
};

VantComponent({
  data: {
    date: {
      maxRange: [],
      selectSingle: null,
      selectRange: [],
      selectMultiple: [],
      quickSelect1: null,
      quickSelect2: [],
      customColor: [],
      customConfirm: [],
      customRange: null,
      customDayText: [],
      customPosition: null,
    },
    type: 'single',
    round: true,
    color: '',
    minDate: Date.now(),
    maxDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 6,
      new Date().getDate()
    ).getTime(),
    maxRange: undefined,
    position: 'bottom',
    formatter: undefined,
    showConfirm: false,
    showCalendar: false,
    tiledMinDate: new Date(2012, 0, 10).getTime(),
    tiledMaxDate: new Date(2030, 2, 20).getTime(),
    confirmText: '确定',
    confirmDisabledText: '确定',
    firstDayOfWeek: 0,
  },

  methods: {
    onConfirm(event) {
      console.log(event);
      this.setData({ showCalendar: false });

      this.setData({
        [`date.${this.data.id}`]: Array.isArray(event.detail)
          ? event.detail.map((date) => date.valueOf())
          : event.detail.valueOf(),
      });
    },

    onSelect(event) {
      console.log(event);
    },

    onUnselect(event) {
      console.log(event);
    },

    onClose() {
      this.setData({ showCalendar: false });
    },

    onOpen() {
      console.log('open');
    },

    onOpened() {
      console.log('opened');
    },

    onClosed() {
      console.log('closed');
    },

    resetSettings() {
      this.setData({
        round: true,
        color: '',
        minDate: Date.now(),
        maxDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 6,
          new Date().getDate()
        ).getTime(),
        maxRange: undefined,
        position: 'bottom',
        formatter: undefined,
        showConfirm: true,
        confirmText: '确定',
        confirmDisabledText: '确定',
      });
    },

    show(event) {
      this.resetSettings();
      const { type, id } = event.currentTarget.dataset;
      const data: Data = {
        id,
        type,
        showCalendar: true,
      };

      switch (id) {
        case 'quickSelect1':
        case 'quickSelect2':
          data.showConfirm = false;
          break;
        case 'customColor':
          data.color = '#07c160';
          break;
        case 'customConfirm':
          data.confirmText = '完成';
          data.confirmDisabledText = '请选择结束时间';
          break;
        case 'customRange':
          data.minDate = new Date(2010, 0, 1).getTime();
          data.maxDate = new Date(2010, 0, 31).getTime();
          break;
        case 'customDayText':
          data.minDate = new Date(2010, 4, 1).getTime();
          data.maxDate = new Date(2010, 4, 31).getTime();
          data.formatter = this.dayFormatter;
          break;
        case 'customPosition':
          data.round = false;
          data.position = 'right';
          break;
        case 'maxRange':
          data.maxRange = 3;
          break;
      }

      this.setData(data);
    },

    dayFormatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 5) {
        if (date === 1) {
          day.topInfo = '劳动节';
        } else if (date === 4) {
          day.topInfo = '五四青年节';
        } else if (date === 11) {
          day.text = '今天';
        }
      }

      if (day.type === 'start') {
        day.bottomInfo = '入店';
      } else if (day.type === 'end') {
        day.bottomInfo = '离店';
      }

      return day;
    },
  },
});
