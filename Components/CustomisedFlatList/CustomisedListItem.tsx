import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

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

export default ListItem;

const styles = StyleSheet.create({
  listItemTextWithImage: {
    fontSize: 13,
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
  }
});
