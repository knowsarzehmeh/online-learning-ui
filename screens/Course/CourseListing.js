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

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)
const HEADER_HEIGHT = 250;


function CourseListing({
    appTheme,
    route,
    navigation
}) {

   const { category, sharedElementPrefix } = route.params
   const headerSharedValue = useSharedValue(80)
   const flatListRef = React.useRef()
   const scrollY = useSharedValue(0)
   const onScroll = useAnimatedScrollHandler((event) => {
       scrollY.value = event.contentOffset.y
   })


   function backHandler() {
       navigation.goBack();
   }


   function renderHeader() {

        const inputRange = [ 0, HEADER_HEIGHT - 50 ]

        headerSharedValue.value = withDelay(500, withTiming(0, {
            duration: 500
        }))

        const headerFadeInAnimatedStyle = useAnimatedStyle(() => {
            return {
                opacity: interpolate(headerSharedValue.value, [80, 0], [0, 1])
            }
        })

        const headerSlideInAnimatedStyle = useAnimatedStyle(() => {
            return {
                transform: [
                    {
                        translateY: headerSharedValue.value
                    }
                ]
            }
        });
        
        const headerHeightAnimatedStyle = useAnimatedStyle(() => {
            return {
                height: interpolate(scrollY.value, inputRange, [ HEADER_HEIGHT, 120 ], Extrapolate.CLAMP)
            }
        })

        const headerHideOnScrollAnimatedStyle = useAnimatedStyle(() => {
            return {
                opacity: interpolate(scrollY.value, [80, 0], [ 0, 1 ], Extrapolate.CLAMP),
                transform: [
                    {
                        translateY: interpolate(scrollY.value, inputRange, [0, 200], Extrapolate.CLAMP)
                    }
                ]
            }
        })

        const headerShowOnScrollAnimatedStyle = useAnimatedStyle(() => {
            return {
                opacity: interpolate(scrollY.value, [80, 0], [1, 0], Extrapolate.CLAMP),
                transform: [
                    {
                        translateY: interpolate(scrollY.value, inputRange, [ 50, 130], Extrapolate.CLAMP )
                    }
                ]
            }
        })

       return ( 
           <Animated.View
            style={[{
                position: 'absolute',
                 top: 0,
                 left: 0,
                 right: 0,
                 height: 250,
                 overflow: 'hidden'
            },
            headerHeightAnimatedStyle
        ]}
           >
               {/* Background Img */}
               <SharedElement
                 id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
                 style={[StyleSheet.absoluteFillObject]}
               >
                   <Image
                        source={category?.thumbnail}
                        resizeMode='cover'
                        style={[{
                            height:'100%',
                            width: '100%',
                            borderBottomLeftRadius: 60,
                        },
            
                    ]}
                   />

               </SharedElement>

               {/* Title */}
               <Animated.View
                 style={[{
                     position: 'absolute',
                     top: -80,
                     left: 0,
                     right: 0,
                 },
                 headerShowOnScrollAnimatedStyle
                ]}
               >
                   <Text
                    style={{
                        color: COLORS.white,
                        textAlign: 'center',
                        ...FONTS.body2,
                    }}
                   >{category?.title}</Text>
               </Animated.View>
               <Animated.View
                 style={[{
                     position: 'absolute',
                     bottom: 70,
                     left: 30
                 },
                 headerHideOnScrollAnimatedStyle
                ]}
               >
                   <SharedElement
                     id={`${sharedElementPrefix}-CategoryCard-Title-${category?.id}`}
                     style={[StyleSheet.absoluteFillObject ]}
                   >
                       <Text
                         style={{
                             position: 'absolute',
                             color: COLORS.white,
                             ...FONTS.h2,
                         }}
                       >
                           {category?.title}
                       </Text>
                   </SharedElement>
                     
               </Animated.View>

               {/* Back Btn */}
               <Animated.View
                 style={headerFadeInAnimatedStyle}
               >
                    <IconButton 
                     icon={icons.back}
                     iconStyle={{
                         tintColor: COLORS.black,
                     }}
                     containerStyle={{
                         position: 'absolute',
                         top: 40,
                         left: 20,
                         width: 50,
                         height: 50,
                         alignItems: 'center',
                         justifyContent: 'center',
                         borderRadius: 25,
                         backgroundColor: COLORS.white,
                     }}
                     onPress={() => {

                        if(scrollY.value > 0 && scrollY.value <= 200) {
                            flatListRef.current?.scrollToOffset({
                                offset: 0,
                                animated: true
                            })

                            setTimeout(() => {
                                headerSharedValue.value = withTiming(80, {
                                    duration: 500,
                                }, () => {
                                    runOnJS(backHandler)()
                                } )
                           
    
                            }, 100);
                        }
                        else {
                            backHandler()
                        }

                        
                     }}
                    />
               </Animated.View>

                  {/* Category Image */}
                  <Animated.Image
                    source={images.mobile_image}
                    resizeMode='contain'
                    style={[{
                        position: 'absolute',
                        bottom: -40,
                        right: 40,
                        width: 100,
                        height: 200
                    },
                    headerFadeInAnimatedStyle,
                    headerSlideInAnimatedStyle,
                    headerHideOnScrollAnimatedStyle,
                ]}
                    />

           </Animated.View>
           )
       
   }


   function renderResults() {
       
    return (
        <AnimatedFlatlist
            ref={flatListRef}
            data={dummyData.courses_list_2}
            keyExtractor={item => `Results-${item.id}`}
            contentContainerStyle={{
                paddingHorizontal: SIZES.padding,

            }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            keyboardDismissMode="on-drag"
            onScroll={onScroll}
            ListHeaderComponent={() => {
                return (
                    <View
                      style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 270,
                          marginBottom: SIZES.base,
                      }}
                     >
                         {/* Results */}
                         <Text
                          style={{
                              flex: 1,
                              ...FONTS.body3,
                          }}
                         >
                             5,767 Results
                         </Text>

                         {/* Filter Btn */}
                         <IconButton 
                            icon={icons.filter}
                            iconStyle={{
                                width: 20,
                                height: 20
                            }}
                            containerStyle={{
                                width: 40,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                backgroundColor: COLORS.primary
                            }}
                         />
                    </View>
                )
            }}

            renderItem={({item, index}) => {
                return (
                    <HorizontalCourseCard 
                     course={item}
                     containerStyle={{
                         marginVertical: SIZES.padding,
                         marginTop: index === 0 ? SIZES.radius : SIZES.padding
                     }}
                    />
                )
            }}
            
          ItemSeparatorComponent={() => <LineDivider lineStyle={{ height: 1, backgroundColor: COLORS.gray20 }} />}
        />
    );
   }



    return (
        <View
         style={{
             flex: 1
         }}
        >
            {/* Results */}
            {renderResults()}

            {/* Header */}
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
