import React from "react";
import { Easing } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Provider } from "react-redux";

import configureStore from "./stores/configureStore";

import {
    MainLayout,
    CourseListing
} from "./screens";


const Stack = createSharedElementStackNavigator()
const options = {
    gestureEnabled: false,
    transitionsSpec: {
        open: {
            animation: "timing",
            config: {
                duration: 400,
                easing: Easing.inOut(Easing.ease)
            }
        },
        close: {
            animation: "timing",
            config: {
                duration: 400,
                easing: Easing.inOut(Easing.ease)
            }
        }
    },
    cardStyleInterpolator: ({ current: { progress } }) => {
        return {
            cardStyle: {
                opacity: progress
            }
        }
    }
}

const App = () => {

    const store = configureStore()

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        useNativeDriver: true
                    }}
                    initialRouteName={'Dashboard'}
                    detachInactiveScreens={false}
                >
                    <Stack.Screen
                        name="Dashboard"
                        component={MainLayout}
                    />
                    <Stack.Screen 
                        name="CourseListing"
                        component={CourseListing}
                        options={() => options}
                    />
                </Stack.Navigator>
            </NavigationContainer>
         </Provider>
    )
}

export default App