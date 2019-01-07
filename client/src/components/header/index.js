import React from 'react';


import HeaderIcons from './HeaderIcons';


const Header = () => {
  return (
    <div className="header">
      <h1 className="main-title main-title--big text-center">
        Ruby Continental
      </h1>
      <HeaderIcons />
    </div>
  );
}


export default (Header);