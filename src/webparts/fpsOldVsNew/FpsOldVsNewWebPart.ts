import * as React from 'react';
import * as ReactDom from 'react-dom';

import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import {   
  ThemeProvider,
  ThemeChangedEventArgs,
  IReadonlyTheme, } from '@microsoft/sp-component-base';

  import { SPPermission, } from '@microsoft/sp-page-context';


import * as strings from 'FpsOldVsNewWebPartStrings';
import FpsOldVsNew from './components/FpsOldVsNew';
import { IFpsOldVsNewProps } from './components/IFpsOldVsNewProps';

import { sp } from '@pnp/sp';


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

import { applyPresetCollectionDefaults,  } from './fpsMinIndex';
import { PreConfiguredProps,  } from './CoreFPS/PreConfiguredSettings';


/***
 *     .d88b.  d8b   db      d888888b d8b   db d888888b d888888b 
 *    .8P  Y8. 888o  88        `88'   888o  88   `88'   `~~88~~' 
 *    88    88 88V8o 88         88    88V8o 88    88       88    
 *    88    88 88 V8o88         88    88 V8o88    88       88    
 *    `8b  d8' 88  V888        .88.   88  V888   .88.      88    
 *     `Y88P'  VP   V8P      Y888888P VP   V8P Y888888P    YP    
 *
 *     USED FIRST IN ONINIT
 */

// import { getFPSUser, repoLink, trickyEmails } from './fpsMinIndex';
import { createBasePerformanceInit, startPerformOp, updatePerformanceEnd } from './fpsMinIndex';
import { IPerformanceOp, IHistoryPerformance } from './fpsMinIndex';  // eslint-disable-line @typescript-eslint/no-unused-vars

/***
 *    .d8888. d888888b db    db db      d88888b .d8888. 
 *    88'  YP `~~88~~' `8b  d8' 88      88'     88'  YP 
 *    `8bo.      88     `8bd8'  88      88ooooo `8bo.   
 *      `Y8b.    88       88    88      88~~~~~   `Y8b. 
 *    db   8D    88       88    88booo. 88.     db   8D 
 *    `8888Y'    YP       YP    Y88888P Y88888P `8888Y' 
 *
 *    USED FOR STYLES
 */

import { renderCustomStyles, updateBannerThemeStyles, expandoOnInit, refreshBannerStylesOnPropChange } from './fpsMinIndex';
import { getReactCSSFromString } from './fpsMinIndex';

/***
 *    db   d8b   db d8888b.      db   db d888888b .d8888. d888888b  .d88b.  d8888b. db    db 
 *    88   I8I   88 88  `8D      88   88   `88'   88'  YP `~~88~~' .8P  Y8. 88  `8D `8b  d8' 
 *    88   I8I   88 88oodD'      88ooo88    88    `8bo.      88    88    88 88oobY'  `8bd8'  
 *    Y8   I8I   88 88~~~        88~~~88    88      `Y8b.    88    88    88 88`8b      88    
 *    `8b d8'8b d8' 88           88   88   .88.   db   8D    88    `8b  d8' 88 `88.    88    
 *     `8b8' `8d8'  88           YP   YP Y888888P `8888Y'    YP     `Y88P'  88   YD    YP    
 *
 *     USED FOR WEB PART HISTORY
 */

import { getWebPartHistoryOnInit, updateWebpartHistoryV2,  } from './fpsMinIndex';

/***
 *    d8888b.  .d8b.  d8b   db d8b   db d88888b d8888b. 
 *    88  `8D d8' `8b 888o  88 888o  88 88'     88  `8D 
 *    88oooY' 88ooo88 88V8o 88 88V8o 88 88ooooo 88oobY' 
 *    88~~~b. 88~~~88 88 V8o88 88 V8o88 88~~~~~ 88`8b   
 *    88   8D 88   88 88  V888 88  V888 88.     88 `88. 
 *    Y8888P' YP   YP VP   V8P VP   V8P Y88888P 88   YD 
 *
 *     USED FOR CREATING BANNER
 */

