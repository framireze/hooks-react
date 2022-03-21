import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
  
import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
export const AppRouter = () => {
    return (
        
            <Router>
                <div>
                    <NavBar />
                    <div className="container">
                    <Routes>
                        <Route path="/about" element={ <AboutScreen/> }/>
                        <Route path="/" element={ <HomeScreen/> }/>
                        <Route path="/login" element={ <LoginScreen/> }/>
                        {/* <Route  element={ <HomeScreen/> }/> */}
                        {/* Otra Forma */}
                        <Route path="*" element={<Navigate to="/" />}/>
                    </Routes>

                    </div>
                </div>
            </Router>
        
    )
}
