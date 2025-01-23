import { isDef, isNumber, isPlainObject, isPromise } from './validator';
import { canIUseGroupSetData, canIUseNextTick, getSystemInfoSync, } from './version';
export { isDef } from './validator';
export { getSystemInfoSync } from './version';
export function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
export function nextTick(cb) {
    if (canIUseNextTick()) {
        wx.nextTick(cb);
    }
    else {
        setTimeout(() => {
            cb();
        }, 1000 / 30);
    }
}
export function addUnit(value) {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumber(value) ? `${value}px` : value;
}
export function requestAnimationFrame(cb) {
    return setTimeout(() => {
        cb();
    }, 1000 / 30);
}
export function pickExclude(obj, keys) {
    if (!isPlainObject(obj)) {
        return {};
    }
    return Object.keys(obj).reduce((prev, key) => {
        if (!keys.includes(key)) {
            prev[key] = obj[key];
        }
        return prev;
    }, {});
}
export function getRect(context, selector) {
    return new Promise((resolve) => {
        wx.createSelectorQuery()
            .in(context)
            .select(selector)
            .boundingClientRect()
            .exec((rect = []) => resolve(rect[0]));
    });
}
export function getAllRect(context, selector) {
    return new Promise((resolve) => {
        wx.createSelectorQuery()
            .in(context)
            .selectAll(selector)
            .boundingClientRect()
            .exec((rect = []) => resolve(rect[0]));
    });
}
export function groupSetData(context, cb) {
    if (canIUseGroupSetData()) {
        context.groupSetData(cb);
    }
    else {
        cb();
    }
}
export function toPromise(promiseLike) {
    if (isPromise(promiseLike)) {
        return promiseLike;
    }
    return Promise.resolve(promiseLike);
}
// 浮点数精度处理
export function addNumber(num1, num2) {
    const cardinal = Math.pow(10, 10);
    return Math.round((num1 + num2) * cardinal) / cardinal;
}
// 限制value在[min, max]之间
export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
export function getCurrentPage() {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
}
export const isPC = ['mac', 'windows'].includes(getSystemInfoSync().platform);
// 是否企业微信
export const isWxWork = getSystemInfoSync().environment === 'wxwork';
