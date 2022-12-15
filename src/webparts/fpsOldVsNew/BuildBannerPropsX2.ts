
// // import { DisplayMode } from "@microsoft/sp-core-library";

// import { baseBannerCmdStyles, baseBannerStyles } from "@mikezimm/fps-library-v2/lib/common/commandStyles/defaults";
// import { WebPartContextCopy_15_2, } from "@mikezimm/fps-library-v2/lib/common/interfaces/@msft/1.15.2/WebPartContext";
// import { DisplayMode, } from "@mikezimm/fps-library-v2/lib/common/interfaces/@msft/1.15.2/displayMode";
// import { IRepoLinks } from "@mikezimm/fps-library-v2/lib/components/atoms/Links/CreateLinks";
// import { createPerformanceTableVisitor, ILoadPerformance } from "@mikezimm/fps-library-v2/lib/components/indexes/Performance";
// import { ILoadPerformanceOps } from "@mikezimm/fps-library-v2/lib/components/molecules/Performance/IPerformance";
// import { IFPSUser, verifyAudienceVsUser } from "@mikezimm/fps-library-v2/lib/logic/indexes/Users";
// import { getReactCSSFromString, ICurleyBraceCheck } from "@mikezimm/fps-library-v2/lib/logic/Strings/reactCSS";
// import { ISpecialMessage } from "../components/SpecialBanner/interface";
// import { visitorPanelInfo } from "../components/VisitorPanel/VisitorPanelComponent";
// import { IWebpartBannerProps } from "../mainReact/IWebpartBannerProps";
// import { IBuildBannerSettings } from "./IBuildBannerSettings";

// import { SPPermission } from '@microsoft/sp-page-context';
// import { createEasyPagesSourceWPProps } from "../components/EasyPages/createEasyPagesSourceWPProps";
// import { createEasyPagesExtraWPProps } from "../components/EasyPages/createEasyPagesExtraWPProps";
// import { createEasyIconsWPProps } from "@mikezimm/fps-library-v2/lib/components/atoms/EasyIcons/createEasyIconsWPProps";

// import { createKeySiteProps } from "../components/Gear/CreateKeySiteProps";
// import { IThisFPSWebPartClass } from "./IThisFPSWebPartClass";
// import { trickyEmails } from "./fpsMinIndex";

// export interface IMainWPBannerSetupX {
//   main: IThisFPSWebPartClass
//   exportProps: IBuildBannerSettings;
//   trickyEmails: string[];
//   strings: any;
//   wideToggle: boolean;
//   expandConsole: boolean;
//   SpecialMessage?: ISpecialMessage;
// }

// export function mainWebPartRenderBannerSetupX( setup: IMainWPBannerSetupX ) : IWebpartBannerProps {

//   const { displayMode, _beAReader, _FPSUser, properties, _modifyBannerTitle, _forceBanner, _sitePresets, _disablePandoramic, } = setup.main;
//   const { pageContext, _pageLayoutType } = setup.main.context;

//     // let anyContext: any = thisContext;

//     const renderAsReader = displayMode === DisplayMode.Read && _beAReader === true ? true : false;

//     // console.log('mainWebPart: showTricks ~ 322',   );
//     // Verify if this is a duplicate of the code in FPSUser (copied and commented out below )
//     let showTricks: any = false;
//     trickyEmails.map( getsTricks => {
//       if ( pageContext.user && pageContext.user.loginName && pageContext.user.loginName.toLowerCase().indexOf( getsTricks ) > -1 ) { 
//         showTricks = true ;
//         properties.showRepoLinks = true; //Always show these users repo links
//       }
//       } );

//     //  Copied from getFPSUser Junly 29, 2022
//     //   let showTricks: any = false;
//     //   trickyEmails.map( getsTricks => {
//     //     if ( user.loginName && user.loginName.toLowerCase().indexOf( getsTricks ) > -1 ) { 
//     //       showTricks = true ;
//     //     }
//     //     } );

//     // console.log('mainWebPart: verifyAudienceVsUser ~ 341',   );

//     properties.showBannerGear = verifyAudienceVsUser( _FPSUser , showTricks, properties.homeParentGearAudience, null, renderAsReader );

//     let errMessage = '';
//     let validDocsContacts = ''; //This may no longer be needed if links below are commented out.

