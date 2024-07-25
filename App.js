// App.js
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './Individual/HomeScreen';
import ExpertsScreen from './Individual/ExpertScreen';
import GrowthScreen from './Individual/GrowthScreen';
import MessagesScreen from './Individual/MessagesScreen';
import ChatScreen from './Individual/ChatScreen';
import SessionsScreen from './Individual/SessionsScreen';
import HubsScreen from './Individual/HubsScreen';
import InterviewScreen from './Individual/InterviewScreen';
import AdviceScreen from './Individual/AdviceScreen';
import JoinAs from './Individual/JoinAs';
import SignUp from './Individual/SignUp';
import VerifyEmail from './Individual/VerifyEmail';
import CustomDrawerContent from './views/DrawerContent';
import ExpertsDrawerContent from './views/ExpertsDrawer';
import AllHubsScreen from './Individual/AllHubs';
import GrowthOffer from './Individual/GrowthPayOffer';
import GrowthPayOffer from './Individual/ChooseGrowthPay';
import Notification from './Individual/Notifications';
import InterviewOffer from './Individual/InterviewPayOffer';
import InterviewPayOffer from './Individual/ChooseInterviewPay';
import Language from './components/LanguageSwitcher';
import AdviceOffer from './Individual/AdvicePayOffer';
import AdvicePayOffer from './Individual/ChooseAdvicePay';
import GrowthPlan from './Individual/GrowthPlan';
import InterviewSession from './Individual/Interview';
import AdviceSession from './Individual/Advice';
import HubOffer from './Individual/HubPayOffer';
import HubPayOffer from './Individual/ChooseHubPay';
import HubSession from './Individual/Hubs';
import Start from './Experts/SignUp';
import Verify from './Experts/Verify';
import Home from './Experts/Home';
import Offers from './Experts/Offers';
import Bids from './Experts/Bids';
import GrowthPlans from './Experts/GrowthPlan';
import Messages from './Experts/Messages';
import Profile from './Experts/Profile';
import Interview from './Experts/Interview';
import Advice from './Experts/Advice';
import Hubs from './Experts/Hubs';
import BusinessStart from './Recruiters/Business-SignUp';
import VerifyBusiness from './Recruiters/Business-VerifyEmail';
import HomeBusiness from './Recruiters/Home';
import { DrawerProvider, useDrawerContext } from './views/DrawerContext';
import BusinessDrawerContent from './views/RecruitersDrawer';
import { BusinessDrawerProvider, useBusinessDrawerContext } from './views/RecruitersDrawerContext';
import mobmenu from './assets/mobmenu.png';  // Make sure to adjust the path if necessary
import Employee from './Recruiters/Employees';
import Managers from './Recruiters/Managers';
import Coach from './Recruiters/Coach';
import Teams from './Recruiters/Teams';
import Performance from './Recruiters/Performance';
import Analytics from './Recruiters/Analytics';
import Schedules from './Recruiters/Schedules';
import Interviews from './Recruiters/StartInterviews';
import InterviewPage from './Recruiters/InterviewPage';
import AccountSet from './components/AccountSettings';
import AccountSetup from './components/AccountSetExp';
import AccountSettings from './components/AccountSetBus';
import NotificationSet from './components/NotificationSettings';
import PasswordSet from './components/ResetPassword';
import BillingSet from './components/Billingsandpayment';
import Subscription from './Recruiters/Subscription';
import Billingsandpayment from './Experts/Earnings';
import Signin from './components/Signin';
import ForgotPassword from './components/ForgotPassword';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomHeaderButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Image source={mobmenu} style={{ width: 24, height: 24, marginLeft: 10 }} />
    </TouchableOpacity>
  );
};

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Join" component={JoinAs} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="Verify Email" component={VerifyEmail} />
      <Stack.Screen name="Begin Signup" component={Start} />
      <Stack.Screen name="Business Signup" component={BusinessStart} />
      <Stack.Screen name="Verify Business" component={VerifyBusiness} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Forgot Password" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f7fff4', // Set your desired header color here
        },
        headerTintColor: '#206C00', // Set the text color of the header
        headerTitleStyle: {
          fontWeight: 'bold', // Set the font weight of the header title
        },
        headerLeft: () => <CustomHeaderButton />,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="All Experts" component={ExpertsScreen} />
      <Drawer.Screen name="Growth Plan" component={GrowthScreen} />
      <Drawer.Screen name="Interview" component={InterviewScreen} />
      <Drawer.Screen name="Advice" component={AdviceScreen} />
      <Drawer.Screen name="Hubs" component={HubsScreen} />
      <Drawer.Screen name="Sessions" component={SessionsScreen} />
      <Drawer.Screen name="Messages" component={MessagesScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
      <Drawer.Screen name="All Hubs" component={AllHubsScreen} />
      <Drawer.Screen name="Growth Plan Offer" component={GrowthOffer} />
      <Drawer.Screen name="Choose Growth Payment" component={GrowthPayOffer} />
      <Drawer.Screen name="Interview Plan Offer" component={InterviewOffer} />
      <Drawer.Screen name="Choose Interview Payment" component={InterviewPayOffer} />
      <Drawer.Screen name="Notifications" component={Notification} />
      <Drawer.Screen name="Language" component={Language} />
      <Drawer.Screen name="Advice Plan Offer" component={AdviceOffer} />
      <Drawer.Screen name="Choose Advice Payment" component={AdvicePayOffer} />
      <Drawer.Screen name="Growth-Plan" component={GrowthPlan} />
      <Drawer.Screen name="Interview Sessions" component={InterviewSession} />
      <Drawer.Screen name="Advice Sessions" component={AdviceSession} />
      <Drawer.Screen name="Hub Plan Offer" component={HubOffer} />
      <Drawer.Screen name="Choose Hub Payment" component={HubPayOffer} />
      <Drawer.Screen name="Hub Sessions" component={HubSession} />
      <Drawer.Screen name="Account Settings" component={AccountSet} />
      <Drawer.Screen name="Notification Settings" component={NotificationSet} />
      <Drawer.Screen name="Password" component={PasswordSet} />
      <Drawer.Screen name="Billings and Payment" component={BillingSet} />
    </Drawer.Navigator>
  );
}

function ExpertsDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <ExpertsDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#f7fff4' },
        headerTintColor: '#206C00',
        headerTitleStyle: { fontWeight: 'bold' },
        headerLeft: () => <CustomHeaderButton />,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="Bids" component={Bids} />
      <Drawer.Screen name="Growth Plans" component={GrowthPlans} />
      <Drawer.Screen name="Messages" component={Messages} />
      <Drawer.Screen name="Language" component={Language} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
      <Drawer.Screen name="Notifications" component={Notification} />
      <Drawer.Screen name="My Profile" component={Profile} />
      <Drawer.Screen name="Interview" component={Interview} />
      <Drawer.Screen name="Hubs" component={Hubs} />
      <Drawer.Screen name="Advice" component={Advice} />
      <Drawer.Screen name="Account Settings" component={AccountSetup} />
      <Drawer.Screen name="Notification Settings" component={NotificationSet} />
      <Drawer.Screen name="Password" component={PasswordSet} />
      <Drawer.Screen name="Earnings and Payment" component={Billingsandpayment} />
    </Drawer.Navigator>
  );
}

function BusinessDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <BusinessDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#f7fff4' },
        headerTintColor: '#206C00',
        headerTitleStyle: { fontWeight: 'bold' },
        headerLeft: () => <CustomHeaderButton />,
      }}
    >
      <Drawer.Screen name="Home" component={HomeBusiness} />
      <Drawer.Screen name="Employees" component={Employee} />
      <Drawer.Screen name="Managers" component={Managers} />
      <Drawer.Screen name="Coach" component={Coach} />
      <Drawer.Screen name="Teams" component={Teams} />
      <Drawer.Screen name="Performance" component={Performance} />
      <Drawer.Screen name="Analytics" component={Analytics} />
      <Drawer.Screen name="Schedules" component={Schedules} />
      <Drawer.Screen name="Subscription" component={Subscription} />
      <Drawer.Screen name="Billings and Payment" component={Subscription} />
      <Drawer.Screen name="Interviews" component={Interviews} />
      <Drawer.Screen name="Interview Sessions" component={InterviewPage} />
      <Drawer.Screen name="Account Settings" component={AccountSettings} />
      <Drawer.Screen name="Notification Settings" component={NotificationSet} />
      <Drawer.Screen name="Password" component={PasswordSet} />
      <Drawer.Screen name="Language" component={Language} />
    </Drawer.Navigator>
  );
}

function AppNavigator() {
  const { isExpertDrawer } = useDrawerContext();
  const { isBusinessDrawer } = useBusinessDrawerContext();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main">
        {() => (isExpertDrawer ? <ExpertsDrawer /> : <MainDrawer />)}
      </Stack.Screen>
      <Stack.Screen name="Expert">
        {() => (isExpertDrawer ? <ExpertsDrawer /> : <ExpertsDrawer />)}
      </Stack.Screen>
      <Stack.Screen name="Business">
        {() => (isBusinessDrawer ? <BusinessDrawer /> : <BusinessDrawer />)}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <DrawerProvider>
      <BusinessDrawerProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </BusinessDrawerProvider>
    </DrawerProvider>
  );
}

export default App;