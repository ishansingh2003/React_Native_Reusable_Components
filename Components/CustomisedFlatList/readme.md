The CustomisedFlatList is used in the code like this <br/>
```
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
```
  
<table>
  <th>Parameter Name</th>
  <th>Parameter Description</th>
  <th>Parameter Type</th>
  <tr>
    <td><ul><li>item</li></ul></td>
    <td>This is the data that is required for the list to render. Please see the sample data in data.ts file.</td>
    <td> Boolean</td>
  </tr>
  <tr>
    <td><ul><li>hasDetail</li></ul></td>
    <td>This is the right arrow that shows in the right side of the each list item, meaning that there is a next screen on the tap/ drill down ui.</td>
    <td> Boolean</td>
  </tr>
  <tr>
    <td><ul><li>hasImage</li></ul></td>
    <td>This is the image that a user wants to show on the left side of each of the list item. The image path or uri or base64 cana be given in the list data.</td>
    <td> Boolean</td>
  </tr>
  <tr>
    <td><ul><li>callback</li></ul></td>
    <td>This is the callback fnction available on the each element of the list. The default parameter of this function is the data given in the first parameter in this table.</td>
    <td> Function</td>
  </tr>
  <tr>
    <td><ul><li>isSectionList</li></ul></td>
    <td>This is the boolean parameter that will decide whether the list is section list or a normal list.</td>
    <td> Boolean</td>
  </tr>
 </table>

