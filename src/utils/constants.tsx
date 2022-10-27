export const LOADING_STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    FAILED: 'failed',
};

export const MODALS_CONTENT = {
    info: {
        title: 'Information',
        content: <div>
            <p>Redaktle.pl is a daily browser game where the user tries to determine the subject of a random obfuscated Wikipedia article.</p>

            <p><b>How to Play</b></p>
            <ul>
                <li>Type a word into the input box and press Enter or the Guess button.</li>
                <li>All occurrences of that word will become unredacted in the article body.</li>
                <li>To win, figure out the title or subject of the article.</li>
            </ul>
        </div>,
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
