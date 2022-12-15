import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
} from '@microsoft/sp-property-pane';
import {   
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ThemeProvider,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ThemeChangedEventArgs,
  IReadonlyTheme, } from '@microsoft/sp-component-base';

import { SPPermission, } from '@microsoft/sp-page-context';

import * as strings from 'FpsOldVsNewWebPartStrings';
import FpsOldVsNew from './components/FpsOldVsNew';
import { IFpsOldVsNewProps } from './components/IFpsOldVsNewProps';

/***
 *    d88888b d8888b. .d8888.      d8888b. d8888b. d88888b .d8888. d88888b d888888b .d8888. 
 *    88'     88  `8D 88'  YP      88  `8D 88  `8D 88'     88'  YP 88'     `~~88~~' 88'  YP 
 *    88ooo   88oodD' `8bo.        88oodD' 88oobY' 88ooooo `8bo.   88ooooo    88    `8bo.   
 *    88~~~   88~~~     `Y8b.      88~~~   88`8b   88~~~~~   `Y8b. 88~~~~~    88      `Y8b. 
 *    88      88      db   8D      88      88 `88. 88.     db   8D 88.        88    db   8D 
 *    YP      88      `8888Y'      88      88   YD Y88888P `8888Y' Y88888P    YP    `8888Y' 
 *
 *    USED IN PRESETTING PROPS
 */

import { PreConfiguredProps,  } from './CoreFPS/PreConfiguredSettings';

import { PropertyPaneWebPartInformation } from '@pnp/spfx-property-controls/lib/PropertyPaneWebPartInformation';

import { WebPartInfoGroup, } from '@mikezimm/fps-library-v2/lib/banner/propPane/WebPartInfoGroup';
import { FPSOptionsGroupBasic, } from '@mikezimm/fps-library-v2/lib/banner/propPane/FPSOptionsGroupBasic';
import { FPSBanner4BasicGroup,  } from '@mikezimm/fps-library-v2/lib/banner/propPane/FPSBanner4BasicGroup';
import { FPSBanner3NavGroup, } from '@mikezimm/fps-library-v2/lib/banner/propPane/FPSBanner3NavGroup';
import { FPSBanner3ThemeGroup } from '@mikezimm/fps-library-v2/lib/banner/propPane/FPSBanner3ThemeGroup';
import { FPSBanner3VisHelpGroup } from '@mikezimm/fps-library-v2/lib/banner/components/VisitorPanel/FPSOptionsGroupVisHelp';
import { FPSPinMePropsGroup } from '@mikezimm/fps-library-v2/lib/banner/features/PinMe/PinMePropGroup';
import { FPSOptionsExpando, } from '@mikezimm/fps-library-v2/lib/banner/features/Expando/ExpandoPropGroup'; //expandAudienceChoicesAll
import { FPSEasyPagesGroup, } from '@mikezimm/fps-library-v2/lib/banner/components/EasyPages/EasyPagesGroup'; //expandAudienceChoicesAll

import { FPSImportPropsGroup } from '@mikezimm/fps-library-v2/lib/banner/features/ImportExport/ImportFunctions';

import { exportIgnoreProps, importBlockPropsThis, WebPartAnalyticsChanges, WebPartPanelChanges,  } from './IFpsOldVsNewWebPartProps';


 /***
  *     .o88b. .d8888. .d8888.      d8888b. d88888b  .d88b.  db    db d888888b d8888b. d88888b .d8888. 
  *    d8P  Y8 88'  YP 88'  YP      88  `8D 88'     .8P  Y8. 88    88   `88'   88  `8D 88'     88'  YP 
  *    8P      `8bo.   `8bo.        88oobY' 88ooooo 88    88 88    88    88    88oobY' 88ooooo `8bo.   
  *    8b        `Y8b.   `Y8b.      88`8b   88~~~~~ 88    88 88    88    88    88`8b   88~~~~~   `Y8b. 
  *    Y8b  d8 db   8D db   8D      88 `88. 88.     `8P  d8' 88b  d88   .88.   88 `88. 88.     db   8D 
  *     `Y88P' `8888Y' `8888Y'      88   YD Y88888P  `Y88'Y8 ~Y8888P' Y888888P 88   YD Y88888P `8888Y' 
  *
  *     USED BY BANNER COMPONENTS
  */

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

require('@mikezimm/fps-styles/dist/GrayPropPaneAccordions.css');
require('@mikezimm/fps-styles/dist/FPSPinMe.css');
require('@mikezimm/fps-styles/dist/FPSHeadings.css');
require('@mikezimm/fps-styles/dist/PropPanelHelp.css');
require('@mikezimm/fps-styles/dist/performance.css');


