import { styled } from '@mui/material/styles';

export const BlurredText = styled('span')`
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: ${({ theme }) => theme.palette.primary.main};
`;