//     if ( ( properties.documentationIsValid !== true && properties.documentationLinkUrl ) //This means it failed the url ping test... throw error
//     || ( properties.requireDocumentation === true && !properties.documentationLinkUrl ) ) {//This means docs are required but there isn't one provided
//         errMessage += ' Invalid Support Doc Link: ' + ( properties.documentationLinkUrl ? properties.documentationLinkUrl : 'Empty.  ' ) ; validDocsContacts += 'DocLink,'; 
//     }

//     if ( properties.requireContacts === true ) {
//       if ( !properties.supportContacts || properties.supportContacts.length < 1 ) { 
//         errMessage += ' Need valid Support Contacts' ; validDocsContacts += 'Contacts,'; 
//       }
//     }
    
//     /***
//       *    d8888b.  .d8b.  d8b   db d8b   db d88888b d8888b. 
//       *    88  `8D d8' `8b 888o  88 888o  88 88'     88  `8D 
//       *    88oooY' 88ooo88 88V8o 88 88V8o 88 88ooooo 88oobY' 
//       *    88~~~b. 88~~~88 88 V8o88 88 V8o88 88~~~~~ 88`8b   
//       *    88   8D 88   88 88  V888 88  V888 88.     88 `88. 
//       *    Y8888P' YP   YP VP   V8P VP   V8P Y88888P 88   YD 
//       *                                                      
//       *                                                      
//       */

//     const replacePanelWarning = `Anyone with lower permissions than '${properties.fullPanelAudience}' will ONLY see this content in panel`;






























//     // export function buildBannerProps ( wpProps : IMinWPBannerProps, FPSUser: IFPSUser, bbs: IBuildBannerSettings, showTricks: boolean, displayMode: DisplayMode ) {


//     /***
//      *    d8888b.  .d8b.  d8b   db d8b   db d88888b d8888b. 
//      *    88  `8D d8' `8b 888o  88 888o  88 88'     88  `8D 
//      *    88oooY' 88ooo88 88V8o 88 88V8o 88 88ooooo 88oobY' 
//      *    88~~~b. 88~~~88 88 V8o88 88 V8o88 88~~~~~ 88`8b   
//      *    88   8D 88   88 88  V888 88  V888 88.     88 `88. 
//      *    Y8888P' YP   YP VP   V8P VP   V8P Y88888P 88   YD 
//      *                                                      
//      *                                                      
//      */

//     //  Updated for SPA to get Title which is also the window.name property  https://github.com/mikezimm/drilldown7/issues/243
//     const bannerTitle = _modifyBannerTitle === true && properties.bannerTitle && properties.bannerTitle.length > 0 ? properties.bannerTitle : 
//         _pageLayoutType === 'SingleWebPartAppPageLayout' ? document.title : setup.main.repoLink.desc;

//     const bannerStyle: ICurleyBraceCheck = getReactCSSFromString( 'bannerStyle', properties.bannerStyle, baseBannerStyles );
//     const bannerCmdStyle: ICurleyBraceCheck = getReactCSSFromString( 'bannerCmdStyle', properties.bannerCmdStyle, baseBannerCmdStyles );

//     //Over-rides gear for certain users
//     const showRepoLinks = renderAsReader === true || properties.showRepoLinks === false ? false : true;

//     const isSiteAdmin = renderAsReader !== true && _FPSUser.isSiteAdmin === true ? true : false;

//     const hasCustomizePages = isSiteAdmin === true ? true :
//         verifyAudienceVsUser( _FPSUser, showTricks, properties.homeParentGearAudience , SPPermission.addAndCustomizePages, renderAsReader );

//     const homeParentGearAudience = isSiteAdmin === true ? true : verifyAudienceVsUser( _FPSUser, showTricks, properties.homeParentGearAudience , null, renderAsReader );
//     const showBannerGear = isSiteAdmin === true ? true : properties.showBannerGear === true && homeParentGearAudience === true ? true : false;
//     const showGoToHome = isSiteAdmin === true ? true : properties.showGoToHome === true && homeParentGearAudience === true ? true : false;
//     const showGoToParent = isSiteAdmin === true ? true : properties.showGoToParent === true && homeParentGearAudience === true ? true : false;

//     const showExport = isSiteAdmin === true ? true : properties.showExport === true && hasCustomizePages !== true ? false : true; 

