import { Typography } from '@mui/material';
import { WordToGuess } from '../../../types/article';
import { BlurredText } from './styled';

type PropsType = {
    article: {
        title: WordToGuess[];
        text: WordToGuess[];
    };
};

const TextContainer = (props: PropsType) => {
    console.log(props);
    // const { title, text } = props.article;

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

    console.log(textBlur(['']));

    return (
        <>
            <Typography variant="h2" sx={{ mb: 2 }}>
                title
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                text
            </Typography>
        </>
    );
};

export default TextContainer;
