import React from 'react';
import CustomisedFlatList from '../../Components/CustomisedFlatList/CustomisedFlatList';
import { CustomisedFlatSListScreenData } from '../../Components/CustomisedFlatList/data'

 const CustomisedFlatListScreenHome: React.FunctionComponent = (navigation: any) => {
  const nav = navigation.navigation;
  return (
    <CustomisedFlatList
        item={CustomisedFlatSListScreenData}
        hasDetail={true}
        callback={(args) => nav.navigate(args.screenName)}
        />
   );
};

export default CustomisedFlatListScreenHome;
