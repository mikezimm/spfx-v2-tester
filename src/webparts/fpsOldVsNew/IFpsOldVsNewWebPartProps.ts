

/***
 * NOTE:  All imports in here Must be imported directly from fps-library-v2, not the fpsPreferences
 * Or else it will get into an endless loop because these values are imported into fpsPreferences
 * 
 */
import { exportIgnorePropsFPS, } from '@mikezimm/fps-library-v2/lib/banner/features/ImportExport/IgnoreBlockProps';
import { importBlockPropsFPS } from '@mikezimm/fps-library-v2/lib/banner/features/ImportExport/IgnoreBlockProps';

import { changesAgeSlider } from '@mikezimm/fps-library-v2/lib/components/atoms/FPSAgeSlider/FPSAgeTypes';
import { IMinWPBannerProps } from '@mikezimm/fps-library-v2/lib/banner/interfaces/MinWP/IMinWPBannerProps';


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

//IMinBannerUIProps, IEasyPagesIconsWPProps, IMinPinMeProps, IMinPandoramicProps, 
// IMinBannerThemeProps, IMinCustomHelpProps, IMinPageStyleProps, 
// IMinBannerUtilityProps IEasyPagesWPProps, IEasyIconsWPProps

export interface IFpsOldVsNewWebPartProps extends IMinWPBannerProps {
    description: string;
  }
