import { Typography, Modal } from '@mui/material';
import { ModalContainer } from './GameWonPopup.styled';
import Confetti from 'react-confetti';
import { useAppSelector, useWindowSize } from '../../../app/hooks';
import { selectGameWon } from './gameWonSlice';

type PropsType = {
    onClose: () => void;
};

const GameWonPopup = ({ onClose }: PropsType) => {
    const { width, height } = useWindowSize();
    const { isGameWon } = useAppSelector(selectGameWon);

    return (
        <>
            {isGameWon && <Confetti width={width} height={height} />}
            <Modal
                open={isGameWon}
                onClose={onClose}
                aria-labelledby="game-won-modal"
            >
                <ModalContainer>
                    <Typography variant="h2">Game Won!</Typography>
                </ModalContainer>
            </Modal>
        </>
    );
};

export default GameWonPopup;
