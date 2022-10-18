import { Card } from '@mui/material';

import Header from './header';
import Article from './article';
import GuessBar from './guess-bar';
import { useAppDispatch } from '../../app/hooks';
import { setGuessText } from './guess-bar/guessSlice';
import { ArticleContainer, StyledGrid } from './Game.styled';
import GuessHistory from './guess-history/GuessHistory';
import { useRef } from 'react';

const Game = () => {
    const articleCartRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const handleGuess = (guessText: string): void => {
        dispatch(setGuessText(guessText));
    };

    const onBackToTopHandler = () => {
        const artcileCart = articleCartRef.current;

        artcileCart?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Header />
            <ArticleContainer>
                <StyledGrid
                    container
                    sx={{ flexDirection: { xs: 'column', md: 'row' } }}
                >
                    <Card
                        sx={{
                            flexBasis: { xs: '60%', md: '70%' },
                            overflowY: 'scroll',
                        }}
                        ref={articleCartRef}
                    >
                        <Article />
                        <GuessBar
                            onGuess={(guessText) => handleGuess(guessText)}
                            onBackToTop={onBackToTopHandler}
                        />
                    </Card>
                    <GuessHistory />
                </StyledGrid>
            </ArticleContainer>
        </>
    );
};

export default Game;
