type NavigatorScreenType = {
    ScreenComponent: React.ComponentType<any>;
    ScreenName: string;
    options?: any;
  };
  export type navigatorProps = {
    initialRouteName: string;
    screen: Array<NavigatorScreenType>;
  };