import { useEffect } from 'react';

import { CardContent, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getArticle, selectArticle } from './articleSlice';
import { LOADING_STATUS } from '../../../utils/constants';
import Loader from '../../../components/Loader';
import Word from './Word';
import { ArticleCard } from '../Game.styled';

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
                            {article.data.title.map((wordToBlur, index) => (
                                <Word key={index}>{wordToBlur}</Word>
                            ))}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ textAlign: 'justify' }}
                        >
                            {article.data.text.map((wordToBlur, index) => (
                                <Word key={index}>{wordToBlur}</Word>
                            ))}
                        </Typography>
                    </>
                )}
                {article.status === LOADING_STATUS.LOADING && <Loader />}
            </CardContent>
        </ArticleCard>
    );
};

export default Article;
