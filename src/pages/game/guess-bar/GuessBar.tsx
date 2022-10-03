import { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Button, Grid, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const StyledFooter = styled('footer')(({ theme }) => ({
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main,
}));

const GuessInputField = styled(OutlinedInput)({
    backgroundColor: 'white',
    paddingLeft: 0,
});

type GuessBarProps = {
    onGuess: (guessText: string) => void;
};

const GuessBar = ({onGuess}: GuessBarProps) => {
    const [guessText, setGuessText] = useState('');
    const handleGuess = () => {
        onGuess(guessText);
        setGuessText('');
    }

    return (
        <StyledFooter>
            <Box>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <form onSubmit={handleGuess}>
                            <Button>Top</Button>
                            <GuessInputField
                                value={guessText}
                                onChange={(event) => setGuessText(event.target.value)}
                                placeholder="Guess"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            onClick={handleGuess}
                                        >
                                            <SearchIcon fontSize="small"/>
                                        </IconButton></InputAdornment>
                                }
                                size="small"/>

                            <Button type="submit" >Guess</Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </StyledFooter>
    )
}

export default GuessBar;