import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import { CategoryCard, HorizontalCourseCard, IconButton, LineDivider, TextButton, VerticalCourseCard } from '../../components';
import { COLORS, SIZES, FONTS, icons, images, dummyData, constants} from '../../constants'


const Section = ({
    contianerStyle,
    title,
    onPress,
    children
}) => {
    return (
        <View 
        style={{
            ...contianerStyle
        }}>
            <View 
            style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding
            }}>
                <Text
                 style={{
                     flex: 1,
                     ...FONTS.h2
                 }}
                >
                    {title}
                </Text>
                
                <TextButton 
                  label='See All'
                  contentContainerStyle={{
                      width: 80,
                      borderRadius: 30,
                      backgroundColor: COLORS.primary
                  }}
                  onPress={onPress}
                />
            </View>

            {children}
        </View>
    )
}


const Home = () => {

    const navigation = useNavigation()

    function renderHeader() {
        return (
            <View
             style={{
                 flexDirection: 'row',
                 marginTop: 40,
                 marginBottom: 10,
                 paddingHorizontal: SIZES.padding,
                 alignItems: 'center'
             }}
            >
                {/* Greetings */}
                <View 
                style={{
                    flex: 1,
                }}>
                    <Text style={{...FONTS.h2}} >Hello, Osaze</Text>
                    <Text style={{ color: COLORS.gray50, ...FONTS.body3}}>Wednesday, 8th Dec 2021</Text>
                </View>

                {/* Notif */}
                <IconButton
                  icon={icons.notification}
                  iconStyle={{
                      tintColor: COLORS.black,
                  }}
                />
            </View>
        )
    }

    function renderStartLearning() {
        return (
            <ImageBackground
             source={images.featured_bg_image}
             style={{
                 alignItems: 'flex-start',
                 marginTop: SIZES.padding,
                 marginHorizontal: SIZES.padding,
                 padding: 15
             }}
             imageStyle={{
                  borderRadius: SIZES.radius
             }}
            >
                {/* Info Section */}
                <Text
                 style={{
                     color: COLORS.white,
                     ...FONTS.body2,
                 }}
                >
                    HOW TO
                </Text>
                <Text
                 style={{
                     color: COLORS.white,
                     ...FONTS.h2
                 }}
                >
                    Make your brand more visible with our checklist
                </Text>
                <Text
                 style={{
                     color: COLORS.white,
                     ...FONTS.body4
                 }}
                >
                    By Scott Harris
                </Text>

                {/* Image Section */}
                <Image
                 source={images.start_learning}
                 resizeMode='contain'
                 style={{
                     width: '100%',
                     height: 110,
                     marginTop: SIZES.padding
                 }}
                />

                {/* Button Section */}
                <TextButton 
                 label='Start Learning'
                 contentContainerStyle={{
                     height: 40,
                     paddingHorizontal: SIZES.padding,
                     borderRadius: 20,
                     backgroundColor: COLORS.white
                 }}
                 labelStyle={{
                     color: COLORS.black,
                 }}
                />
            </ImageBackground>
        )
    }


    function renderCourses() {
        return (
            <FlatList
                horizontal
                data={dummyData.courses_list_1}
                listKey="Courses"
                keyExtractor={item => `Courses-${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.padding,
                }}
                renderItem={
                    ({ item, index}) => {
                        return (
                            <VerticalCourseCard 
                            course={item} 
                            contianerStyle={{
                                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                                marginRight: index === dummyData.courses_list_1.length - 1 ? SIZES.padding : 0
                            }}
                            />
                        );
                    }
                }
            />
        )
    }

    function renderCategories() {
        return (
            <Section title='Categories'>
                <FlatList
                    horizontal
                    data={dummyData.categories}
                    listKey="Categories"
                    keyExtractor={item => `Categories-${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: SIZES.radius,
                        marginBottom: SIZES.radius,
                    }}
                    renderItem={
                        ({item, index}) => {
                            return (
                                <CategoryCard 
                                sharedElementPrefix="Home"
                                category={item} 
                                containerStyle={{
                                    marginLeft: index === 0 ? SIZES.padding : SIZES.base,
                                    marginRight: index === dummyData.categories.length - 1 ?  SIZES.padding : 0
                                }}
                                onPress={() => navigation.navigate({
                                    name: 'CourseListing',
                                    params: {
                                        category: item,
                                        sharedElementPrefix: 'Home'
                                    }
                                }) }
                                />
                            )
                        }
                    }
                />
            </Section>
        )
    }

    function renderPopularCourses() {
        return (
            <Section title="Popular Courses"
             containerStyle={{
                 marginTop: 100
             }}
            >
                <FlatList 
                //  horizontal
                 data={dummyData.courses_list_2}
                 listKey="PopularCourses"
                 scrollEnabled={false}
                 keyExtractor={item => `PopularCourses-${item.id}`}
                 showsHorizontalScrollIndicator={false}
                 contentContainerStyle={{
                     marginTop: SIZES.radius,
                     paddingHorizontal: SIZES.padding
                 }}
                 renderItem={
                     ({item, index}) => {

                         return (
                            <HorizontalCourseCard 
                                course={item}
                                containerStyle={{
                                    marginVertical: SIZES.padding,
                                    marginTop: index === 0 ? SIZES.radius : SIZES.padding,
                                    // marginRight: index === dummyData.categories.length - 1 ?  SIZES.padding : 0
                                }}
                             />
                         );
                     }
                 }
                 ItemSeparatorComponent={() => (
                 <LineDivider 
                 lineStyle={{
                     height: 1,
                     backgroundColor: COLORS.gray20
                }} /> 
                 
                 )}
                />
            </Section>
        )
    }

    return (
        <View
         style={{
             flex:1,
             backgroundColor: COLORS.white
         }}
        >
            {/* HeaderSection */}
             {renderHeader()}

            {/* ContentSection */}
            <ScrollView
            contentContainerStyle={{
                paddingBottom: 150,
            }}
            showsVerticalScrollIndicator={false}
            >
                {/* StartLearning Section */}
                {renderStartLearning()}

                {/* Courses */}
                {renderCourses()}

                <LineDivider lineStyle={{ marginVertical: SIZES.padding}} />


                {/* Categories */}
                {renderCategories()}

                {/* Popular Courses */}
                {renderPopularCourses()}
            </ScrollView>
        </View>
    )
}

export default Home;