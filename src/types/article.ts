export type ArticleType = {
    title: string;
    text: string;
};

export type BlurredArticleType = {
    title: string[];
    text: string[];
};

export type ArticleSliceType = {
    original: {
        title: string[];
        text: string[];
    };
    blurred: BlurredArticleType;
    status: string;
};
