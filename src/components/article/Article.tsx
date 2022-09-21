import {Card, CardContent, Typography} from "@mui/material";
import { ArticleType } from '../../types/article';

type ArticleProps = {
    article: ArticleType
}

const Article = ({article}: ArticleProps) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h2">{article.title}</Typography>
                <div>{article.text}</div>
            </CardContent>
        </Card>
    )
}

export default Article;