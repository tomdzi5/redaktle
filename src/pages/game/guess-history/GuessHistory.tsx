import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import { HeaderCell, StyledCard } from './GuessHistory.styled';
import { useAppSelector } from '../../../app/hooks';
import { selectGuessHistory } from './guessHistorySlice';

const GuessHistory = () => {
    const guessHistory = useAppSelector(selectGuessHistory);

    return (
        <StyledCard
            sx={{
                flexBasis: { xs: '40%', md: '30%' },
                maxHeight: { xs: '36vh', md: '80vh' },
            }}
        >
            <TableContainer
                component={Card}
                sx={{ height: '100%', overflow: 'auto' }}
            >
                <Table size="small" aria-label="guess table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <HeaderCell width="25%">#</HeaderCell>
                            <HeaderCell align="left" width="45%">
                                Guess
                            </HeaderCell>
                            <HeaderCell align="left" width="30%">
                                Hits
                            </HeaderCell>
                        </TableRow>
                    </TableHead>
                    {guessHistory.words && (
                        <TableBody>
                            {guessHistory.words.map((word) => (
                                <TableRow
                                    key={word.id}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {word.order}
                                    </TableCell>
                                    <TableCell align="left">
                                        {word.value}
                                    </TableCell>
                                    <TableCell align="left">
                                        {word.hits}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </StyledCard>
    );
};

export default GuessHistory;
