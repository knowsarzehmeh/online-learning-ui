
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import { startToggleTheme } from '../../stores/actions/themeAction';

import { IconButton, TextButton, LineDivider, ProgressBar, ProfileValue, ProfileRadioButton } from '../../components'
import {COLORS, FONTS, SIZES, icons, images, lightTheme } from '../../constants'

const Profile = ({ appTheme, error, toggleTheme }) => {



    const [newCourseNotification, setNewCourseNotification] = React.useState(false)
    const [studyReminder, setStudyReminder] = React.useState(false)

    // Handler
    function toggleThemeHandler() {
        if(appTheme?.name === lightTheme.name) {
            toggleTheme('dark')
        }else {
            toggleTheme('light')
        }
    }

    // Render

    function renderHeader() {
        return (
            <View
             style={{
                 flexDirection: 'row',
                 marginTop: 50,
                 paddingHorizontal: SIZES.padding,
                 justifyContent: 'space-between', 
             }}
            >
                <Text
                 style={{
                     ...FONTS.h1,
                     color: appTheme?.textColor
                 }}
                >
                    Profile
                </Text>

                 <IconButton 
                    icon={icons.sun}
                    iconStyle={{
                        tintColor: appTheme?.tintColor,
                    }}
                    onPress={() => toggleThemeHandler()}
                 />
            </View>
        )
    }


    function renderProfileCard() {
        return (
            <View 
             style={{
                 flexDirection: 'row',
                 marginTop: SIZES.padding,
                 paddingHorizontal: SIZES.radius,
                 paddingVertical: 20,
                 borderRadius: SIZES.radius,
                 backgroundColor: appTheme?.backgroundColor2
             }}
            >
                {/* Profile Image  */}
                <TouchableOpacity
                 style={{
                     width: 80,
                     height: 80,
                 }}
                >
                    <Image
                        source={images.profile}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: COLORS.white,
                        }}
                    />

                    <View 
                     style={{
                         position: 'absolute',
                         width: '100%',
                         height: '100%',
                         alignItems: 'center',
                         justifyContent: 'flex-end',
                     }}
                    >
                        <View 
                          style={{
                              width: 30,
                              height: 30,
                              marginBottom: -15,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: 15,
                              backgroundColor: COLORS.primary
                          }}
                        >
                            <Image 
                             source={icons.camera}
                             resizeMode="contain" 
                             style={{
                                 width: 17,
                                 height: 17
                             }}
                            />
                        </View>

                    </View>
                </TouchableOpacity>

                {/* Detail Section */}
                <View 
                  style={{
                      flex: 1,
                      marginLeft: SIZES.radius,
                      alignItems: 'flex-start',

                  }}
                >
                    <Text
                      style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                      }}
                     >
                        Osaze
                    </Text>

                    <Text
                     style={{
                        color: COLORS.white,
                        ...FONTS.body4,
                     }}
                    >
                        Full Stack Developer
                    </Text>


                     {/* Progress */}
                    <ProgressBar
                     containerStyle={{
                         marginTop: SIZES.radius
                     }}
                    progress={'58%'} 
                    />

                    <View 
                     style={{
                         flexDirection: 'row'
                     }}
                    >
                        <Text 
                         style={{
                             flex: 1,
                             color: COLORS.white,
                             ...FONTS.body4,
                         }}
                        >
                            Overall Progress
                        </Text>
                   
                        <Text 
                         style={{
                             color: COLORS.white,
                             ...FONTS.body4,
                         }}
                        >
                            58%
                        </Text>
                    </View>

                    {/* Member */}
                    <TextButton 
                      label="+ Become Member"
                      contentContainerStyle={{
                          height: 35,
                          marginTop: SIZES.padding,
                          paddingHorizontal: SIZES.radius,
                          borderRadius: 20,
                          backgroundColor: appTheme?.backgroundColor4,
                      }}

                      labelStyle={{
                          color: appTheme?.textColor2,
                      }}

                    />
                </View>
                
            </View>
        )
    }


    function renderProfileSectionOne() {
        return (
            <View
             style={styles.profileSectionContainer}
            >
                <ProfileValue 
                    icon={icons.profile}
                    label="Name"
                    value="Osaze"
                />
                <LineDivider lineStyle={{height: 1}} />

                <ProfileValue 
                    icon={icons.email}
                    label="Email"
                    value="osarzeh@gmail.com"
                />

                <LineDivider lineStyle={{height: 1}} />

                <ProfileValue 
                    icon={icons.password}
                    label="Password"
                    value="Updated 2weeks ago"
                />
                <LineDivider lineStyle={{height: 1}} />

                <ProfileValue 
                    icon={icons.call}
                    label="Contact Number"
                    value="+2347062772261"
                />
                
            </View>
        )
    }


    function renderProfileSectionTwo() {
        return (
            <View
             style={styles.profileSectionContainer}
            >

                <ProfileValue 
                    icon={icons.star_1}
                    // label="Contact Number"
                    value="Pages"
                />

                <LineDivider lineStyle={{height: 1}} />

               <ProfileRadioButton
                 icon={icons.new_icon}
                 label={"New Course Notification"}
                 isSelected={newCourseNotification}
                 onPress={() => setNewCourseNotification(!newCourseNotification)}
               />
             
                <LineDivider lineStyle={{height: 1}} />

               <ProfileRadioButton
                 icon={icons.reminder}
                 label={"Study Reminder"}
                 isSelected={studyReminder}
                 onPress={() => setStudyReminder(!studyReminder)}
               />

            </View>
        )
    }

    return (
        <View
         style={{
             flex: 1,
             backgroundColor: appTheme?.backgroundColor1,
         }}
        >
            {/* Header */}
            {renderHeader()}

            <ScrollView
              contentContainerStyle={{
                  paddingHorizontal: SIZES.padding,
                  paddingBottom: 150, 
              }}
            >
                {/* Profile Card */}
                 {renderProfileCard()}

                 {/* Profile Section 1 */}
                 {renderProfileSectionOne()}


                 {/* Profile Section 2 */}
                 {renderProfileSectionTwo()}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    profileSectionContainer: {
        marginTop: SIZES.padding,
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: COLORS.gray20
    }
})


function mapStateToProps(state) {
    return {
        appTheme: state.theme.appTheme,
        error: state.theme.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme: (themeType) => dispatch(startToggleTheme(themeType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);