import { combineReducers, createStore } from 'redux'

const defaultWord = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemoried: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemoried: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemoried: true }
]

function wordReducer(state = defaultWord, action) {
    return state;
}

function shouldShowFormReducer(state = false, action) {
    return state;
}

function filterModeReducer(state = 'SHOW_ALL', action) {
    return state;
}

const reducer = combineReducers({
    word: wordReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
})

export const store = createStore(reducer);