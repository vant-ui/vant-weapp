import { BLUE, WHITE } from '../common/color';
import { VantComponent } from '../common/component';
import { getSystemInfoSync } from '../common/utils';
import { isObj } from '../common/validator';
import { canIUseCanvas2d } from '../common/version';
import { adaptor } from './canvas';

function format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}
const PERIMETER = 2 * Math.PI;
const BEGIN_ANGLE = -Math.PI / 2;
const STEP = 1;

VantComponent({
  props: {
    text: String,
    lineCap: {
      type: String,
      value: 'round',
    },
    value: {
      type: Number,
      value: 0,
      observer: 'reRender',
    },
    speed: {
      type: Number,
      value: 50,
    },
    size: {
      type: Number,
      value: 100,
      observer() {
        this.drawCircle(this.currentValue);
      },
    },
    fill: String,
    layerColor: {
      type: String,
      value: WHITE,
    },
    color: {
      type: null,
      value: BLUE,
      observer() {
        this.setHoverColor().then(() => {
          this.drawCircle(this.currentValue);
        });
      },
    },
    type: {
      type: String,
      value: '',
    },
    strokeWidth: {
      type: Number,
      value: 4,
    },
    clockwise: {
      type: Boolean,
      value: true,
    },
    renderToImage:{
      type: Boolean,
      value: false,
    }
  },

  data: {
    hoverColor: BLUE,
    circleImg:''
  },

  methods: {
    getContext(): Promise<WechatMiniprogram.CanvasContext> {
      const { type, size } = this.data;

      if (type === '' || !canIUseCanvas2d()) {
        const ctx = wx.createCanvasContext('van-circle', this);
        return Promise.resolve(ctx);
      }

      const dpr = getSystemInfoSync().pixelRatio;

      return new Promise((resolve) => {
        wx.createSelectorQuery()
          .in(this)
          .select('#van-circle')
          .node()
          .exec((res) => {
            const canvas = res[0].node;
            const ctx = canvas.getContext(type);

            if (!this.inited) {
              this.inited = true;
              canvas.width = size * dpr;
              canvas.height = size * dpr;
              ctx.scale(dpr, dpr);
            }

            resolve(adaptor(ctx));
          });
      });
    },

    setHoverColor() {
      const { color, size } = this.data;

      if (isObj(color)) {
        return this.getContext().then((context) => {
          if (!context) return;

          const LinearColor = context.createLinearGradient(size, 0, 0, 0);
          Object.keys(color)
            .sort((a, b) => parseFloat(a) - parseFloat(b))
            .map((key) =>
              LinearColor.addColorStop(
                parseFloat(key) / 100,
                color[key] as string
              )
            );
          this.hoverColor = LinearColor;
        });
      }

      this.hoverColor = color;
      return Promise.resolve();
    },

    presetCanvas(context, strokeStyle, beginAngle, endAngle, fill?: string) {
      const { strokeWidth, lineCap, clockwise, size } = this.data;
      const position = size / 2;
      const radius = position - strokeWidth / 2;

      context.setStrokeStyle(strokeStyle);
      context.setLineWidth(strokeWidth);
      context.setLineCap(lineCap);

      context.beginPath();
      context.arc(position, position, radius, beginAngle, endAngle, !clockwise);
      context.stroke();

      if (fill) {
        context.setFillStyle(fill);
        context.fill();
      }
    },

    renderLayerCircle(context) {
      const { layerColor, fill } = this.data;
      this.presetCanvas(context, layerColor, 0, PERIMETER, fill);
    },

    renderHoverCircle(context, formatValue) {
      const { clockwise } = this.data;
      // 结束角度
      const progress = PERIMETER * (formatValue / 100);
      const endAngle = clockwise
        ? BEGIN_ANGLE + progress
        : 3 * Math.PI - (BEGIN_ANGLE + progress);

      this.presetCanvas(context, this.hoverColor, BEGIN_ANGLE, endAngle);
    },

    drawCircle(currentValue) {
      const { size } = this.data;

      this.getContext().then((context) => {
        if (!context) return;

        context.clearRect(0, 0, size, size);
        this.renderLayerCircle(context);

        const formatValue = format(currentValue);
        if (formatValue !== 0) {
          this.renderHoverCircle(context, formatValue);
        }

        context.draw();
      });
    },

    generateCircleImage():Promise<string>{
      const {size}=this.data
      const dpr = getSystemInfoSync().pixelRatio;

      return new Promise((resolve,reject) => {
        setTimeout(()=>{
            wx.canvasToTempFilePath({
              width:size,
              height:size,
              destWidth:size* dpr,
              destHeight:size* dpr,
                canvasId: 'van-circle',
                success:(res)=> {
                resolve(res.tempFilePath)
                },
                fail(err){
                  reject(err)
                }
            },this)
        },200)
    })
    },

    reRender() {
      // tofector 动画暂时没有想到好的解决方案
      const { value, speed } = this.data;

      if (speed <= 0 || speed > 1000) {
        this.drawCircle(value);
        return;
      }

      this.clearMockInterval();
      this.currentValue = this.currentValue || 0;
      const run = () => {
        this.interval = setTimeout(() => {
          if (this.currentValue !== value) {
            if (Math.abs(this.currentValue - value) < STEP) {
              this.currentValue = value;
            } else if (this.currentValue < value) {
              this.currentValue += STEP;
            } else {
              this.currentValue -= STEP;
            }
            this.drawCircle(this.currentValue);
            run();
          } else {
            this.clearMockInterval();
          }
        }, 1000 / speed);
      };
      run();
    },

    clearMockInterval() {
      if (this.interval) {
        clearTimeout(this.interval);
        this.interval = null;
      }
    },
  },

  mounted() {
    this.currentValue = this.data.value;

    this.setHoverColor().then(() => {
      this.drawCircle(this.currentValue);
    }).then(async ()=>{
      if(this.data.renderToImage){
        const circleImg=await this.generateCircleImage()
        this.setData({circleImg})
      }
    })
  },

  destroyed() {
    this.clearMockInterval();
  },
});
