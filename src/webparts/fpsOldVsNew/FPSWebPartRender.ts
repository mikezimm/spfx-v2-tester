
// import { IMainWPBannerSetupX, mainWebPartRenderBannerSetupX } from './BuildBannerPropsX2';

// import { buildExportProps } from './CoreFPS/BuildExportPropsX';
// import { IRepoLinks, IWebpartBannerProps } from './fpsMinIndex';
// import { trickyEmails } from './fpsMinIndex';

// import { renderCustomStyles, startPerformOp, updatePerformanceEnd } from "./fpsMinIndex";
// import { IThisFPSWebPartClass } from './IThisFPSWebPartClass';

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function runFPSWebPartRender( thisWPClass: IThisFPSWebPartClass, repoLink: IRepoLinks, strings: any, 
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     WebPartAnalyticsChanges: any, WebPartPanelChanges: any, alreadyStartedPerformOp: boolean = false ): IWebpartBannerProps {

//   /**
//    * NOTE FROM TESTING, Only deconstruct things that do NOT change.
//    * If I deconstructed _performance, _sitePresets, _FPSUser, then in main web part it would not return the actual values back.
//    */
//   // let { _performance, _sitePresets, _FPSUser, } = thisWPClass;

//   const {displayMode, properties,  context, _wpInstanceID, domElement, _beAUserFunction } = thisWPClass;

//     //repoLink, trickyEmails, exportProps, strings , domElement.clientWidth, 
//   /**
//    * PERFORMANCE - START
//    * This is how you can start a performance snapshot - make the _performance.KEYHERE = startPerforOp('KEYHERE', this.displayMode)
//    */ 

//   //This will create renderWebPartStart only if it was not created earlier in the render
//   if ( alreadyStartedPerformOp === false ) {
//     thisWPClass._performance.ops.renderWebPartStart = startPerformOp( 'renderWebPartStart', displayMode, );
//   }

//    renderCustomStyles( 
//      { wpInstanceID: _wpInstanceID, domElement: domElement, wpProps: properties, 
//        displayMode: displayMode,
//        doHeadings: false } );  //doHeadings is currently only used in PageInfo so set to false.

//   const exportProps = buildExportProps( 'Panel', properties , _wpInstanceID, context.pageContext.web.serverRelativeUrl, WebPartAnalyticsChanges, WebPartPanelChanges );

//   const buildBannerProps: IMainWPBannerSetupX = {
//     main: thisWPClass,
//     trickyEmails: trickyEmails,
//     exportProps: exportProps,
//     strings: strings,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     wideToggle: true,
//     expandConsole: true,
//     SpecialMessage: null,
//   }

//   const bannerProps: IWebpartBannerProps = mainWebPartRenderBannerSetupX( buildBannerProps );

//   if ( bannerProps.showBeAUserIcon === true ) { bannerProps.beAUserFunction = _beAUserFunction.bind(thisWPClass); }

//   /**
//     * PERFORMANCE - UPDATE
//     * This is how you can UPDATE a performance snapshot - make the _performance.KEYHERE = startPerforOp('KEYHERE', this.displayMode)
//     * NOTE IN THIS CASE to do it before you refreshPanelHTML :)
//     */

//   thisWPClass._performance.ops.renderWebPartStart = updatePerformanceEnd( thisWPClass._performance.ops.renderWebPartStart, true, 555 );

//   return bannerProps;

// }