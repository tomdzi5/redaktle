import { useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getArticle, selectArticle } from './articleSlice';
import { LOADING_STATUS } from '../../../utils/constants';
import Loader from '../../../components/Loader';

const Article = () => {
    const article = useAppSelector(selectArticle);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getArticle());
    }, [])
    return (
        <Card>
            <CardContent>
                { article.status === LOADING_STATUS.IDLE && <>
                    <Typography variant="h2">{article.data.title}</Typography>
                    <div>{article.data.text}</div>
                </>}
                { article.status === LOADING_STATUS.LOADING && <Loader/>}
            </CardContent>
        </Card>
    )
}

export default Article;