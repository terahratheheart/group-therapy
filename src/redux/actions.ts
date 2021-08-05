import { Action } from "redux"

export const ADD_PLAYER = "ADD_PLAYER"
export const REMOVE_PLAYER = "REMOVE_PLAYER"
export const SET_PERFORMING_TURN = "SET_PERFORMING_TURN"
export const SET_VOTING_TURN = "SET_VOTING_TURN"
export const ADD_CARD_ID = "ADD_CARD_ID"
export const ADD_TO_SCORE = "ADD_TO_SCORE"
export const MINUS_FROM_SCORE = "MINUS_FROM_SCORE"
export const RESET_VOTING_INDEX = "RESET_VOTING_INDEX"
export const RESET= "RESET"


export interface AddPlayerAction extends Action<typeof ADD_PLAYER>{
    playerName: string
}

export interface RemovePlayerAction extends Action<typeof REMOVE_PLAYER>{
    playerIndex: number
}

export interface SetPerformingTurnAction extends Action<typeof SET_PERFORMING_TURN>{
    numOfPlayers: number
}

export interface SetVotingTurnAction extends Action<typeof SET_VOTING_TURN>{
    numOfPlayers: number
}

export interface AddCardIdAction extends Action<typeof ADD_CARD_ID>{
    cardId: number
}

export interface AddToScoreAction extends Action<typeof ADD_TO_SCORE>{
    performingPlayerIndex: number,
}

export interface MinusScoreAction extends Action<typeof MINUS_FROM_SCORE>{
    performingPlayerIndex: number,
}

export interface ResetVoterAction extends Action<typeof RESET_VOTING_INDEX>{
}

export interface ResetAction extends Action<typeof RESET>{}


export type PlayerAction = AddPlayerAction | RemovePlayerAction | ResetAction
export type ScoreAction = AddPlayerAction| RemovePlayerAction | AddToScoreAction | MinusScoreAction | ResetAction
export type SetTurnAction = SetPerformingTurnAction | SetVotingTurnAction | ResetVoterAction | ResetAction
export type CardAction = AddCardIdAction | ResetAction

export function addPlayer(playerName:string):PlayerAction{
    return {
        type: ADD_PLAYER,
        playerName
    }
}

export function removePlayer(playerIndex:number): PlayerAction{
    return{
        type: REMOVE_PLAYER,
        playerIndex
    }
}

export function setPerformingTurn(numOfPlayers:number): SetTurnAction{
    return{
        type: SET_PERFORMING_TURN,
        numOfPlayers,
    }
}

export function setVotingTurn(numOfPlayers: number): SetTurnAction{
    return{
        type: SET_VOTING_TURN,
        numOfPlayers
    }
}

export function resetVoter(): SetTurnAction{
    return{
        type: RESET_VOTING_INDEX
    }
}

export function addCardId(cardId: number): CardAction {
    return {
        type: ADD_CARD_ID,
        cardId
    }
}

export function addScore(performingPlayerIndex: number): ScoreAction{
    return{
        type: ADD_TO_SCORE,
        performingPlayerIndex,
    }
}

export function minusScore(performingPlayerIndex: number): ScoreAction{
    return{
        type: MINUS_FROM_SCORE,
        performingPlayerIndex
    }
}

export function resetGame(): ResetAction{
    return{
        type: RESET,
    }
}

