import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/parts/Header';
import Converter from './components/pages/Converter';
import Rates from './components/pages/Rates';
import spinner from './assets/spinner.svg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRates } from './store/ratesDataReducer';
import ErrorPage from './components/pages/ErrorPage';
import {Wrapper, Content, SpinnerImg} from './components/styles/App';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRates())
  }, []);

  const { state } = useSelector(state => state.ratesData);
    return (
         <BrowserRouter>
        <Wrapper>
          <Header />
          <Content>
            {
              state !== 'pending'  ?  (
                state === 'fulfilled' ? (
                  <Routes>
                    <Route path={'/'} element={<Converter />} />
                    <Route path={'/rates'} element={<Rates />} />
                  </Routes>
                ) : (
                  <ErrorPage />
                )
              
              ) : (
                <SpinnerImg src={spinner} alt="" />
              )
            }
          </Content>
        </Wrapper>
      </BrowserRouter>
    )
  }
 
export default App;
