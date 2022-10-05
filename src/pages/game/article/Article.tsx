import { useEffect } from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getArticle, selectArticle } from './articleSlice';
import { LOADING_STATUS } from '../../../utils/constants';
import Loader from '../../../components/Loader';

const ArticleCard = styled(Card)`
    flex-basis: 70%;
`;

const Article = () => {
    const article = useAppSelector(selectArticle);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getArticle());
    }, []);

    return (
        <CardContent sx={{ m: 2 }}>
            { article.status === LOADING_STATUS.IDLE && <>
                <Typography variant="h2" sx={{ mb: 2 }}>{article.data.title}</Typography>
                <Typography variant="body1" sx={{ textAlign: 'justify' }}>{article.data.text}</Typography>
            </>}
            { article.status === LOADING_STATUS.LOADING && <Loader/>}
        </CardContent>
    )
}

export default Article;
