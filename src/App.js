import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Blogposts from './pages/Blogposts/Blogposts';
import Blogpost from './pages/Blogpost/Blogpost';
import Nav from './components/nav/Nav';
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Nav
                isAuthenticated={isAuthenticated}
                toggleIsAuthenticated={toggleIsAuthenticated}
            />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route
                    path="/login"
                    element=
                        {<Login
                            toggleIsAuthenticated={toggleIsAuthenticated}
                        />}
                />
                <Route
                    path="/blogposts"
                    element=
                        {<PrivateRoute isAuthenticated={isAuthenticated}>
                            <Blogposts/>
                        </PrivateRoute>
                        }
                />
                <Route
                    path="/blogpost/:id"
                    element=
                        {<PrivateRoute isAuthenticated={isAuthenticated}>
                            <Blogpost/>
                        </PrivateRoute>
                        }
                />
                <Route path="*" element={<NotFound/>}/>
            </Routes>

            <footer><p>© Ellen van Duikeren, november 2022</p></footer>

        </>
    );
}

export default App;
