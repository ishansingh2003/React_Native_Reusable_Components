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
  <tr>
    <td><ol><li>item</li></ol></td>
    <td>This is the data that is required for the list to render. Please see the sample data in data.ts file.</td>
    <td><ol><li>item</li></ol></td>
    <td>This is the data that is required for the list to render. Please see the sample data in data.ts file.</td>
  </tr>
 </table>

