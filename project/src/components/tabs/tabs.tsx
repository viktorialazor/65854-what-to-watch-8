import React from 'react';
import Tab from '../tab/tab';

type TabsProps = {
  tabList: string[];
  activeTabName: string;
  getActiveTab: ((activeTab: string) => void);
}

function Tabs({tabList, activeTabName, getActiveTab}: TabsProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {tabList.map((item) => <Tab tabName={item} activeTabName={activeTabName} getActiveTab={getActiveTab} key={item}/>)}
      </ul>
    </nav>
  );
}

export default Tabs;
