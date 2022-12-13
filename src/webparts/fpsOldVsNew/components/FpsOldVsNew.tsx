import * as React from 'react';
import styles from './FpsOldVsNew.module.scss';
import { IFpsOldVsNewProps, IFpsOldVsNewState } from './IFpsOldVsNewProps';
import { escape } from '@microsoft/sp-lodash-subset';

import EasyPagesHook from '@mikezimm/fps-library-v2/lib/banner/components/EasyPages/componentSources';

require ('@mikezimm/fps-styles/dist/FPSHeadings.css');

export default class FpsOldVsNew extends React.Component<IFpsOldVsNewProps, IFpsOldVsNewState > {

  public render(): React.ReactElement<IFpsOldVsNewProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    //          easyPagesExtraProps={ { ...this.props.easyPagesExtraProps, ...{ easyPagesExpanded: this.state.showEasyPages, easyPagesToggleExpanded: this._toggleEasyLinks.bind(this) } } }

    const EasyPagesElement = <EasyPagesHook 
    easyPagesExtraProps={ { ...this.props.bannerProps.easyPagesExtraProps, ...{ easyPagesExpanded: true, easyPagesToggleExpanded: () => alert('Hi!') } } }
    easyPagesSourceProps= { this.props.bannerProps.easyPagesSourceProps }
    // easyPagesCommonProps= { this.props.easyPagesCommonProps }
    EasyIconsObject= { this.props.bannerProps.EasyIconsObject }
  />;

    return (
      <section className={`${styles.fpsOldVsNew} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={[ styles.welcome, 'gradiant1' ].join(' ')}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        <div>
         { EasyPagesElement }
        </div>
      </section>
    );
  }
}
