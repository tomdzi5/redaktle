import { styled } from '@mui/material/styles';

export const BlurredText = styled('span')`
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: ${({ theme }) => theme.palette.primary.main};
`;
