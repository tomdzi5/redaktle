import { Card, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import Header from '../Header';
import Article from './article/Article';
import GuessBar from './guess-bar/GuessBar';
import { useAppDispatch } from '../../app/hooks';
import { setGuessText } from './guess-bar/guessSlice';

const StyledGrid = styled(Grid)`
  height: 100%;
  justify-content: space-between;
`;

const StyledCard = styled(Card)`
    flex-basis: 30%;
`;

const ArticleCard = styled(Card)`
  flex-basis: 70%;
`

const ArticleContainer = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Game = () => {
    const dispatch = useAppDispatch();
    const handleGuess = (guessText: string): void => {
        dispatch(setGuessText(guessText));
    };

    return (
        <>
            <Header />
            <ArticleContainer>
            <StyledGrid container sx={{ flexDirection: { xs: "column", md: "row"} }}>
                <ArticleCard>
                    <Article />
                    <GuessBar onGuess={(guessText) => handleGuess(guessText)} />
                </ArticleCard>
                <StyledCard>guess list</StyledCard>
            </StyledGrid>
            </ArticleContainer>
        </>
    )
}

export default Game;