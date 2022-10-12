export type HistoryWord = {
    value: string;
    id: string;
    order: string;
    hits: number
}

export type GuessHistory = {
    words: HistoryWord[],
}