//     const enableExpandoramic = _disablePandoramic === true || properties.enableExpandoramic === false ? false :
//         verifyAudienceVsUser( _FPSUser, showTricks, properties.expandoAudience , null, renderAsReader );

//     //Always show full panel if you are SCA
//     const showFullPanel = isSiteAdmin === true ? true : verifyAudienceVsUser( _FPSUser, showTricks, properties.fullPanelAudience , SPPermission.editListItems, renderAsReader );

//     //Over-rides expand for certain users

//     //  Changed expandoStyle from buildExpandoStyle function based on https://github.com/mikezimm/CoreFPS114/issues/6
//     //  let expandobuildExpandoStyle = buildExpandoStyle( errMessage, properties, bbs.errorObjArray, bbs.expandoErrorObj );
//     const expandoStyleObject = getReactCSSFromString( 'expandoStyle', properties.expandoStyle, {}  );

//     const styleErrors : string[] = [];
//     if ( bannerStyle.errMessage ) { styleErrors.push( bannerStyle.errMessage ) ; }
//     if ( bannerCmdStyle.errMessage ) { styleErrors.push( bannerCmdStyle.errMessage ) ; }
//     if ( expandoStyleObject.errMessage ) { styleErrors.push( expandoStyleObject.errMessage ) ; }

//     const styleErrorMessage = styleErrors.length > 0 ? `; ${styleErrors.join('; ')}` : '';
//     errMessage += styleErrorMessage;

//     const showBannerError = errMessage !== '' && errMessage !== null ? true : false; 

//     //Always pass false for verifyAudienceVsUser 'beAUser' or it will hide the beAUser Icon.
//     const showBeAUserIcon = verifyAudienceVsUser( _FPSUser , showTricks, properties.beAUserAudience, SPPermission.addAndCustomizePages, false );

//      // let showBeAUserIcon: boolean = false;
//      //  if ( ( properties.expandoAudience && properties.expandoAudience !== 'Everyone') 
//      //    || ( properties.homeParentGearAudience && properties.homeParentGearAudience !== 'Everyone' )  ) {
//      //   showBeAUserIcon = true;
//      //  }
    
//       let infoElement = 'More Information';
//       if ( properties.infoElementChoice === 'Text' ) {
//         infoElement = properties.infoElementText;

//       } else if ( properties.infoElementChoice ) {
//         infoElement = properties.infoElementChoice;

//       }

//       const startTime = new Date();
//       const refreshId = startTime.toISOString().replace('T', ' T'); // + ' ~ ' + startTime.toLocaleTimeString();

//       const bannerProps: IWebpartBannerProps = {

//         webpartHistory: properties.webpartHistory,
//         easyPagesSourceProps: createEasyPagesSourceWPProps( properties, setup.main.context, setup.main.repoLink ),
//         easyPagesExtraProps: createEasyPagesExtraWPProps( properties, showTricks ),
//         EasyIconsObject: createEasyIconsWPProps( properties ),
//         sitePresets: _sitePresets,
//         keySiteProps: createKeySiteProps( pageContext ),

//         fpsPinMenu: {
//           defPinState: properties.defPinState ? properties.defPinState : 'disabled',
//           forcePinState: properties.forcePinState ? properties.forcePinState : true,
//           domElement: setup.main.context.domElement,
//           pageLayout: properties.pageLayout,
//         },

//         refreshId: refreshId,
//         FPSUser: _FPSUser,
//         exportProps: setup.exportProps,
//         context: setup.main.context,
//         displayMode: displayMode,

//         WebPartHelpElements: [],
//         SpecialMessage: setup.SpecialMessage,

//         panelTitle: showBannerError === true ? errMessage : bannerTitle ,
//         infoElement: infoElement,

//         // changed null to undefined:  https://github.com/mikezimm/ALVFinMan/issues/171
//         contentPages: {
//           aboutTable: undefined ,
//           advancedContent: undefined ,
//           basicsContent: undefined ,
//           errorsContent: undefined ,
//           futureContent: undefined ,
//           getRandomTip: undefined ,
//           gettingStartedContent: undefined ,
//           tricksTable: undefined ,
//           webParTips: [],
//           whyContent: undefined ,
//         },

