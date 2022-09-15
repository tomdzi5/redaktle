import {Card, Container} from "@mui/material";
import { styled } from '@mui/material/styles';

const MainSection = styled(Card)(
    ({theme}) => `
  display: flex;
  flex-direction: row;
  background-color: ${theme.palette.primary.main}
`);

const Game = () => {
    return (
        <>
            <header> redactle, info, stats, settings</header>
            <MainSection>
                <Card>article</Card>
                <Card>guess list</Card>
            </MainSection>
            <footer>search bar</footer>
        </>
    )
}

export default Game;