import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import {COLORS, FONTS, SIZES, icons } from '../constants'

function ProfileValue({
    icon,
    label,
    value,
    onPress
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
                 backgroundColor: COLORS.additionalColor11,
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
                     height: 15
                 }}
                />
            
        </TouchableOpacity>
    )
}

export default ProfileValue
