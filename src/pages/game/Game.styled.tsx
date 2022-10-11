import { Card, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledGrid = styled(Grid)`
    height: 100%;
    justify-content: space-between;
`;

export const StyledCard = styled(Card)`
    flex-basis: 30%;
`;

export const ArticleCard = styled(Card)`
    flex-basis: 70%;
`;

export const ArticleContainer = styled('div')`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
