import styled from 'styled-components';
import { Box, Grid } from '@mui/material';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const GuessBar = () => {
    return (
        <StyledFooter>
            <Box>

                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            footer2
                        </Grid>
                    </Grid>

            </Box>
        </StyledFooter>
    )
}

export default GuessBar;