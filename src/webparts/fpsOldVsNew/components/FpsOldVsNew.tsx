import * as React from 'react';
import styles from './FpsOldVsNew.module.scss';
import { IFpsOldVsNewProps, IFpsOldVsNewState } from './IFpsOldVsNewProps';
import { escape } from '@microsoft/sp-lodash-subset';

import EasyPagesHook from '@mikezimm/fps-library-v2/lib/banner/components/EasyPages/componentSources';

import { getBannerPages, } from './HelpPanel/AllContent';
import { IBannerPages } from "@mikezimm/fps-library-v2/lib/banner/mainReact/IWebpartBannerProps";
import { ILoadPerformance, startPerformOp, updatePerformanceEnd } from "../fpsMinIndex";
import { IFPSPinMenu, IPinMeState } from '@mikezimm/fps-library-v2/lib/banner/features/PinMe/Interfaces';

import FetchBannerX from '@mikezimm/fps-library-v2/lib/banner/bannerX/FetchBannerX';
import { CommandsPage } from '../CoreFPS/PropPaneHelpPages/Commands';


//Use this to add more console.logs for this component
const urlParams : URLSearchParams = new URLSearchParams( window.location.search );
const fpsconsole : boolean = urlParams.get( 'fpsconsole' ) === 'true' ? true : false;
const consolePrefix: string = 'fpsconsole: FpsCore115Banner';

require ('@mikezimm/fps-styles/dist/FPSHeadings.css');

export default class FpsOldVsNew extends React.Component<IFpsOldVsNewProps, IFpsOldVsNewState > {


  private _performance: ILoadPerformance = null;
  private _contentPages : IBannerPages = getBannerPages( this.props.bannerProps );

  private _updatePinState( newValue: IPinMeState ): void {
    this.setState({ pinState: newValue, });
  }

  private _newRefreshId() :string  {

    const startTime = new Date();
    const refreshId = startTime.toISOString().replace('T', ' T'); // + ' ~ ' + startTime.toLocaleTimeString();
    return refreshId;

  }

