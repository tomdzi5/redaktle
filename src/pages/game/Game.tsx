import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import Header from '../Header';
import Article from './article/Article';
import GuessHistory from './guessHistory/GuessHistory';

const StyledGrid = styled(Grid)`
    height: 90vh;
    justify-content: space-between;
`;

const Game = () => {
    return (
        <>
            <Header />
            <StyledGrid
                container
                sx={{ flexDirection: { xs: 'column', md: 'row' } }}
            >
                <Article />
                <GuessHistory />
            </StyledGrid>
            <footer>search bar</footer>
        </>
    );
};
export default Game;
