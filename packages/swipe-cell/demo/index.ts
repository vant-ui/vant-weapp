import { VantComponent } from '../../common/component';
import Dialog from '../../dialog/dialog';
import Notify from '../../notify/notify';

VantComponent({
  methods: {
    onClose(event) {
      const { position, instance } = event.detail;
      switch (position) {
        case 'left':
        case 'cell':
        case 'touch':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            context: this,
            message: '确定删除吗？',
          }).then(() => {
            instance.close();
          });
          break;
      }
    },

    onOpen(event) {
      const { position, name } = event.detail;
      switch (position) {
        case 'left':
          Notify({
            context: this,
            type: 'primary',
            message: `${name}${position}部分展示open事件被触发`,
          });
          break;
        case 'right':
          Notify({
            context: this,
            type: 'primary',
            message: `${name}${position}部分展示open事件被触发`,
          });
          break;
      }
    },
  },
});
