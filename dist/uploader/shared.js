// props for image
export const imageProps = {
    sizeType: {
        type: Array,
        value: ['original', 'compressed'],
    },
    capture: {
        type: Array,
        value: ['album', 'camera'],
    },
    showmenu: {
        type: Boolean,
        value: true,
    },
};
// props for video
export const videoProps = {
    capture: {
        type: Array,
        value: ['album', 'camera'],
    },
    compressed: {
        type: Boolean,
        value: true,
    },
    maxDuration: {
        type: Number,
        value: 60,
    },
    camera: {
        type: String,
        value: 'back',
    },
    referrerPolicy: {
        type: String,
        value: 'no-referrer',
    },
};
// props for media
export const mediaProps = {
    capture: {
        type: Array,
        value: ['album', 'camera'],
    },
    mediaType: {
        type: Array,
        value: ['image', 'video', 'mix'],
    },
    maxDuration: {
        type: Number,
        value: 60,
    },
    camera: {
        type: String,
        value: 'back',
    },
};
// props for file
export const messageFileProps = {
    extension: null,
    previewFile: {
        type: Boolean,
        value: true,
    },
};
