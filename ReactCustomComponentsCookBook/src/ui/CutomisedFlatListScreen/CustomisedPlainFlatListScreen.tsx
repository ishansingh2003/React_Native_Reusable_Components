import React from 'react';
import CustomisedFlatList from '../../Components/CustomisedFlatList/CustomisedFlatList';
import { simpleFlatListData } from '../../Components/CustomisedFlatList/data'
import { Linking } from 'react-native';

const CustomisedPlainFlatListScreen: React.FunctionComponent = (navigation: any) => {
    const nav = navigation.navigation;
    return (
        <CustomisedFlatList
            item={simpleFlatListData}
            hasDetail={false}
            hasImage={true}
            callback={(args) => {
                if (args.uri && args.uri.length > 0) {
                    Linking.openURL(args.uri)
                }
            }}
        />
    );
};

export default CustomisedPlainFlatListScreen;
