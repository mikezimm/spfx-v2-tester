// /* eslint-disable @typescript-eslint/no-explicit-any */

// /***
//  *    d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b       .d88b.  d88888b d88888b d888888b  .o88b. d888888b  .d8b.  db      
//  *      `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'      .8P  Y8. 88'     88'       `88'   d8P  Y8   `88'   d8' `8b 88      
//  *       88    88  88  88 88oodD' 88    88 88oobY'    88         88    88 88ooo   88ooo      88    8P         88    88ooo88 88      
//  *       88    88  88  88 88~~~   88    88 88`8b      88         88    88 88~~~   88~~~      88    8b         88    88~~~88 88      
//  *      .88.   88  88  88 88      `8b  d8' 88 `88.    88         `8b  d8' 88      88        .88.   Y8b  d8   .88.   88   88 88booo. 
//  *    Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP          `Y88P'  YP      YP      Y888888P  `Y88P' Y888888P YP   YP Y88888P 
//  *                                                                                                                                  
//  *                                                                                                                                  
//  */
//  import { createExportObject, } from '../fpsMinIndex';


//   /***
//   *    d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b       .o88b.  .d88b.  .88b  d88. d8888b.  .d88b.  d8b   db d88888b d8b   db d888888b 
//   *      `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'      d8P  Y8 .8P  Y8. 88'YbdP`88 88  `8D .8P  Y8. 888o  88 88'     888o  88 `~~88~~' 
//   *       88    88  88  88 88oodD' 88    88 88oobY'    88         8P      88    88 88  88  88 88oodD' 88    88 88V8o 88 88ooooo 88V8o 88    88    
//   *       88    88  88  88 88~~~   88    88 88`8b      88         8b      88    88 88  88  88 88~~~   88    88 88 V8o88 88~~~~~ 88 V8o88    88    
//   *      .88.   88  88  88 88      `8b  d8' 88 `88.    88         Y8b  d8 `8b  d8' 88  88  88 88      `8b  d8' 88  V888 88.     88  V888    88    
//   *    Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP          `Y88P'  `Y88P'  YP  YP  YP 88       `Y88P'  VP   V8P Y88888P VP   V8P    YP    
//   *                                                                                                                                               
//   *                                                                                                                                               
//   */


// // import { ILoadPerformanceALVFM, IPerformanceOp } from './components/Performance/IFpsPageInfoWebPartProps';

// import { IFpsOldVsNewWebPartProps, exportIgnoreProps, } from '../IFpsOldVsNewWebPartProps';


// import { changeBannerTheme } from "../fpsMinIndex";
// import { changePinMe, } from '../fpsMinIndex';
// import { changeExpando, } from '../fpsMinIndex';

// import { changeCustomHelp, } from '../fpsMinIndex';
// import { changePageStyle} from '../fpsMinIndex';
// import { changeBannerBasics, changeBannerNav, } from '../fpsMinIndex';
// import { changeBannerUtility,  } from '../fpsMinIndex';

// import { changeEasyIcons } from '../fpsMinIndex';
// import { changeEasyPages, } from '../fpsMinIndex';

// import { changesAgeSlider } from '../fpsWebpartIndex';
// import { IMinWPBannerProps } from '@mikezimm/fps-library-v2/lib/banner/interfaces/MinWP/IMinWPBannerProps';
// /***
//  *    d88888b db    db d8888b.  .d88b.  d8888b. d888888b      d8888b. d8888b.  .d88b.  d8888b. .d8888. 
//  *    88'     `8b  d8' 88  `8D .8P  Y8. 88  `8D `~~88~~'      88  `8D 88  `8D .8P  Y8. 88  `8D 88'  YP 
//  *    88ooooo  `8bd8'  88oodD' 88    88 88oobY'    88         88oodD' 88oobY' 88    88 88oodD' `8bo.   
//  *    88~~~~~  .dPYb.  88~~~   88    88 88`8b      88         88~~~   88`8b   88    88 88~~~     `Y8b. 
//  *    88.     .8P  Y8. 88      `8b  d8' 88 `88.    88         88      88 `88. `8b  d8' 88      db   8D 
//  *    Y88888P YP    YP 88       `Y88P'  88   YD    YP         88      88   YD  `Y88P'  88      `8888Y' 
//  *                                                                                                     
//  *                                                                                                     
//  */

// /**
//  * buildExportProps builds up an object of specific webpart properties that can be exported via the help panel
//  * @returns exportObject
//  */

//  export function buildExportProps( wpProps : IMinWPBannerProps, wpInstanceID: string, currentWeb: string, ) : any {
//     const exportStructure :any = {};
//     // let wpInstanceIDSplit = wpInstanceID.split('|');
//     // exportStructure.wpInstanceID = [ wpInstanceIDSplit[0], wpInstanceIDSplit[1], wpInstanceIDSplit[3]].join(' ~ ');

//     exportStructure.ageSlider = changesAgeSlider;

//     exportStructure.wpInstanceID = wpInstanceID;
//     exportStructure.currentWeb = currentWeb;



//     exportStructure.Visitor = changeCustomHelp;

//     exportStructure.easyPages = changeEasyPages;
//     exportStructure.easyIcons = changeEasyIcons;
  

//     exportStructure.BannerBasics = changeBannerBasics;
//     exportStructure.BannerNav = changeBannerNav;

//     exportStructure.BannerTheme = changeBannerTheme;
//     exportStructure.BannerOther = changeBannerUtility;

//     exportStructure.fpsOptions1 = changePageStyle;

//     exportStructure.Expando = changeExpando;

//     const exportObject = createExportObject( exportStructure, wpProps, exportIgnoreProps, false );

//     console.log('Exportable Props:', exportObject );
//     return exportObject;

//   }

//   export function buildFPSAnalyticsProps( wpProps : IFpsOldVsNewWebPartProps, wpInstanceID: string, currentWeb: string, ) : any {
//     const exportStructure :any = {};

//     exportStructure.wpInstanceID = wpInstanceID;
//     exportStructure.currentWeb = currentWeb;

//     exportStructure.Visitor = changeCustomHelp;

//     exportStructure.easyPages = changeEasyPages;
//     exportStructure.easyIcons = changeEasyIcons;
//     exportStructure.ageSlider = changesAgeSlider;

//     exportStructure.BannerBasics = changeBannerBasics;
//     exportStructure.BannerNav = changeBannerNav;

//     exportStructure.BannerTheme = changeBannerTheme;
//     exportStructure.BannerOther = changeBannerUtility;

//     exportStructure.fpsOptions1 = changePageStyle;

//     exportStructure.Expando = changeExpando;


//     const exportObject = createExportObject( exportStructure, wpProps, exportIgnoreProps, false );

//     console.log('Exportable Props:', exportObject );
//     return exportObject;

//   }