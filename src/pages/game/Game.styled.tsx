import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledGrid = styled(Grid)`
    max-height: 80vh;
    height: 80vh;
    justify-content: space-between;
`;

export const ArticleContainer = styled('div')`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
