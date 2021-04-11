The CustomisedFlatList is used in the code like this <br/>
```typescript
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

<b>The sample data seems like</b>

```javascript
export const sectionListData = [
  {
    sectionTitle: 'Section Header 1 Clickable Item',
    data: [
      { value: "Tap to open https://www.google.com in external browser", args: { uri: 'http://www.gogle.com' } },
    ],
  },
  {
    sectionTitle: 'Section Header 2 Image Iem',
    data: [
      { value: "List data with image", args: { image: "" } },
    ],
  },
  {
    sectionTitle: 'Section Header 3 Plain',
    data: [
      { value: 'Test row 1 - Non clickable.' },
    ],
  }
];

export const simpleFlatListData = [
  {
    data: [
      { value: "List Item 1 clickable", args: { uri: 'http://www.gogle.com' } },
      { value: "List Item 2 with image", args: { image: '' } },
      { value: 'List item 3 .' },
    ],

  }
];
```

<b>Sampple Screenshots</b>
<image src="https://github.com/ishansingh2003/React_Native_Reusable_Components/blob/main/ScreenShots/CustomisedFlatList/Screenshot_1618146873.png" height="100"  width="100"/>
</br>
</br>
https://github.com/ishansingh2003/React_Native_Reusable_Components/blob/main/ScreenShots/CustomisedFlatList/Screenshot_1618146876.png
</br>
</br>
https://github.com/ishansingh2003/React_Native_Reusable_Components/blob/main/ScreenShots/CustomisedFlatList/Screenshot_1618146880.png
