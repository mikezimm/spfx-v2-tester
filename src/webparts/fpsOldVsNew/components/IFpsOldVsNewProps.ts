
import { IEasyPagesSourceProps } from '@mikezimm/fps-library-v2/lib/banner/components/EasyPages/componentPage';
import { IEasyPagesExtraProps } from '@mikezimm/fps-library-v2/lib/banner/components/EasyPages/componentSources';
import { IEasyIcons } from '@mikezimm/fps-library-v2/lib/components/atoms/EasyIcons/eiTypes';


export interface IFpsOldVsNewProps {
  
  easyPagesSourceProps: IEasyPagesSourceProps;  // General props which apply to all Sources/Pages
  easyPagesExtraProps: IEasyPagesExtraProps;  // General props which are used on the SourcesPage but not component page
  EasyIconsObject: IEasyIcons; 

  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  
}
