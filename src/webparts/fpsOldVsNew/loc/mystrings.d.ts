declare interface IFpsOldVsNewWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'FpsOldVsNewWebPartStrings' {
  const strings: IFpsOldVsNewWebPartStrings;
  export = strings;
}
