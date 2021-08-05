import { combineReducers, createStore } from "redux";
import { cardIdReducer, playerReducer, scoreReducer, turnReducer } from "./reducers";

const store = createStore(combineReducers({
    players: playerReducer,
    scores: scoreReducer,
    turn: turnReducer,
    cardIds: cardIdReducer
}))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store