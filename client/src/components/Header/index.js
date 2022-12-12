import { FiLogOut } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import httpClient from "../../HttpClient"
import './style.css'
import { useState, useEffect } from 'react'

export function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const resp = await httpClient.get("//localhost:5000/@me");
                setUser(resp.data);
            } catch (error) {
                console.log("Not authenticated");
            }
        })();
    }, []);

    const logoutUser = async () => {
        await httpClient.post("//localhost:5000/logout");
        window.location.reload()
    };

    var initialMessage = 'Diários Associados';

    if (user != null){
        initialMessage = `Olá, ${user.username}`;
    }
        return (
            <header className="header" >
                <div className="container" >
                    <h2>{initialMessage}</h2>
                    <div className="menu-icons" >
                        <IconContext.Provider value={{ size: '26px' }}>
                            <div>
                                <button onClick={() => logoutUser()}><FiLogOut /></button>
                            </div>
                        </IconContext.Provider>
                        <img className="img-user" src="https://consumersiteimages.trustpilot.net/business-units/4d42dbb300006400050e7f5d-198x149-1x.jpg" />
                    </div>
                </div>
            </header>
        )
}