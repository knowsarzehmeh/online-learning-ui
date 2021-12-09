import React from 'react'
import {
    TouchableOpacity,
    Text,
} from 'react-native'
import { FONTS, COLORS} from '../constants'

function TextButton({
    contentContainerStyle,
    disabled,
    label,
    labelStyle,
    onPress
}) {
    return (
        <TouchableOpacity
         style={{
             justifyContent: 'center',
             alignItems: 'center',
             backgroundColor: COLORS.primary,
             ...contentContainerStyle
         }}
         disabled={disabled}
         onPress={onPress}
        >
            <Text
             style={{
                 color: COLORS.white,
                 ...FONTS.h3,
                 ...labelStyle
             }}
            >{label}</Text>
        </TouchableOpacity>
    )
}

export default TextButton
