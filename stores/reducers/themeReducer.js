
import { selectedTheme } from '../../constants'
import { TOGGLE_THEME_BEGIN, TOGGLE_THEME_SUCCESS, TOGGLE_THEME_FAILURE } from '../types'

const themeDefaultState = {
    appTheme: selectedTheme,
    error: null,
}

export default themeReducer = (state = themeDefaultState, action ) => {
    switch (action.type) {
        case TOGGLE_THEME_BEGIN:
            return { ...state, error: null }
        case TOGGLE_THEME_SUCCESS:
             return {...state, appTheme: action.payload.selectedTheme}
        case TOGGLE_THEME_FAILURE:
            return {...state, error: action.payload.error}
        default:
            return state
    }
}