import { Typography, Modal } from '@mui/material';
import { EndGameModalContainer } from './GameWonPopup.styled';
import Confetti from 'react-confetti';
import { useAppSelector, useWindowSize } from '../../../app/hooks';
import { selectArticle } from '../article/articleSlice';

type PropsType = {
    onClose: () => void;
};

const GameWonPopup = ({ onClose }: PropsType) => {
    const { width, height } = useWindowSize();
    const { isGameWon } = useAppSelector(selectArticle);

    const CONFETTI_COLORS = [
        '#eaecf0',
        '#f8f9fa',
        '#d1dbdf',
        '#54595d',
        '#202122',
        '#a2a9b1',
    ];

    return (
        <>
            {isGameWon && (
                <Confetti
                    width={width}
                    height={height}
                    colors={CONFETTI_COLORS}
                />
            )}
            <Modal
                open={isGameWon}
                onClose={onClose}
                aria-labelledby="game-won-modal"
            >
                <EndGameModalContainer>
                    <Typography variant="h2">Game Won!</Typography>
                </EndGameModalContainer>
            </Modal>
        </>
    );
};

export default GameWonPopup;
