

/***
 * NOTE:  All imports in here Must be imported directly from fps-library-v2, not the fpsPreferences
 * Or else it will get into an endless loop because these values are imported into fpsPreferences
 * 
 */
 import { exportIgnorePropsFPS, } from '@mikezimm/fps-library-v2/lib/banner/features/ImportExport/IgnoreBlockProps';
 import { importBlockPropsFPS } from '@mikezimm/fps-library-v2/lib/banner/features/ImportExport/IgnoreBlockProps';

 import { IMinBannerUIProps, } from "@mikezimm/fps-library-v2/lib/banner/interfaces/MinWP/IMinBannerUIProps";
 import { IMinBannerUtilityProps, } from "@mikezimm/fps-library-v2/lib/banner/interfaces/MinWP/IMinBannerUtilityProps";

 import { IMinBannerThemeProps } from "@mikezimm/fps-library-v2/lib/banner/interfaces/Theme/Interfaces";

 import { IMinPinMeProps, } from '@mikezimm/fps-library-v2/lib/banner/features/PinMe/Interfaces';

 import { IMinPandoramicProps, } from '@mikezimm/fps-library-v2/lib/banner/features/Expando/Interfaces';

 import { IMinCustomHelpProps, } from '@mikezimm/fps-library-v2/lib/banner/components/VisitorPanel/Interfaces';

 import { IMinPageStyleProps, } from '@mikezimm/fps-library-v2/lib/banner/features/PageStyle/Interfaces';

 import { IEasyIconsWPProps, } from '@mikezimm/fps-library-v2/lib/components/atoms/EasyIcons/eiTypes';

 import { IEasyPagesWPProps, } from '@mikezimm/fps-library-v2/lib/banner/components/EasyPages/epTypes';


 import { changesAgeSlider } from '@mikezimm/fps-library-v2/lib/components/atoms/FPSAgeSlider/FPSAgeTypes';


 /**
  For props to export to panel but NOT save in analytics
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WebPartAnalyticsChanges : any = {
  AgeSlider: changesAgeSlider,
}

 /**
 * These are properties to export BOTH to analytics AND the panel
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WebPartPanelChanges : any = {

}

//Specific for this web part
export const exportIgnorePropsThis : string[] = [ ];

export const exportIgnoreProps : string[] = [ ...exportIgnorePropsFPS, ...exportIgnorePropsThis  ];

//These props will not be imported even if they are in one of the change arrays above (fail-safe)
//This was done so user could not manually insert specific props to over-right fail-safes built in to the webpart

//Specific for this web part
export const importBlockPropsThis : string[] = [ 'showSomeProps' ];

export const importBlockProps : string[] = [ ...importBlockPropsFPS, ...importBlockPropsThis ];

export interface IFpsOldVsNewWebPartProps extends IMinBannerUIProps, IMinPinMeProps, IMinPandoramicProps, IMinBannerThemeProps, 
  IMinCustomHelpProps, IMinPageStyleProps, IMinBannerUtilityProps, 
  IEasyPagesWPProps, IEasyIconsWPProps {
    description: string;
  }
