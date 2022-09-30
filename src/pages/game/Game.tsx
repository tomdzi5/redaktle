import { Card, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Article from "./article/Article";
import Header from "../../app/components/Header";

const StyledGrid = styled(Grid)`
  height: 90vh;
  justify-content: space-between;
`;

const StyledCard = styled(Card)`
  flex-basis: 30%;
`;

const Game = () => {
  return (
    <>
      <Header />
      <StyledGrid container sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Article />
        <StyledCard>guess list</StyledCard>
      </StyledGrid>
      <footer>search bar</footer>
    </>
  );
};

export default Game;
