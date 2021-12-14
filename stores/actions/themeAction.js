import { lightTheme, darkTheme } from '../../constants' 
import { TOGGLE_THEME_BEGIN, TOGGLE_THEME_FAILURE, TOGGLE_THEME_SUCCESS } from '../types'


export function toggleThemeBegin() {
    return ({
        type: TOGGLE_THEME_BEGIN
    })
}

export function toggleThemeSuccess(selectedTheme) {
    return {
        type: TOGGLE_THEME_SUCCESS,
        payload: {selectedTheme}
    }
}

export function toggleThemeFailure(error) {
    return {
        type: TOGGLE_THEME_FAILURE,
        payload: {error}
    }
}


export function startToggleTheme(themeType) {
    
    return dispatch => {
        dispatch(toggleThemeBegin())

        switch (themeType) {
            case 'dark':
                dispatch(toggleThemeSuccess(darkTheme))
                break;
            case 'light':
                dispatch(toggleThemeSuccess(lightTheme))

            default:
                dispatch(toggleThemeFailure({ error: 'Invalid Theme type' }))
                break;
        }
    }
}