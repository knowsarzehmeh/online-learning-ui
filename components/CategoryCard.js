import React from 'react'
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'

import { COLORS, FONTS, SIZES } from '../constants'

function CategoryCard({
    sharedElementPrefix,
    category,
    containerStyle,
    onPress
}) {
    return (
        <TouchableOpacity 
        style={{
            height: 150,
            width: 200,
            ...containerStyle
        }}
        onPress={onPress}
        >
            {/* Image Bg */}
           <SharedElement
                id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
                style={[StyleSheet.absoluteFillObject]}
           >
                <Image
                    source={category?.thumbnail}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: SIZES.radius
                    }}
                    />
           </SharedElement>

           {/* Title */}
           <View
             style={{
                 position:'absolute',
                 bottom: 50,
                 left: 5,
                 maxWidth: 120
             }}
           >
               <SharedElement
                    id={`${sharedElementPrefix}-CategoryCard-Title-${category?.id}`}
                    style={[StyleSheet.absoluteFillObject]}
               >
               <Text
                  style={{
                      color: COLORS.white,
                      position: 'absolute',
                      ...FONTS.h2
                  }}
               >
                   {category?.title}
               </Text>
               </SharedElement>
           </View>
        </TouchableOpacity>
    )
}


// <ImageBackground
// source={category?.thumbnail}
// resizeMode='cover'
// style={{
//     width:200,
//     height: 150,
//     paddingVertical: SIZES.padding,
//     paddingHorizontal: SIZES.radius,
//     justifyContent: 'flex-end',
//     ...containerStyle
// }}
// imageStyle={{
//     borderRadius: SIZES.radius
// }}
// >
//    {/* Category Title */}
//    <Text
//      style={{
//          color: COLORS.white,
//          ...FONTS.h2,
//          width: 120
//      }}
//    >
//        {category?.title}
//    </Text>

// </ImageBackground> 

export default CategoryCard
