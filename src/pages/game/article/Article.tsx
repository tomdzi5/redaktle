import { useEffect } from 'react';

import { CardContent, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getArticle, selectArticle } from './articleSlice';
import { LOADING_STATUS } from '../../../utils/constants';
import Loader from '../../../components/Loader';
import Word from './Word';
import { ArticleCard } from '../Game.styled';

const BLURRED_ARTICLE_MOCK = {
    data: {
        title: [
            {
                word: 'cześć',
                isVisible: false,
            },
            {
                word: ',',
                isVisible: true,
            },
            {
                word: 'moje',
                isVisible: true,
            },
            {
                word: 'imie',
                isVisible: false,
            },
        ],
        text: [
            {
                word: 'to',
                isVisible: true,
            },
            {
                word: 'bartek',
                isVisible: false,
            },
            {
                word: 'ratajczyk',
                isVisible: false,
            },
        ],
    },
};

const Article = () => {
    const article = useAppSelector(selectArticle);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getArticle());
    }, []);

    return (
        <ArticleCard>
            <CardContent sx={{ m: 2 }}>
                {article.status === LOADING_STATUS.IDLE && (
                    <>
                        <Typography variant="h2" sx={{ mb: 2 }}>
                            {BLURRED_ARTICLE_MOCK.data.title.map(
                                (wordToBlur, index) => (
                                    <Word key={index}>{wordToBlur}</Word>
                                )
                            )}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ textAlign: 'justify' }}
                        >
                            {BLURRED_ARTICLE_MOCK.data.text.map(
                                (wordToBlur, index) => (
                                    <Word key={index}>{wordToBlur}</Word>
                                )
                            )}
                        </Typography>
                    </>
                )}
                {article.status === LOADING_STATUS.LOADING && <Loader />}
            </CardContent>
        </ArticleCard>
    );
};

export default Article;
