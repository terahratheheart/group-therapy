import { ADD_CARD_ID, ADD_PLAYER, ADD_TO_SCORE, CardAction, MINUS_FROM_SCORE, PlayerAction, REMOVE_PLAYER, RESET, RESET_VOTING_INDEX, ScoreAction, SetTurnAction, SET_PERFORMING_TURN, SET_VOTING_TURN} from "./actions";
import { CardIdState, PlayerReducerState, PlayerTurnState, ScoreReducerState } from "./types";

export function playerReducer(state:PlayerReducerState=[], action:PlayerAction) {
    switch(action.type){
        case ADD_PLAYER:
            return [...state, action.playerName]
        case REMOVE_PLAYER:
            let players = [...state]
            players.splice(action.playerIndex,1)
            return players
        case RESET:
            return []
        default:
            return state
    }
}

export function scoreReducer(state:ScoreReducerState=[], action:ScoreAction) {
    switch(action.type){
        case ADD_PLAYER:
            return [...state, {playerName: action.playerName, score: 0}]
        case REMOVE_PLAYER:
            let scores = [...state]
            scores.splice(action.playerIndex,1)
            return scores
        case ADD_TO_SCORE:
            let players = [...state]
            let currentScore = state[action.performingPlayerIndex].score
            let playerName = state[action.performingPlayerIndex].playerName
            players.splice(action.performingPlayerIndex, 1, {playerName: playerName, score: currentScore + 1})
            return players
        case MINUS_FROM_SCORE:
            let playerScores = [...state]
            let score = state[action.performingPlayerIndex].score
            let player = state[action.performingPlayerIndex].playerName
            if(score >= 1){playerScores.splice(action.performingPlayerIndex, 1, {playerName: player, score: score - 1})}
            else if(score === 0){playerScores.splice(action.performingPlayerIndex, 1, {playerName: player, score: 0})}
            return playerScores
        case RESET:
            return []
        default:
            return state
    }
}

export function turnReducer(state:PlayerTurnState={performingPlayerIndex: 0, votingPlayerIndex: 1}, action:SetTurnAction){
    switch(action.type){
        case SET_PERFORMING_TURN:
            return {
                ...state,
                performingPlayerIndex: (state.performingPlayerIndex+1) % action.numOfPlayers
            };
        case SET_VOTING_TURN:
            return {
                ...state,
                votingPlayerIndex: (state.votingPlayerIndex+1) %action.numOfPlayers
            }
        case RESET_VOTING_INDEX:
            return {
                ...state,
                votingPlayerIndex: (state.performingPlayerIndex+1)
            }
        case RESET:
            return {performingPlayerIndex: 0, votingPlayerIndex: 1}
        default:
            return state
    }
}

export function cardIdReducer(state:CardIdState=[], action:CardAction){
    switch (action.type) {
        case ADD_CARD_ID:
            return [...state, action.cardId]
        case RESET:
            return []
        default:
            return state
    }
    
}