export type PlayerReducerState = string[]

export interface PlayerScore {
    playerName: string,
    score: number
}

export type ScoreReducerState = PlayerScore[] 


export interface PlayerTurnState {
    performingPlayerIndex: number
    votingPlayerIndex: number
}

export type CardIdState = number[]

