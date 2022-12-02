import React, {useState} from 'react';
import './Login.css';
import {useNavigate} from "react-router-dom";
import users from '../../data/users.json';

function Login({toggleIsAuthenticated}) {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });

    function handleClick() {
        toggleIsAuthenticated(true);
        navigate("/Blogposts");
    }

    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.value;
        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Username:" + formState.username)
        const rightUser = users.find((user) => user.username === formState.username);
        if (rightUser != null) {
            const rightPassword = rightUser.password
            if (formState.password == rightPassword) {
                toggleIsAuthenticated(true);
                navigate("/Blogposts");
                console.log(formState);
            } else {
                console.error("Dit wachtwoord klopt niet. Neem contact op met de administratie.");
                document.getElementById("passWordIsNotRight").textContent = "Dit wachtwoord klopt niet. Neem contact op met de administratie.";
            }
        } else {
            console.error("Deze gebruikersnaam is onbekend. Neem contact op met de administratie.");
            document.getElementById("usernameDoesNotExist").textContent = "Deze gebruikersnaam is onbekend. Neem contact op met de administratie.";
        }
    }

    return (
        <>
            <div className="login">
                <h1>Login pagina</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        Gebruikersnaam:
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formState.username}
                            onChange={handleFormChange}
                        />
                        <p id="usernameDoesNotExist"></p>
                    </label>
                    <label htmlFor="password">
                        Wachtwoord:
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formState.password}
                            onChange={handleFormChange}
                        />
                        <p id="passWordIsNotRight"></p>
                    </label>
                    <button
                        type="submit"
                        id="inlog-button"
                    >
                        inloggen
                    </button>
                </form>

                <p>Druk op de onderstaande knop om je in te loggen zonder die irritante gebruikersnaam en wachtwoord te moeten invullen</p>
                <button
                    type="button"
                    id="login-button"
                    onClick={() => handleClick()}
                >inloggen zonder wachtwoord
                </button>
            </div>
        </>
    );
}

export default Login;

