import { Card, Grid } from '@mui/material';
import { styled as styledMui } from '@mui/material/styles';
import styled from 'styled-components';

import Article from './article/Article';
import GuessBar from './guess-bar/GuessBar';

const StyledGrid = styledMui(Grid)`
  height: 100%;
  justify-content: space-between;
`;

const StyledCard = styledMui(Card)`
  flex-basis: 30%;
`

const ArticleCard = styledMui(Card)`
  flex-basis: 70%;
`

const GameContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Game = () => {
    return (
        <GameContainer>
            <header>
                <p>Redaktle, info, stats, settings</p>
            </header>
            <StyledGrid container sx={{ flexDirection: { xs: "column", md: "row"} }}>
                <ArticleCard>
                    <Article />
                    <GuessBar />
                </ArticleCard>
                <StyledCard>guess list</StyledCard>
            </StyledGrid>
        </GameContainer>
    )
}

export default Game;