import * as React from 'react';
import { Button, Text, View, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import { Register } from '../screens/Register';
import { Home, Stream } from '../screens/Stream';
import { Input } from 'react-native-elements';

function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}


function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const StreamStack = createStackNavigator();

function StreamScreen() {
    return (
        <StreamStack.Navigator>
            <StreamStack.Screen
                name="Home"
                component={Stream}
            />
        </StreamStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const getStore = async () => {
    const value = await AsyncStorage.getItem('user');
    return value
}
let isAuth = false;

getStore().then(auth => {
    if (JSON.parse(auth).token) {
        isAuth = true
    }
})


export default function Router() {
    return (
        <NavigationContainer>
            {true ? <Tab.Navigator>
                <Tab.Screen name="Home" component={StreamScreen} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator> :
                <Stack.Navigator >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            }
        </NavigationContainer>
    );
}