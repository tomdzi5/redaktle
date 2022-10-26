export const LOADING_STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    FAILED: 'failed',
};

export const MODALS_CONTENT = {
    info: {
        title: 'Information',
        content: <p>Information modal content</p>,
    },
    stats: {
        title: 'Statistics',
        content: <p>Statistics modal content</p>,
    },
    settings: {
        title: 'Settings',
        content: <p>Settings modal content</p>,
    },
};

export const LETTERS_AND_PUNCTUATION_REGEX = /\w+|\s+|[^\s\w]+/g;

export const PUNCTUATION_REGEX = /[!"#＄%&'()*+,-.:;<=>?@[\]^_`{|}~]+/g;

export const POLISH_COMMON_WORDS = ['w', 'też', 'jako'];

export const BLUR_CHARACTER = '*';
