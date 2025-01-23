import { pickExclude, isPC, isWxWork } from '../common/utils';
import { isImageUrl, isVideoUrl } from '../common/validator';

export interface File {
  url: string; // 上传临时地址
  size?: number; // 上传大小
  name?: string;
  type: string; // 上传类型
  duration?: number; // 上传时间
  time?: number; // 消息文件时间
  isImage?: boolean;
  isVideo?: boolean;
}

export function isImageFile(item: File): boolean {
  if (item.isImage != null) {
    return item.isImage;
  }

  if (item.type) {
    return item.type === 'image';
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  return false;
}

export function isVideoFile(item: File): boolean {
  if (item.isVideo != null) {
    return item.isVideo;
  }

  if (item.type) {
    return item.type === 'video';
  }

  if (item.url) {
    return isVideoUrl(item.url);
  }

  return false;
}

function formatImage(
  res:
    | WechatMiniprogram.ChooseMediaSuccessCallbackResult
    | WechatMiniprogram.ChooseImageSuccessCallbackResult
): File[] {
  return res.tempFiles.map((item) => ({
    ...pickExclude(item, ['path']),
    type: 'image',
    url: item.tempFilePath || item.path,
    thumb: item.tempFilePath || item.path,
  }));
}

function formatVideo(
  res: WechatMiniprogram.ChooseVideoSuccessCallbackResult & Record<string, any>
) {
  return [
    {
      ...pickExclude(res, ['tempFilePath', 'thumbTempFilePath', 'errMsg']),
      type: 'video',
      url: res.tempFilePath,
      thumb: res.thumbTempFilePath,
    },
  ];
}

function formatMedia(res: WechatMiniprogram.ChooseMediaSuccessCallbackResult) {
  return res.tempFiles.map((item) => ({
    ...pickExclude(item, ['fileType', 'thumbTempFilePath', 'tempFilePath']),
    type: item.fileType,
    url: item.tempFilePath,
    thumb:
      item.fileType === 'video' ? item.thumbTempFilePath : item.tempFilePath,
  }));
}

function formatFile(
  res: WechatMiniprogram.ChooseMessageFileSuccessCallbackResult
) {
  return res.tempFiles.map((item) => ({
    ...pickExclude(item, ['path']),
    url: item.path,
  })) as File[];
}

export function chooseFile({
  accept,
  multiple,
  capture,
  compressed,
  maxDuration,
  sizeType,
  camera,
  maxCount,
  mediaType,
  extension,
}) {
  return new Promise<File | File[]>((resolve, reject) => {
    switch (accept) {
      case 'image':
        if (isPC || isWxWork) {
          wx.chooseImage({
            count: multiple ? Math.min(maxCount, 9) : 1,
            sourceType: capture,
            sizeType,
            success: (res) => resolve(formatImage(res)),
            fail: reject,
          });
        } else {
          wx.chooseMedia({
            count: multiple ? Math.min(maxCount, 9) : 1,
            mediaType: ['image'],
            sourceType: capture,
            maxDuration,
            sizeType,
            camera,
            success: (res) => resolve(formatImage(res)),
            fail: reject,
          });
        }
        break;
      case 'media':
        wx.chooseMedia({
          count: multiple ? Math.min(maxCount, 9) : 1,
          mediaType,
          sourceType: capture,
          maxDuration,
          sizeType,
          camera,
          success: (res) => resolve(formatMedia(res)),
          fail: reject,
        });
        break;
      case 'video':
        wx.chooseVideo({
          sourceType: capture,
          compressed,
          maxDuration,
          camera,
          success: (res) => resolve(formatVideo(res)),
          fail: reject,
        });
        break;
      default:
        wx.chooseMessageFile({
          count: multiple ? maxCount : 1,
          type: accept,
          ...(extension ? { extension } : {}),
          success: (res) => resolve(formatFile(res)),
          fail: reject,
        });
        break;
    }
  });
}
