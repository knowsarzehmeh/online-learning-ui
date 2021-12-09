
import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { SIZES, COLORS, FONTS, icons } from '../constants'
import { IconLabel } from './index'

function VerticalCourseCard({
    contianerStyle,
    course
}) {
    return (
        <TouchableOpacity
         style={{
             width: 270,
             ...contianerStyle
         }}
        >
            {/* Thumnail */}
            <Image
             source={course.thumbnail}
             resizeMode='cover'
             style={{
                 width: '100%',
                 height: 150,
                 marginBottom: SIZES.radius,
                 borderRadius: SIZES.radius,
             }}
            />

            {/* Details */}
            <View
             style={{
                 flexDirection: 'row'
             }}
            >
                {/* Play Icon */}
                <View
                 style={{
                     backgroundColor: COLORS.primary,
                     alignItems: 'center',
                     justifyContent: 'center',
                     borderRadius: 55,
                     width: 45,
                     height: 45
                 }}
                >
                    <Image
                     source={icons.play}
                     resizeMode='contain'
                     style={{
                         width: 20,
                         height: 20
                     }}
                    />
                </View>


                {/* Info Section */}
                <View
                 style={{
                     flexShrink: 1,
                     paddingHorizontal: SIZES.radius,
                 }}
                 >
                     <Text 
                     style={{
                        flexGrow: 1,
                        ...FONTS.h3,
                        fontSize: 18,
                     }}>
                         {course.title}
                     </Text>
                </View>
            </View>

            {/* Duration Section */}
            <IconLabel
              icon={icons.time}
              label={course.duration}
              containerStyle={{
                  marginTop: SIZES.base,
              }}
            />
        </TouchableOpacity >
    )
}

export default VerticalCourseCard
