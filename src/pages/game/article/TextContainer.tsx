import { Typography } from '@mui/material';
import { BlurredArticleType } from '../../../types/article';
import { BlurredText } from './styled';

type PropsType = {
    blurredArticle: BlurredArticleType;
};

const TextContainer = (props: PropsType) => {
    const { title, text } = props.blurredArticle;

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
                {textBlur(title)}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {textBlur(text)}
            </Typography>
        </>
    );
};

export default TextContainer;
