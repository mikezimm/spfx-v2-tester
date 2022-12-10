
import { ISiteUsersInfo } from '@mikezimm/fps-library-v2/lib/pnpjs';

export interface IFpsOldVsNewProps {
  siteUsers: ISiteUsersInfo;
  
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  
}
