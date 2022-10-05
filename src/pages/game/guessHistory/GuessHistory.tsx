import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';


const StyledCard = styled(Card)`
  flex-basis: 30%;
`

const GuessHistory = () => {
    return (
        <StyledCard>
            guess history
        </StyledCard>
    )
}

export default GuessHistory;