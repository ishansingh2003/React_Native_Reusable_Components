The CustomisedFlatList is used in the code like this <br/>
<code>
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
</code>
  
<table>
  <th>Parameter Name</th>
  <th>Parameter Description</th>
  <tr>
    <td><ol><li>Customised Flat List</li></ol></td>
    <td>This is a wrapper written around react-native Flat List & Section List which supports callback, left image, right arrow in the list item. All of this can be achieved with a single codebase</td>
  </tr>
 </table>

