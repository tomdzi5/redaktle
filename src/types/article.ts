export type WordToGuess = {
    word: string;
    isVisible: boolean;
};

export type ArticleType = {
    title: string;
    text: string;
};

export type ArticleSliceType = {
    data: {
        title: WordToGuess[];
        text: WordToGuess[];
    };
    isGameWon: boolean;
    status: string;
};
