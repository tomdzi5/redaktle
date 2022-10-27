import { useRef } from 'react';

import { Card } from '@mui/material';

import Header from './header';
import Article from './article';
import GuessBar from './guess-bar';
import GuessHistory from './guess-history/GuessHistory';
import GameWonPopup from './game-won-popup';
import AlreadyGuessedToast from './already-guessed-toast';

import { useAppDispatch } from '../../app/hooks';
import { onAlreadyGuessedToastClose, setGuessText } from './guess-bar/guessSlice';
import { ArticleContainer, StyledGrid } from './Game.styled';
import { resetWonStatus } from './article/articleSlice';

const Game = () => {
    const articleCartRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const handleGuess = (guessText: string): void => {
        dispatch(setGuessText(guessText));
    };

    const handleToastClose = () => {
        dispatch(onAlreadyGuessedToastClose());
    };

    const handleGameWonModalClose = () => {
        dispatch(resetWonStatus());
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
                            height: '100%',
                            overflowY: 'auto',
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
                <GameWonPopup onClose={handleGameWonModalClose} />
            </ArticleContainer>
            <AlreadyGuessedToast
                autoHideDuration={4000}
                onToastClose={handleToastClose}
            />
        </>
    );
};

export default Game;
