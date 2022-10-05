import { Typography } from '@mui/material';
import { ArticleType, BlurredArticleType } from '../../../types/article';
import { BlurredText } from './styled';

type PropsType = {
    article: ArticleType;
    blurredArticle: BlurredArticleType;
};

const TextContainer = (props: PropsType) => {
    // const { title, text } = props.article;
    //This should be used in the future for displaying guessed words.

    const { blurredTitle, blurredText } = props.blurredArticle;

    const textBlur = (textToBlur: string[]) => {
        return textToBlur.map((word) => {
            return (
                <span key={word}>
                    {word[0] === '*' ? (
                        <BlurredText guessed={false}>{word}</BlurredText>
                    ) : (
                        word
                    )}{' '}
                </span>
            );
        });
    };

    return (
        <>
            <Typography variant="h2" sx={{ mb: 2 }}>
                {textBlur(blurredTitle)}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {textBlur(blurredText)}
            </Typography>
        </>
    );
};

export default TextContainer;
