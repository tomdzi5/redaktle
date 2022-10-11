import { useEffect } from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getArticle, selectArticle } from './articleSlice';
import { LOADING_STATUS } from '../../../utils/constants';
import Loader from '../../../components/Loader';
import Word from './Word';

const ArticleCard = styled(Card)`
    flex-basis: 70%;
    height: 100%;
`;

const BLURRED_ARTICLE_MOCK = {
    data: {
        title: [
            {
                word: 'cześć',
                isGuessed: false,
            },
            {
                word: ',',
                isGuessed: true,
            },
            {
                word: 'moje',
                isGuessed: true,
            },
            {
                word: 'imie',
                isGuessed: false,
            },
        ],
        text: [
            {
                word: 'to',
                isGuessed: true,
            },
            {
                word: 'bartek',
                isGuessed: false,
            },
            {
                word: 'ratajczyk',
                isGuessed: false,
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
