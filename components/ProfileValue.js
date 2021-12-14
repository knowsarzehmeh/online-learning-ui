import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import {COLORS, FONTS, SIZES, icons } from '../constants'

function ProfileValue({
    icon,
    label,
    value,
    onPress,
    appTheme 
}) {
    return (
        <TouchableOpacity
         style={{
             flexDirection: 'row',
             height: 80,
             alignItems: 'center',
         }}
         onPress={onPress}
        >

            {/* Icons */}
            <View
             style={{
                 width: 40,
                 height: 40,
                 alignItems: 'center',
                 justifyContent: 'center',
                 borderRadius: 20,
                 backgroundColor: appTheme?.backgroundColor3,
             }}
            >
                <Image
                  source={icon}
                  resizeMode='contain'
                   style={{
                       width: 25,
                       height: 25,
                       tintColor: COLORS.primary,
                   }}
                />
            </View>

                  {/* Labels & Values */}
                  <View 
                 style={{
                     flex: 1,
                     marginLeft: SIZES.radius,
                 }}
                >
                    {
                        label
                         &&
                        <Text
                     style={{
                         color: COLORS.gray30,
                         ...FONTS.body3,
                     }}
                    >
                        {label}
                    </Text>
                    }

                    {
                        value
                        &&

                    <Text
                    style={{
                        ...FONTS.h3,
                        color: appTheme?.textColor
                    }}
                   >
                       {value}
                   </Text>
                    }
                </View>

                {/* Icon */}
                <Image 
                 source={icons.right_arrow}
                 resizeMode='contain'
                 style={{
                     width: 15,
                     height: 15,
                     tintColor: appTheme?.tintColor
                 }}
                />
            
        </TouchableOpacity>
    )
}

function mapStateToProps(state) {
    return {
        appTheme: state.theme.appTheme,
        error: state.theme.error
    }
}

export default connect(mapStateToProps)(ProfileValue)
