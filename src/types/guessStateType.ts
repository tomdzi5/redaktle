export type HistoryWord = {
    value: string;
    id: string;
    order: string;
};

export type guessStateType = {
    guessHistory: HistoryWord[];
    isAlreadyGuessed: boolean;
};
