import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'FpsOldVsNewWebPartStrings';
import FpsOldVsNew from './components/FpsOldVsNew';
import { IFpsOldVsNewProps } from './components/IFpsOldVsNewProps';
// import { ensureUserInfo } from '@mikezimm/fps-library-v2/lib/pnpjs/Users/indexes/EnsureUserInfo';
// import { ensureUserHere, IEnsureUserInfo } from '@mikezimm/fps-library-v2/lib/pnpjs/Users/indexes/EnsureUserHere';
// import { getSiteAdmins, } from '@mikezimm/fps-library-v2/lib/pnpjs/Users/indexes/GetSiteAdmins';
// import { getSiteUsers, } from '@mikezimm/fps-library-v2/lib/pnpjs/Users/indexes/GetSiteUsers';
// import { IValueUserInfos } from '@mikezimm/fps-library-v2/lib/pnpjs/Users/interfaces/IValueUserInfos';
// import { ISiteUsersInfo } from '@mikezimm/fps-library-v2/lib/pnpjs/Users/interfaces/ISiteUsersInfo';
// import { getUserPermissions } from '@mikezimm/fps-library-v2/lib/pnpjs/Users/indexes/GetUserPermissions';
// import { getCurrentUser, IEnsureUserInfo,  } from '@mikezimm/fps-library-v2/lib/pnpjs/Users/indexes/GetCurrentUser';
// import { IUserPermissionsInfo } from '@mikezimm/fps-library-v2/lib/pnpjs/Users/interfaces/IUserPermissionsInfo';

import { SitePagesSource } from '@mikezimm/fps-library-v2/lib/banner/components/EasyPages/epTypes';
import { getSourceItems, prepSourceColumns } from '@mikezimm/fps-library-v2/lib/pnpjs/SourceItems/index';
import { IItemsError } from '@mikezimm/fps-library-v2/lib/pnpjs/SourceItems/Interface';

import { IEasyPagesHookProps } from '@mikezimm/fps-library-v2/lib/banner/components/EasyPages/componentSources';
import { EasyIconObjectDefault } from '@mikezimm/fps-library-v2/lib/components/atoms/EasyIcons/eiTypes';
import { gitRepoDrillDown } from '@mikezimm/fps-library-v2/lib/components/atoms/Links/LinksRepos';

export interface IFpsOldVsNewWebPartProps {
  description: string;
}

export default class FpsOldVsNewWebPart extends BaseClientSideWebPart<IFpsOldVsNewWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _newSiteAdmins: any = null;
  // private _newSiteAdmins: ISiteUsersInfo = null;
  // private _newSitUsers: IValueUserInfos = null;
  // private _getUserPermissions: IUserPermissionsInfo = null;
  // private _getCurrentUser: IEnsureUserInfo = null;
  // private _ensureUserInfo: IEnsureUserInfo = null;
  // private _ensureUserHere: IEnsureUserInfo = null;
  private _getSourceItems: IItemsError = null;
  private _EPProps: IEasyPagesHookProps = null;

  public render(): void {
    const element: React.ReactElement<IFpsOldVsNewProps> = React.createElement(
      FpsOldVsNew,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,

        easyPagesCommonProps: this._EPProps.easyPagesCommonProps,
  
        easyPagesExtraProps: this._EPProps.easyPagesExtraProps,
  
        EasyIconsObject: this._EPProps.EasyIconsObject,

      }
    );


    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();

    return super.onInit().then(async _ => {
      // this._newSiteAdmins = await getSiteAdmins( this.context.pageContext.site.absoluteUrl , false );
      // this._newSitUsers = await getSiteUsers( this.context.pageContext.site.absoluteUrl , ['Title','Email', 'Id', 'Name' ], false );
      // this._newSiteAdmins = await getSiteAdmins( 'https://tenant.sharepoint.com/sites/PivotHub' , false );
      // this._newSitUsers = await getSiteUsers( 'https://tenant.sharepoint.com/sites/PivotHub' , ['Title','Email', 'Id', 'Name' ], false );
      // this._getUserPermissions = await getUserPermissions( this.context.pageContext.site.absoluteUrl , false );
      // this._getUserPermissions = await getUserPermissions( 'https://tenant.sharepoint.com/sites/PivotHub' , false );
      // this._getCurrentUser = await getCurrentUser( this.context.pageContext.site.absoluteUrl );
      // this._getCurrentUser = await getCurrentUser( 'https://tenant.sharepoint.com/sites/PivotHub' );
      // const loginCreds: string = this.context.pageContext.user.email;
      // this._ensureUserInfo = await ensureUserInfo( '/sites/PivotHub', loginCreds );
      // this._ensureUserHere = await ensureUserHere( loginCreds , this.context.pageContext.site.serverRelativeUrl , false );

      // this._getSourceItems = await getSourceItems( prepSourceColumns( SitePagesSource, this.context.pageContext.web.serverRelativeUrl ), true, true );

      this._EPProps = {
        easyPagesCommonProps: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          context: this.context as any,
          pageLayout: this.context['_pageLayoutType'],
          pinState: 'disabled',
          repo: gitRepoDrillDown,
          containerStyles: null,
          styles: null,
        },
        easyPagesExtraProps: {

          showTricks: true,
          EasyPagesEnable: true,

          easyPagesToggleExpanded: null ,
          easyPagesExpanded: true,

          EasyPageOverflowTab: 'Others',

          tabsC: ['Home', 'SPFx'],
          tabsP: [],
          tabsA: [],
          tabsB: [],

        },
        EasyIconsObject: EasyIconObjectDefault,

      }
      
      console.log('Done!');
    });

  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams
      return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
