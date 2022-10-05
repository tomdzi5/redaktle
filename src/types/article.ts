export type WordToGuess = {
    word: string;
    isGuessed: boolean;
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
    status: string;
};
