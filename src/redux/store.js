import { combineReducers, createStore } from 'redux'

const defaultWord = [
    { _id: 'a', en: 'One111', vn: 'Mot', isMemoried: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemoried: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemoried: true }
]

function wordReducer(state = defaultWord, action) {
    if (action.type === 'REMOVE_WORD') {
        return state.filter(word => word._id !== action._id)
    };
    if (action.type === 'TOGGLE_WORD') {
        return state.map(word => {
            if (word._id !== action._id) return word;
            return {...word, isMemoried: !word.isMemoried} 
        });
    }
    if (action.type === 'ADD_WORD') return [action.word, ...state]
    return state;
}

function shouldShowFormReducer(state = false, action) {
    if (action.type === 'TOGGLE_FORM') return !state;
    return state;
}

function filterModeReducer(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_FILTER_MODE') return action.filterMode;
    return state;
}

const reducer = combineReducers({
    words: wordReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
})

export const store = createStore(reducer);