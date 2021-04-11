import React from 'react';
import {
  Alert
} from 'react-native';
import CustomisedFlatList from './src/Components/CustomisedFlatList/CustomisedFlatList';
import CustomisedFlatListScreenHome from './src/ui/CutomisedFlatListScreen/CustomisedFlatListScreenHome'
import CustomisedSectionListScreen from './src/ui/CutomisedFlatListScreen/CustomisedSectionListScreen'
import { homeScreenData } from './src/Components/CustomisedFlatList/data'
import {navigatorProps} from './src/types/appTypes';
import StackNavigator from './src/Components/stackNavigator/stackNavigator';
import CustomisedPlainFlatListScreen from './src/ui/CutomisedFlatListScreen/CustomisedPlainFlatListScreen';

 const HomeScreenPage: React.FunctionComponent = (navigation: any) => {
  const nav = navigation.navigation;
  return (
    <CustomisedFlatList
        item={homeScreenData}
        hasDetail={true}
        callback={(args) => nav.navigate(args.screenName)}
        />
   );
};

 function App() {
  return <StackNavigator {...stackProps} />;
}

let stackProps: navigatorProps = {
  initialRouteName: 'HomeScreenPage',
  screen: [
    {
      ScreenComponent: HomeScreenPage,
      ScreenName: 'HomeScreenPage',
      options: {
        title: 'Component Home Screen',
      },
    },
    {
      ScreenComponent: CustomisedFlatListScreenHome,
      ScreenName: 'CustomisedFlatListScreenHome',
      options: {
        title: 'Customised Flat List Home',
      },
    },
    {
      ScreenComponent: CustomisedSectionListScreen,
      ScreenName: 'CustomisedSectionListScreen',
      options: {
        title: 'Customised Section List',
      },
    },
    {
      ScreenComponent: CustomisedPlainFlatListScreen,
      ScreenName: 'CustomisedPlainFlatListScreen',
      options: {
        title: 'Customised Simple Flat List',
      },
    }
  ],
};

export default App;
