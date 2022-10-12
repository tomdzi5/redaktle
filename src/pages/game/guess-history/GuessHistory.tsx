import { StyledCard } from './GuessHistory.styled';
import { useAppSelector } from '../../../app/hooks';
import { selectGuessHistory } from './guessHistorySlice';
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const GuessHistory = () => {
    const guessHistory = useAppSelector(selectGuessHistory);
    // scroll
    // flex zalezny od rozmiaru
    // dense
    return (
        <StyledCard>
            <TableContainer component={Card} sx={{ height: '100%', overflow: 'auto' }}>
                <Table aria-label="guess table" sticky-header>
                    <TableHead>
                        <TableRow>
                            <TableCell width="25%">#</TableCell>
                            <TableCell align="left" width="45%">Guess</TableCell>
                            <TableCell align="left" width="30%">Hits</TableCell>
                        </TableRow>
                    </TableHead>
                    { guessHistory.words && <TableBody>
                        {guessHistory.words.map((word) => (
                            <TableRow
                                key={word.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {word.order}
                                </TableCell>
                                <TableCell align="left">{word.value}</TableCell>
                                <TableCell align="left">{word.hits}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>}
                </Table>
            </TableContainer>
        </StyledCard>
    )
}

export default GuessHistory;