 /***
*     .o88b.  .d88b.  d8b   db .d8888. d888888b d8888b. db    db  .o88b. d888888b  .d88b.  d8888b. 
*    d8P  Y8 .8P  Y8. 888o  88 88'  YP `~~88~~' 88  `8D 88    88 d8P  Y8 `~~88~~' .8P  Y8. 88  `8D 
*    8P      88    88 88V8o 88 `8bo.      88    88oobY' 88    88 8P         88    88    88 88oobY' 
*    8b      88    88 88 V8o88   `Y8b.    88    88`8b   88    88 8b         88    88    88 88`8b   
*    Y8b  d8 `8b  d8' 88  V888 db   8D    88    88 `88. 88b  d88 Y8b  d8    88    `8b  d8' 88 `88. 
*     `Y88P'  `Y88P'  VP   V8P `8888Y'    YP    88   YD ~Y8888P'  `Y88P'    YP     `Y88P'  88   YD 
*                                                                                                  
*                                                                                                  
*/


public constructor(props:IFpsOldVsNewProps){
  super(props);

  if ( this._performance === null ) { this._performance = this.props.performance;  }

  this.state = {
    pinState: this.props.bannerProps.fpsPinMenu.defPinState ? this.props.bannerProps.fpsPinMenu.defPinState : 'normal',
    showDevHeader: false,
    lastStateChange: '', 
    analyticsWasExecuted: false,
    refreshId: this._newRefreshId(),
    debugMode: false,
    showSpinner: false,

    };
}




public componentDidMount(): void {
  if ( fpsconsole === true ) console.log( `${consolePrefix} ~ componentDidMount` );

  //Start tracking performance
  this._performance.ops.fetch1 = startPerformOp( 'fetch1 TitleText', this.props.bannerProps.displayMode );
  //Do async code here

  //End tracking performance
  this._performance.ops.fetch1 = updatePerformanceEnd( this._performance.ops.fetch1, true, 777 );

  // const analyticsWasExecuted = saveViewAnalytics( 'FPS Core114 Banner View', 'didMount' , this.props, this.state.analyticsWasExecuted, this._performance );

  // if ( this.state.analyticsWasExecuted !==  analyticsWasExecuted ) {
  //   this.setState({ analyticsWasExecuted: analyticsWasExecuted });
  // }

}



//        
/***
*         d8888b. d888888b d8888b.      db    db d8888b. d8888b.  .d8b.  d888888b d88888b 
*         88  `8D   `88'   88  `8D      88    88 88  `8D 88  `8D d8' `8b `~~88~~' 88'     
*         88   88    88    88   88      88    88 88oodD' 88   88 88ooo88    88    88ooooo 
*         88   88    88    88   88      88    88 88~~~   88   88 88~~~88    88    88~~~~~ 
*         88  .8D   .88.   88  .8D      88b  d88 88      88  .8D 88   88    88    88.     
*         Y8888D' Y888888P Y8888D'      ~Y8888P' 88      Y8888D' YP   YP    YP    Y88888P 
*                                                                                         
*                                                                                         
*/

public componentDidUpdate( prevProps: IFpsOldVsNewProps ): void {

if ( fpsconsole === true ) console.log( `${consolePrefix} ~ componentDidUpdate` );

const refresh = this.props.bannerProps.displayMode !== prevProps.bannerProps.displayMode ? true : false;

//refresh these privates when the prop changes warrent it
if ( refresh === true ) {
  // this._webPartHelpElement = getWebPartHelpElement( this.props.bannerProps.sitePresets );
  this._contentPages = getBannerPages( this.props.bannerProps );
}


/**
 * This section is needed if you want to track performance in the react component.
 *    In the case of ALVFM, I do the following:
 *    this._performance.ops.fetch1 = startPerformOp( <=== Starts tracking perforamnce
 *    ... Stuff to do
 *    this._performance.ops.fetch1 = updatePerformanceEnd( <=== ENDS tracking performance
 *    this._replacePanelHTML = refreshPanelHTML( <=== This updates the performance panel content
 */

  if ( refresh === true ) {
  //Start tracking performance item
  this._performance.ops.fetch2 = startPerformOp( 'fetch2 TitleText', this.props.bannerProps.displayMode );

  /**
   *       Do async code here
   */

  //End tracking performance
  this._performance.ops.fetch2 = updatePerformanceEnd( this._performance.ops.fetch2, true, 999 );

  if ( fpsconsole === true ) console.log('React componentDidUpdate - this._performance:', JSON.parse(JSON.stringify(this._performance)) );
  
}

}

// public async _updatePerformance () {
public _updatePerformance (): boolean  {


/**
 * This section is needed if you want to track performance in the react component.
 *    In the case of ALVFM, I do the following:
 *    this._performance.ops.fetch1 = startPerformOp( <=== Starts tracking perforamnce
 *    ... Stuff to do
 *    this._performance.ops.fetch1 = updatePerformanceEnd( <=== ENDS tracking performance
 *    this._replacePanelHTML = refreshPanelHTML( <=== This updates the performance panel content
 */

 const updateThis = this._performance.ops.fetch2 ? 'fetch3' : 'fetch2';

 //Start tracking performance
 this._performance.ops[updateThis] = startPerformOp( `${updateThis} TitleText`, this.props.bannerProps.displayMode );

 /**
  *       Do async code here
  */

 //End tracking performance
 const ops: any = this._performance.ops;

 this._performance.ops[updateThis] = updatePerformanceEnd( ops[updateThis], true, 888 );

 alert(`${[updateThis]} should now be updated`);

 if ( fpsconsole === true ) console.log('React - _updatePerformance:', JSON.parse(JSON.stringify(this._performance)) );

//PERFORMANCE COMMENT:  YOU NEED TO UPDATE STATE HERE FOR IT TO REFLECT IN THE BANNER.
this.setState({ 
  refreshId: this._newRefreshId(),
});

return true;

}



  public render(): React.ReactElement<IFpsOldVsNewProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

      const Banner = <FetchBannerX 

      // bonusHTML1={ 'BonusHTML1 Text' }
      panelPerformance={ this._performance }
      // bonusHTML2={ <div>BonusHTML2 Div</div> }

      bannerProps={ this.props.bannerProps }
      parentState={ this.state }

      WebPartHelpPivots= { [ CommandsPage ] }
      nearBannerElementsArray={ [] }
      farBannerElementsArray={ [] }

      contentPages={ this._contentPages }

      // SpecialMessage = { Special }

      updatePinState = { this._updatePinState.bind(this) }
      pinState = { this.state.pinState }

    />;

    return (
      <section className={`${styles.fpsOldVsNew} ${hasTeamsContext ? styles.teams : ''}`}>
        { Banner }
        <div className={[ styles.welcome, 'gradiant1' ].join(' ')}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        <div>
        </div>
      </section>
    );
  }
}
