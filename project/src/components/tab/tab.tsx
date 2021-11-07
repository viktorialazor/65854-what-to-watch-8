import React from 'react';

type TabProps = {
  tabName: string;
  activeTabName: string;
  getActiveTab: ((activeTab: string) => void);
}

function Tab({tabName, activeTabName, getActiveTab}: TabProps): JSX.Element {

  const getClasses = (tab: string, activeTab: string): string => {
    if (tab === activeTab) {
      return 'film-nav__item film-nav__item--active';
    }

    return 'film-nav__item';
  };

  return (
    <li className={getClasses(tabName, activeTabName)}>
      <a href="/" className="film-nav__link" onClick={(evt) => {evt.preventDefault(); getActiveTab(tabName);}}>{tabName}</a>
    </li>
  );
}

export default Tab;
