import { Card, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Modals from "../../components/Modals";
import Article from "./article/Article";

const StyledGrid = styled(Grid)`
  height: 90vh;
  justify-content: space-between;
`;

const StyledCard = styled(Card)`
  flex-basis: 30%;
`;

const Game = () => {
  const [modalType, setModalType] = useState<
    "Info" | "Stats" | "Settings" | null
  >("Info");

  const onClose = (
    event:
      | React.MouseEvent<HTMLElement>
      | React.MouseEvent<HTMLLIElement>
      | null,
    newAligment: string | null
  ) => {
    console.log(event);
    console.log(newAligment);
    setModalType(null);
  };

  return (
    <>
      <header> Redaktle, info, stats, settings</header>
      <Modals onClose={onClose} modalType={modalType} />
      <StyledGrid container sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Article />
        <StyledCard>guess list</StyledCard>
      </StyledGrid>
      <footer>search bar</footer>
    </>
  );
};

export default Game;
