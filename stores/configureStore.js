import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import themeReducer from './reducers/themeReducer'

export default function configureStore() {
    const store =   createStore(
        combineReducers({
            theme: themeReducer
        }),
        applyMiddleware(thunk)
    )
    
    return store;
}