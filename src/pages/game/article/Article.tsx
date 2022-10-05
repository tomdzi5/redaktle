import { useEffect } from 'react';
<<<<<<< HEAD
import { Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
=======

import { CardContent, Typography } from '@mui/material';
>>>>>>> c0da7006e1a94a45e7bd58c6df36870f55f75dca

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getArticle, selectArticle } from './articleSlice';
import { LOADING_STATUS } from '../../../utils/constants';
import Loader from '../../../components/Loader';
import TextContainer from './TextContainer';
import { BlurredArticleType } from '../../../types/article';

const ArticleCard = styled(Card)`
    flex-basis: 70%;
`;

const BLURRED_ARTICLE_MOCK: BlurredArticleType = {
    blurredTitle: ['*****', 'tego', '******'],
    blurredText: ['****', 'tego', '*******'],
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
                    <TextContainer
                        article={article.data}
                        blurredArticle={BLURRED_ARTICLE_MOCK}
                    />
                )}
                {article.status === LOADING_STATUS.LOADING && <Loader />}
            </CardContent>
        </ArticleCard>
    );
};
export default Article;