import { verifyAudienceVsUser, } from './fpsMinIndex';
import { IWebpartBannerProps, } from './fpsMinIndex';
import { buildExportProps, buildFPSAnalyticsProps , } from './CoreFPS/BuildExportProps';


/***
 *    d8888b. d8888b.  .d88b.  d8888b.       d888b  d8888b.  .d88b.  db    db d8888b. .d8888. 
 *    88  `8D 88  `8D .8P  Y8. 88  `8D      88' Y8b 88  `8D .8P  Y8. 88    88 88  `8D 88'  YP 
 *    88oodD' 88oobY' 88    88 88oodD'      88      88oobY' 88    88 88    88 88oodD' `8bo.   
 *    88~~~   88`8b   88    88 88~~~        88  ooo 88`8b   88    88 88    88 88~~~     `Y8b. 
 *    88      88 `88. `8b  d8' 88           88. ~8~ 88 `88. `8b  d8' 88b  d88 88      db   8D 
 *    88      88   YD  `Y88P'  88            Y888P  88   YD  `Y88P'  ~Y8888P' 88      `8888Y' 
 *
 *    USED FOR PROPERTY PANE GROUPS
 */

import { PropertyPaneWebPartInformation } from '@pnp/spfx-property-controls/lib/PropertyPaneWebPartInformation';

