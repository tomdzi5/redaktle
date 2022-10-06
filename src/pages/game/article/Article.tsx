import { useEffect } from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getArticle, selectArticle } from './articleSlice';
import { BLUR_CHARACTER, LOADING_STATUS } from '../../../utils/constants';
import Loader from '../../../components/Loader';
import { WordToGuess } from '../../../types/article';
import { BlurredText } from './styled';

const ArticleCard = styled(Card)`
    flex-basis: 70%;
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

    const blurWords = (wordsToBlurArray: WordToGuess[]) => {
        return wordsToBlurArray.map((wordToBlur) => {
            if (wordToBlur.isGuessed) {
                return wordToBlur.word + ' ';
            }

            const blurredWord = BLUR_CHARACTER.repeat(wordToBlur.word.length);

            return (
                <>
                    <BlurredText guessed={false}>{blurredWord}</BlurredText>{' '}
                </>
            );
        });
    };

    return (
        <ArticleCard>
            <CardContent sx={{ m: 2 }}>
                {article.status === LOADING_STATUS.IDLE && (
                    <>
                        <Typography variant="h2" sx={{ mb: 2 }}>
                            {blurWords(BLURRED_ARTICLE_MOCK.data.title)}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ textAlign: 'justify' }}
                        >
                            {blurWords(BLURRED_ARTICLE_MOCK.data.text)}
                        </Typography>
                    </>
                )}
                {article.status === LOADING_STATUS.LOADING && <Loader />}
            </CardContent>
        </ArticleCard>
    );
};
export default Article;
