import React from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import Animated, {
   Extrapolate,
   interpolate,
   useAnimatedScrollHandler,
   useAnimatedStyle,
   useSharedValue,
   withDelay,
   withTiming,
   runOnJS 
} from 'react-native-reanimated'

import { SharedElement } from 'react-navigation-shared-element'

import { COLORS, FONTS, SIZES, icons, images, dummyData } from '../../constants'
import { IconButton, LineDivider, HorizontalCourseCard } from '../../components'

function CourseListing({
    appTheme,
    route,
    navigation
}) {

   const { category, sharedElementPrefix } = route.params

   function renderHeader() {
       return ( 
           <Animated.View
            style={{
                position: 'absolute',
                 top: 0,
                 left: 0,
                 right: 0,
                 height: 250,
                 overflow: 'hidden'
            }}
           >
               {/* Background Img */}
               <SharedElement
                 id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
                 style={[StyleSheet.absoluteFillObject]}
               >
                   <Image
                        source={category?.thumbnail}
                        resizeMode='cover'
                        style={{
                            height:'100%',
                            width: '100%',
                            borderBottomLeftRadius: 60,
                        }}
                   />

               </SharedElement>

               {/* Title */}
               <Animated.View
                 style={{
                     position: 'absolute',
                     bottom: 70,
                     left: 30
                 }}
               >
                   <SharedElement
                     id={`${sharedElementPrefix}-CategoryCard-Title-${category?.id}`}
                   >
                       <Text
                         style={{
                             color: COLORS.white,
                             ...FONTS.h2,
                         }}
                       >
                           {category?.title}
                       </Text>
                   </SharedElement>
                     
               </Animated.View>
           </Animated.View>
           )
       
   }


    return (
        <View
         style={{
             flex: 1
         }}
        >
            {renderHeader()}
        </View>
    )
}

function mapStateToProps(state) {
    return {
        appTheme: state.theme.appTheme,
        error: state.theme.error
    }
}


CourseListing.sharedElements = (routes, otherRoute, showing ) => {
    const { category, sharedElementPrefix } = routes.params

    return [
        {
            id: `${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`
        },
        {
            id: `${sharedElementPrefix}-CategoryCard-Title-${category?.id}`
        },
    ]
}

export default connect(mapStateToProps)(CourseListing)
