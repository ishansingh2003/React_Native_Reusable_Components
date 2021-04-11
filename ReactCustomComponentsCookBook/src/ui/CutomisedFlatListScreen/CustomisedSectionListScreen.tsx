import React from 'react';
import CustomisedFlatList from '../../Components/CustomisedFlatList/CustomisedFlatList';
import { sectionListData } from '../../Components/CustomisedFlatList/data'
import { Linking } from 'react-native';

const CustomisedSectionListScreen: React.FunctionComponent = (navigation: any) => {
    const nav = navigation.navigation;
    return (
        <CustomisedFlatList
            item={sectionListData}
            isSectionList={true}
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

export default CustomisedSectionListScreen;
