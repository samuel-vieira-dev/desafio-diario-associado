import '../Feed/styles.css'
import { Post } from '../../components/Post'
import { Header } from '../../components/Header'
import Modal from '../../components/Modal'
import Button from '@mui/material/Button';
import httpClient from "../../HttpClient"
import { useState, useEffect } from 'react';

function Feed() {
    const [user, setUser] = useState();

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

    if (user != null) {
        return (
            <div className='app'>
            <Header />
            <div className="MainGrid" >
                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <Post />
                </div>
                <div className="createPostButton">
                    <Button variant="contained" onClick={() => {window.location.href = "/create-post"}}>Criar Publicação</Button>
                </div>
            </div>
            </div>
        )
    }

        return (
            <div className='app' style={{filter: 'blur(3px)'}}>
            <Modal />
            <Header />
            <div className="MainGrid" >
                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <Post />
                </div>
                <div className="createPostButton">
                    <Button variant="contained" onClick={() => {window.location.href = "/create-post"}}>Criar Publicação</Button>
                </div>
            </div>
            </div>
        )
}

export default Feed;
