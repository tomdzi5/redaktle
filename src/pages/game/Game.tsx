import {Card, Container} from "@mui/material";
import { styled } from '@mui/material/styles';

const MainSection = styled(Card)`
  display: flex;
  flex-direction: row;
`;

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