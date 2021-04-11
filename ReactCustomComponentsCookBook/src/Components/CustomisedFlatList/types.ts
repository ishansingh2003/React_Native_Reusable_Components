export type ListItemType = {
    data: Array<{ value: string; args?: any }>;
    sectionTitle?: string;
  };
  
  export type CustomisableListType = {
    item: Array<ListItemType>;
    isSectionList?: boolean;
    hasDetail?: boolean;
    hasImage?: boolean;
    callback?: (args: any) => void;
  };