import { gitRepoDrillDown } from '@mikezimm/fps-library-v2/lib/components/atoms/Links/LinksRepos';
import { IFpsOldVsNewWebPartProps } from './IFpsOldVsNewWebPartProps';
import { runFPSSuperOnInit } from '@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/runSuperOnInit';
import { runFPSWebPartRender } from '@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/runWebPartRender';
import { onFPSPropPaneCHanged } from '@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/runOnPropChange';
import { FPSBaseClass } from '@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/FPSBaseClass';

export default class FpsOldVsNewWebPart extends FPSBaseClass< IFpsOldVsNewWebPartProps > {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  protected async onInit(): Promise<void> {

    this._environmentMessage = this._getEnvironmentMessage();

    this._repoLink = gitRepoDrillDown; //Set as any but will get created in FPSSuperOnOnit
    this._exportIgnoreProps = exportIgnoreProps;
    this._importBlockProps = importBlockPropsThis;
    this._trickyApp = 'FPS UPDATE FPSBaseClass';
    this._trickyEmailsWP = []; // These are emails that get tricky functionality for this specific web part
  
    return super.onInit().then(async _ => {

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      runFPSSuperOnInit( this as any, PreConfiguredProps, SPPermission );

    });

  }

  public render(): void {

    console.log('_pageLayoutType:', this.context[`_pageLayoutType`] );
    console.log('pageLayoutType:', this.context['pageLayoutType' as '_pageLayoutType'] );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bannerProps = runFPSWebPartRender( this as any, strings, WebPartAnalyticsChanges, WebPartPanelChanges, );

    const element: React.ReactElement<IFpsOldVsNewProps> = React.createElement(
      FpsOldVsNew,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,

        performance: this._performance, //Alternatively, use this if available (like ALVFM): _fetchInfo.performance,

        errMessage: '',
        bannerProps: bannerProps,


      }
    );

    ReactDom.render(element, this.domElement);
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


  
  /***
 *    d8888b. d8888b.  .d88b.  d8888b.      d8888b.  .d8b.  d8b   db d88888b       .o88b. db   db  .d8b.  d8b   db  d888b  d88888b 
 *    88  `8D 88  `8D .8P  Y8. 88  `8D      88  `8D d8' `8b 888o  88 88'          d8P  Y8 88   88 d8' `8b 888o  88 88' Y8b 88'     
 *    88oodD' 88oobY' 88    88 88oodD'      88oodD' 88ooo88 88V8o 88 88ooooo      8P      88ooo88 88ooo88 88V8o 88 88      88ooooo 
 *    88~~~   88`8b   88    88 88~~~        88~~~   88~~~88 88 V8o88 88~~~~~      8b      88~~~88 88~~~88 88 V8o88 88  ooo 88~~~~~ 
 *    88      88 `88. `8b  d8' 88           88      88   88 88  V888 88.          Y8b  d8 88   88 88   88 88  V888 88. ~8~ 88.     
 *    88      88   YD  `Y88P'  88           88      YP   YP VP   V8P Y88888P       `Y88P' YP   YP YP   YP VP   V8P  Y888P  Y88888P 
 *                                                                                                                                 
 *                                                                                                                                 
 */


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected async onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): Promise<void> {
      super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await onFPSPropPaneCHanged( this as any, propertyPath, oldValue, newValue );

      this.context.propertyPane.refresh();

      this.render();

    }



    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
      return {
        pages: [
          {
            header: {
              description: strings.PropertyPaneDescription
            },
            displayGroupsAsAccordion: true, //DONT FORGET THIS IF PROP PANE GROUPS DO NOT EXPAND
            groups: [
              WebPartInfoGroup( this._repoLink, 'Sample FPS Banner component :)', PropertyPaneWebPartInformation ),
              FPSPinMePropsGroup, //End this group  
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              FPSEasyPagesGroup( this.properties, this.context.pageContext as any ), 
              FPSBanner3VisHelpGroup( this.context, this.onPropertyPaneFieldChanged, this.properties ),
              FPSBanner4BasicGroup( this._forceBanner , this._modifyBannerTitle, this.properties.showBanner, this.properties.infoElementChoice === 'Text' ? true : false, true, true ),
              FPSBanner3NavGroup(),
              FPSBanner3ThemeGroup( this._modifyBannerStyle, this.properties.showBanner, this.properties.lockStyles, false ),
              FPSOptionsGroupBasic( false, true, true, true, this.properties.allSectionMaxWidthEnable, true, this.properties.allSectionMarginEnable, true ), // this group
              FPSOptionsExpando( this.properties.enableExpandoramic, this.properties.enableExpandoramic,null, null ),
    
              FPSImportPropsGroup, // this group
            ]
          }
        ]
      };
    }

    
}