//         bannerWidth : ( setup.main.domElement.clientWidth - ( displayMode === DisplayMode.Edit ? 250 : 0) ),
//         showBanner: showTricks === true || _forceBanner === true || properties.showBanner !== false ? true : false,
//         feedbackEmail: properties.feedbackEmail ? properties.feedbackEmail : '',
//         showTricks: showTricks,
//         showBannerGear: showBannerGear,
//         showGoToHome: showGoToHome,
//         showGoToParent: showGoToParent,
//         showRepoLinks: showRepoLinks,
//         showExport: showExport,

//         showFullPanel: showFullPanel,
//         replacePanelHTML: properties.replacePanelHTML,
//         bonusHTML1: null,
//         panelPerformance: setup.main._performance,
//         bonusHTML2: null,
//         replacePanelWarning: replacePanelWarning,

//         // onHomePage: anyContext._pageLayoutType === 'Home' ? true : false,
//         onHomePage: pageContext.legacyPageContext.isWebWelcomePage === true ? true : false,
//         hoverEffect: properties.bannerHoverEffect === false ? false : true,

//         //This was my modified attempt that didn't work
//         title: showBannerError === true ? errMessage : bannerTitle ,
//         bannerReactCSS: showBannerError === true ?  { background: "yellow", color: "red", } : bannerStyle.parsed ,
//         bannerCmdReactCSS: bannerCmdStyle.parsed ,

//         gitHubRepo: setup.main.repoLink,
//         farElements: [],
//         nearElements: [],
//         earyAccess: false,
//         wideToggle: setup.wideToggle,

//         //2022-02-17:  Added these for expandoramic mode
//         domElement: setup.main.context.domElement, //Looking at renderCustomStyles, it seems that domElement is on this.domElement ( aka main webpart this )
//         pageLayout: properties.pageLayout, // like SinglePageApp etc... this.context[_pageLayout];
//         expandoProps: {
//           enableExpandoramic: enableExpandoramic,
//           expandoDefault: properties.expandoDefault,
//           expandoStyle: expandoStyleObject.parsed,
//           expandAlert: false,
//           expandConsole: setup.expandConsole,
//           expandoPadding: properties.expandoPadding,
//           expandoAudience: properties.expandoAudience,
//           //2022-02-17:  END additions for expandoramic mode
//         },

//         beAUser: renderAsReader,
//         showBeAUserIcon: showBeAUserIcon,
//         beAUserFunction: null,

//       };

//        //close #129:  This makes the maxWidth added in fps options apply to banner as well.
//       //  if ( properties.fpsContainerMaxWidth && properties.fpsContainerMaxWidth.length > 0 && bannerProps.bannerReactCSS ) {
//       //    bannerProps.bannerReactCSS.maxWidth = properties.fpsContainerMaxWidth;
//       //  }

//       // 2022-12-12:  VERIFY THIS IS NEEDED, it's in buildBannerPropsv1 AND WebPartRenderBannerV2.ts
//        if ( properties.allSectionMaxWidthEnable && properties.allSectionMaxWidth > 0 && bannerProps.bannerReactCSS ) {
//          bannerProps.bannerReactCSS.maxWidth = properties.allSectionMaxWidth;
//        }

//       //  return { errMessage: errMessage, bannerProps: bannerProps, errorObjArray: [ expandoStyleObject.errMessage ], };

//     if ( properties.defPinState === 'disabled'  ) {
//       // npm install @mikezimm/npmfunctions@2.1.14

//     } else {
//       if ( !properties.bannerTitle || properties.bannerTitle === '' ) { 
//         if ( properties.defPinState !== 'normal' && setup.strings.bannerTitle ) {
//           bannerProps.title = setup.strings.bannerTitle ;
//         } else {
//           bannerProps.title = 'hide' ;
//         }
//       }

//       //Add this to force a title because when pinned by default, users may not know it's there.
//       if ( properties.forcePinState === true && properties.defPinState !== 'normal' ) {
//         if ( !properties.bannerTitle || properties.bannerTitle.length < 3 ) { bannerProps.title = 'Page Contents' ; }
//       }
//     }

//     properties.replacePanelHTML = visitorPanelInfo( properties, setup.main.repoLink, '', '', createPerformanceTableVisitor( setup.main._performance, setup.main._keysToShow ) );

//     bannerProps.replacePanelHTML = properties.replacePanelHTML;

//     return bannerProps;

// }









