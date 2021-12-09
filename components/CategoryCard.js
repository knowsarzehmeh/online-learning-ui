import React from 'react'
import {
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native'

import { COLORS, FONTS, SIZES } from '../constants'

function CategoryCard({
    category,
    containerStyle,
}) {
    return (
        <TouchableOpacity>
            <ImageBackground
             source={category?.thumbnail}
             resizeMode='cover'
             style={{
                 width:200,
                 height: 150,
                 paddingVertical: SIZES.padding,
                 paddingHorizontal: SIZES.radius,
                 justifyContent: 'flex-end',
                 ...containerStyle
             }}
             imageStyle={{
                 borderRadius: SIZES.radius
             }}
            >
                {/* Category Title */}
                <Text
                  style={{
                      color: COLORS.white,
                      ...FONTS.h2,
                      width: 120
                  }}
                >
                    {category?.title}
                </Text>
            
             </ImageBackground> 
        </TouchableOpacity>
    )
}

export default CategoryCard
