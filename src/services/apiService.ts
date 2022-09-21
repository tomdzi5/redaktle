import {ArticleType} from "../types/article";

const ARTICLE_DATA_MOCK = {
    title: '123',
    text: 'text1'
};

export function fetchArticle() {
    return new Promise<{ data: ArticleType }>((resolve) =>
        setTimeout(() => resolve({ data: ARTICLE_DATA_MOCK }), 500)
    );
}