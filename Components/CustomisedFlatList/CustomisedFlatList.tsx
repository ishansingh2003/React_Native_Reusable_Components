import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  SectionList,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { ListItemType, CustomisableListType } from './types';

const ListItem = (props: {
  title: String;
  hasImage: boolean;
  callback: (arg: any) => void;
  additionalData: any;
  hasDetail: boolean;
}) => (
  <TouchableHighlight
    onPress={(_evt) => {
      props.callback(props.additionalData);
    }}>
    <View style={styles.listItemView}>
      <View style={styles.firstCompartment}>
        {props.hasImage && (
          <Image source={{ uri: props.additionalData.image }} style={styles.listImageViewIcon} />
        )}
        <Text style={styles.listItemTextWithImage}>{props.title}</Text>
      </View>
      {props.hasDetail && (
        <View style={styles.secondCompartment}>
          <Text style={styles.listItemHasDetailText}>&gt;</Text>
        </View>
      )}
    </View>
  </TouchableHighlight>
);
const SectionHeader = (props: { sectionTitle: String }) => (
  <View style={styles.listItemHeaderView}>
    <Text style={styles.listItemHeaderText}>{props.sectionTitle}</Text>
  </View>
);
const ItemSeparator = () => {
  return <View style={styles.separator} />;
};
export default function CustomisedFlatList(props: CustomisableListType) {
  const isSectionList = props.isSectionList ? props.isSectionList : false;
  const hasDetail = props.hasDetail ? props.hasDetail : false;
  const hasImage = props.hasImage ? props.hasImage : false;
  if (isSectionList) {
    const listData = {
      data: props.item.map((item: ListItemType) => {
        const listItem = {
          title: (item.sectionTitle) ? item.sectionTitle : '',
          data: item.data.map(item => item.value)
        };
        return listItem;
      }),
      additionalData: props.item.map((item: ListItemType) => {
        return item.data.map(item => (item.args) ? item.args : {});
      }),
    };
    return (
      <SafeAreaView style={styles.mainContainer}>
        <SectionList
          sections={listData.data}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={(item) => (
            <ListItem
              title={item.item}
              hasImage={hasImage}
              hasDetail={hasDetail}
              callback={props.callback ? props.callback : () => { }}
              additionalData={
                //get the index of section to fetch the section specific additional data and then use item index to fetch row specific data
                listData.additionalData[listData.data.indexOf(item.section)][item.index]
              }
            />
          )}
          renderSectionHeader={({ section }) => (
            <SectionHeader sectionTitle={section.title} />
          )}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      </SafeAreaView>
    );
  } else {
    const listData = {
      //flatmap is the es2019 feature update in your tsconfig.json
      data: props.item.flatMap((item: ListItemType) => {
        return item.data.map(item => item.value);
      }),
      additionalData: props.item.flatMap((item: ListItemType) => {
        return item.data.map(item => (item.args) ? item.args : {});
      }),
    }
    return (
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          data={listData.data}
          renderItem={(item) => {
            return (
              <ListItem
                title={item.item}
                hasImage={hasImage}
                hasDetail={hasDetail}
                callback={props.callback ? props.callback : () => { }}
                additionalData={
                  listData.additionalData[item.index]
                }
              />
            );
          }}
          ItemSeparatorComponent={() => <ItemSeparator />}
          keyExtractor={(item, index) => item + index.toString()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'ffffff',
  },
  listItemHeaderView: {
    height: 30,
    width: '100%',
    backgroundColor: "gray",
    paddingLeft: '5%',
    justifyContent: 'center',
  },
  listItemHeaderText: {
    fontSize: 20,
    color: '#000000',
  },
  listItemText: {
    fontSize: 17,
    color: '#000000',
  },
  listItemTextWithImage: {
    fontSize: 17,
    color: '#000000',
    alignSelf: 'center',
  },
  listItemView: {
    height: 'auto',
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
  },
  listImageViewIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
    tintColor: 'gray',
    alignSelf: 'center',
  },
  listItemHasDetailText: {
    alignSelf: 'flex-end',
    marginRight: 10,
    fontSize: 17,
    color: 'gray',
  },
  firstCompartment: {
    flex: 1,
    paddingLeft: '5%',
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: 'row',
  },
  secondCompartment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginLeft: '5%',
  },
});
