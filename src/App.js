import React, { useState, useEffect } from "react";
import { HashRouter } from 'react-router-dom'
import "./App.css";
import routes from './routes'

function App() {

  return (
    <HashRouter>
      {routes}
    </HashRouter>
  );
}

export default App;

// { itemNavigation.mainCategory ? (<SubCategories goBackToMainCategories={goBackToMainCategories} />) : (<FourMainCategories chooseMainCategory={chooseMainCategory} />) }
// {itemNavigation.mainCategory}
