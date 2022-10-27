import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import './scss/app.scss';
import Home from './pages/Home';
import Basket from './pages/Basket';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');
  const count = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Basket />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
