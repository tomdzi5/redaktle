import { Card, CardContent, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getArticle, selectArticle } from './articleSlice';
import { useEffect } from 'react';

const Article = () => {
    const article = useAppSelector(selectArticle);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getArticle());
    }, [])
    return (
        <Card>
            <CardContent>
                <>
                    <Typography variant="h2">{article.data.title}</Typography>
                    <div>{article.data.text}</div>
                </>
            </CardContent>
        </Card>
    )
}

export default Article;