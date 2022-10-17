import { Card } from '@mui/material';

import Header from './header';
import Article from './article';
import GuessBar from './guess-bar';
import { useAppDispatch } from '../../app/hooks';
import { setGuessText } from './guess-bar/guessSlice';
import { ArticleContainer, StyledGrid } from './Game.styled';
import GuessHistory from './guess-history/GuessHistory';
import AlreadyGuessedToast from './is-guessed-toast';
import { setAlreadyGuessedState } from './is-guessed-toast/isGuessedToastSlice';

const Game = () => {
    const dispatch = useAppDispatch();
    const handleGuess = (guessText: string): void => {
        dispatch(setGuessText(guessText));
    };

    const onToastCloseHandler = () => {
        dispatch(setAlreadyGuessedState(false));
    };

    return (
        <>
            <Header />
            <ArticleContainer>
                <StyledGrid
                    container
                    sx={{ flexDirection: { xs: 'column', md: 'row' } }}
                >
                    <Card sx={{ flexBasis: { xs: '60%', md: '70%' } }}>
                        <Article />
                        <GuessBar
                            onGuess={(guessText) => handleGuess(guessText)}
                        />
                    </Card>
                    <GuessHistory />
                </StyledGrid>
            </ArticleContainer>
            <AlreadyGuessedToast
                autoHideDuration={4000}
                onToastClose={onToastCloseHandler}
            />
        </>
    );
};

export default Game;