import { WebPartInfoGroup, } from './fpsMinIndex';
import { FPSOptionsGroupBasic, } from './fpsMinIndex';
import { FPSBanner4BasicGroup, FPSBanner3NavGroup, FPSBanner3ThemeGroup } from './fpsMinIndex';
import { FPSBanner3VisHelpGroup } from './fpsMinIndex';
import { FPSPinMePropsGroup } from './fpsMinIndex';
import { FPSOptionsExpando, } from './fpsMinIndex'; //expandAudienceChoicesAll
import { FPSEasyPagesGroup, } from './fpsMinIndex'; //expandAudienceChoicesAll



 /***
  *    d8888b. d8888b.  .d88b.  d8888b.      d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b d888888b d8b   db  d888b  
  *    88  `8D 88  `8D .8P  Y8. 88  `8D        `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'   `88'   888o  88 88' Y8b 
  *    88oodD' 88oobY' 88    88 88oodD'         88    88  88  88 88oodD' 88    88 88oobY'    88       88    88V8o 88 88      
  *    88~~~   88`8b   88    88 88~~~           88    88  88  88 88~~~   88    88 88`8b      88       88    88 V8o88 88  ooo 
  *    88      88 `88. `8b  d8' 88             .88.   88  88  88 88      `8b  d8' 88 `88.    88      .88.   88  V888 88. ~8~ 
  *    88      88   YD  `Y88P'  88           Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP    Y888888P VP   V8P  Y888P  
  *
  *    USED for IMPORTING and EXPORTING
  */
 
 import { updateFpsImportProps, FPSImportPropsGroup, validateDocumentationUrl } from './fpsMinIndex';

 
 /***
  *     .d8b.  d8b   db  .d8b.  db      db    db d888888b d888888b  .o88b. .d8888. 
  *    d8' `8b 888o  88 d8' `8b 88      `8b  d8' `~~88~~'   `88'   d8P  Y8 88'  YP 
  *    88ooo88 88V8o 88 88ooo88 88       `8bd8'     88       88    8P      `8bo.   
  *    88~~~88 88 V8o88 88~~~88 88         88       88       88    8b        `Y8b. 
  *    88   88 88  V888 88   88 88booo.    88       88      .88.   Y8b  d8 db   8D 
  *    YP   YP VP   V8P YP   YP Y88888P    YP       YP    Y888888P  `Y88P' `8888Y' 
  *
  *    USED FOR ANALYTICS AND LOGGING
  */
 
 import { exportIgnoreProps, importBlockProps, importBlockPropsThis, WebPartAnalyticsChanges, WebPartPanelChanges,  } from './IFpsOldVsNewWebPartProps';


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
import { FPSBaseClass } from '@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/FPSBaseClass';
import { runFPSSuperOnInit } from '@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/runSuperOnInit';
import { runFPSWebPartRender } from '@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/runWebPartRender';
import { onFPSPropPaneCHanged } from '@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/runOnPropChange';


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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // runFPSSuperOnInit( this as any, PreConfiguredProps, SPPermission );
      //   /***
      //  *     .d88b.  d8b   db      d888888b d8b   db d888888b d888888b      d8888b. db   db  .d8b.  .d8888. d88888b      .d888b. 
      //  *    .8P  Y8. 888o  88        `88'   888o  88   `88'   `~~88~~'      88  `8D 88   88 d8' `8b 88'  YP 88'          VP  `8D 
      //  *    88    88 88V8o 88         88    88V8o 88    88       88         88oodD' 88ooo88 88ooo88 `8bo.   88ooooo         odD' 
      //  *    88    88 88 V8o88         88    88 V8o88    88       88         88~~~   88~~~88 88~~~88   `Y8b. 88~~~~~       .88'   
      //  *    `8b  d8' 88  V888        .88.   88  V888   .88.      88         88      88   88 88   88 db   8D 88.          j88.    
      //  *     `Y88P'  VP   V8P      Y888888P VP   V8P Y888888P    YP         88      YP   YP YP   YP `8888Y' Y88888P      888888D 
      //  *                                                                                                                         
      //  *                                                                                                                         
      //  */

      //  // DEFAULTS SECTION:  Performance   <<< ================================================================
      //  this._performance = createBasePerformanceInit( this.displayMode, false );
      //   this._performance.ops.superOnInit = startPerformOp( 'superOnInit', this.displayMode );

      //   //NEED TO APPLY THIS HERE as well as follow-up in render for it to not visibly change
      //   this._sitePresets = applyPresetCollectionDefaults( this._sitePresets, PreConfiguredProps, this.properties, this.context.pageContext.web.serverRelativeUrl ) ;
  
      //   //This indicates if its SPA, Teams etc.... always keep.
      //   this.properties.pageLayout =  this.context['_pageLayoutType']?this.context['_pageLayoutType'] : this.context['_pageLayoutType'];
      //   // this._urlParameters = getUrlVars();
  
      //   this._FPSUser = getFPSUser( this.context as any, trickyEmails, this._trickyApp, SPPermission ) ;
      //   console.log( 'FPSUser: ', this._FPSUser );
  
      //   expandoOnInit( this.properties, this.context.domElement, this.displayMode );
  
      //   updateBannerThemeStyles( this.properties, this.properties.bannerStyleChoice ? this.properties.bannerStyleChoice : 'corpDark1', true, this.properties.defPinState, this._sitePresets.forces );
   
      //   this.properties.webpartHistory = getWebPartHistoryOnInit( this.context.pageContext.user.displayName, this.properties.webpartHistory );
  
      //   renderCustomStyles( 
      //     { wpInstanceID: this._wpInstanceID, domElement: this.domElement, wpProps: this.properties, 
      //       displayMode: this.displayMode,
      //       doHeadings: false } );  //doHeadings is currently only used in PageInfo so set to false.
  
      //   this._performance.ops.superOnInit = updatePerformanceEnd( this._performance.ops.superOnInit, true,666 );


    });

  }

  public render(): void {

    console.log('_pageLayoutType:', this.context[`_pageLayoutType`] );
    console.log('pageLayoutType:', this.context['pageLayoutType' as '_pageLayoutType'] );

//     const {displayMode, _beAReader, _FPSUser, properties,  context, _modifyBannerTitle, 
//     _forceBanner, _performance, _wpInstanceID, _keysToShow, _sitePresets, domElement } = this;

//     //repoLink, trickyEmails, exportProps, strings , domElement.clientWidth, 
//   /**
//    * PERFORMANCE - START
//    * This is how you can start a performance snapshot - make the _performance.KEYHERE = startPerforOp('KEYHERE', this.displayMode)
//    */ 
//    this._performance.ops.renderWebPartStart = startPerformOp( 'renderWebPartStart', displayMode );


//    renderCustomStyles( 
//      { wpInstanceID: _wpInstanceID, domElement: domElement, wpProps: properties, 
//        displayMode: displayMode,
//        doHeadings: false } );  //doHeadings is currently only used in PageInfo so set to false.

//   const exportProps = buildExportProps( properties , _wpInstanceID, context.pageContext.web.serverRelativeUrl );

//   const buildBannerProps: IMainWPBanerSetup = {
//     displayMode: displayMode,
//     beAReader: _beAReader,
//     FPSUser: _FPSUser,
//     minWPBannerProps: properties,
//     repoLink: repoLink,
//     trickyEmails: trickyEmails,
//     exportProps: exportProps,
//     strings: strings,
//     clientWidth: this.domElement.clientWidth,
//     thisContext: context as any,
//     modifyBannerTitle: _modifyBannerTitle,
//     forceBanner: _forceBanner,
//     disablePandoramic: false,
//     performance: _performance,
//     keysToShow: _keysToShow,
//     wideToggle: true,
//     expandConsole: true,
//     sitePresets: _sitePresets,
//     SpecialMessage: null,
//   }
//   const bannerProps: IWebpartBannerProps = mainWebPartRenderBannerSetup( buildBannerProps );

//    if ( bannerProps.showBeAUserIcon === true ) { bannerProps.beAUserFunction = this._beAUserFunction.bind(this); }


//  /**
//   * PERFORMANCE - UPDATE
//   * This is how you can UPDATE a performance snapshot - make the _performance.KEYHERE = startPerforOp('KEYHERE', this.displayMode)
//   * NOTE IN THIS CASE to do it before you refreshPanelHTML :)
//   */

//   _performance.ops.renderWebPartStart = updatePerformanceEnd( _performance.ops.renderWebPartStart, true, 555 );

    // this._performance.ops.renderWebPartStart = startPerformOp( 'renderWebPartStart', this.displayMode, );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bannerProps = runFPSWebPartRender( this as any, strings, WebPartAnalyticsChanges, WebPartPanelChanges, );
    // this._performance.ops.renderWebPartStart = updatePerformanceEnd( this._performance.ops.renderWebPartStart, true, 555 );
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

  //Copied from AdvancedPagePropertiesWebPart.ts
  // protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
    protected async onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): Promise<void> {
      super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
  
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await onFPSPropPaneCHanged( this as any, propertyPath, oldValue, newValue );
      // try {
      //   await validateDocumentationUrl ( this.properties, propertyPath , newValue );
      // } catch(e) {
      //   alert('unalbe to validateDocumentationUrl' );
      // }

  
      // this.properties.webpartHistory = updateWebpartHistoryV2( this.properties.webpartHistory , propertyPath , newValue, this.context.pageContext.user.displayName, [], [] );
  
      // if ( propertyPath === 'fpsImportProps' ) {
  
      //   this._importErrorMessage = updateFpsImportProps( this.properties, importBlockProps, propertyPath, newValue,
      //     this.context.propertyPane.refresh,
      //     this.onPropertyPaneConfigurationStart,
      //     this._exitPropPaneChanged,
      //   );
  
      //  } else if ( propertyPath === 'bannerStyle' || propertyPath === 'bannerCmdStyle' )  {
  
      //   refreshBannerStylesOnPropChange( this.properties, propertyPath, newValue, this.context.propertyPane.refresh );
  
      // } else if (propertyPath === 'bannerStyleChoice')  {
      //   // bannerThemes, bannerThemeKeys, makeCSSPropPaneString
  
      //   updateBannerThemeStyles( this.properties , newValue, true, this.properties.defPinState, this._sitePresets.forces );
  
      //   if ( newValue === 'custom' || newValue === 'lock' ) {
      //     //Do nothing for these cases.
          
      //   } else {
      //     //Reset main web part styles to defaults
  
      //   }
  
      // }
  
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
