import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Feed from "./screens/tabScreen/Feed";
import Settings from './screens/tabScreen/Settings';
import Notifications from './screens/tabScreen/Notification';

//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Feed' component={Feed}  />
            <Tab.Screen name='Notification' component={Notifications} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
           <TabGroup /> 
        </NavigationContainer>
    )
}