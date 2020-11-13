import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings172512Navigator from '../features/Settings172512/navigator';
import Settings172497Navigator from '../features/Settings172497/navigator';
import NotificationList172496Navigator from '../features/NotificationList172496/navigator';
import Maps172495Navigator from '../features/Maps172495/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings172512: { screen: Settings172512Navigator },
Settings172497: { screen: Settings172497Navigator },
NotificationList172496: { screen: NotificationList172496Navigator },
Maps172495: { screen: Maps172495Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
