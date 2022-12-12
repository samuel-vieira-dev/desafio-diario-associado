import './style.css'
import { FiX, FiEdit, FiEdit3 } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import httpClient from "../../HttpClient"

export function Post() {
    const [post, setPost] = useState([])
    const deletePost = (event, key, feed) => {
        httpClient.delete("http://127.0.0.1:5000/delete-post",
        {
            headers: {
              "Content-Type": "application/json"
            },
            data: {
              id: feed.id
            }
          }
            )
        window.location.reload()
    };

    function postToUpdate(event, key, feed){
        window.location.href = `/update-post/${feed.id}`
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/feed`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setPost(result)
            })
            .catch((err) => {
                throw new Error(err)
            })

    }, [])

    return (
        <>
            {post.map((suggestion, key) => (
                <>
                    <div className="post">
                        <header className="header-post" >
                            <div className="infos-post" >
                                <img className="img-header-post" src="https://consumersiteimages.trustpilot.net/business-units/4d42dbb300006400050e7f5d-198x149-1x.jpg" />
                                <span>{suggestion.username}</span>
                            </div>
                            <FiEdit onClick={event => postToUpdate(event, key, suggestion)} key={key} style={{color: "#1976d2", cursor: "pointer"}} />
                            <FiX onClick={event => deletePost(event, key, suggestion)} key={key} style={{ color: "red", cursor: "pointer" }} />
                        </header>
                        <div className="img-post">
                            <img src={suggestion.thumbnail} />
                        </div><div className="footer-post">
                            <div className="legend">
                                <p>
                                    <span>{suggestion.username}</span> {suggestion.title}
                                </p>
                            </div>
                            <div className="time-post">
                                <time>{suggestion.hour}h</time>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}