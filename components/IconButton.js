import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants'


function IconButton({ containerStyle, icon, iconStyle, onPress }) {
    return (
        <TouchableOpacity
         style={containerStyle}
         onPress={onPress}
        >
            <Image 
             source={icon}
             style={{
                 width: 30,
                 height: 30,
                 tintColor: COLORS.white,
                 ...iconStyle,
             }}
             resizeMode='contain'

            />
        </TouchableOpacity>
    )
}

export default IconButton
