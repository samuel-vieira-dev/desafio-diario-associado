import { Header } from '../../components/Header'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from '@mui/material/Button';
import httpClient from "../../HttpClient"
import { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';

function CreatePost() {
    const [title, setTitle] = useState();
    const [hour, setHour] = useState();
    const [thumbnail, setThumbnail] = useState();

    const createPost = async () => {
      console.log(title, hour);
  
      try {
        const resp = await httpClient.post("//localhost:5000/create-post", {
            title,
            hour,
            thumbnail
        });
  
        console.log(resp)
        window.location.href = "/";
      } catch (error) {
        if (error.response.status === 401) {
          alert("Erro na criação do post");
        }
      }
    };

    return (
        <div className='app'>
            <Header />

            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <br></br>
            <br></br>
                <MDBRow>
                    <MDBCol col='6'>
                        <MDBInput wrapperClass='mb-4' label='Título da Publicação' id='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </MDBCol>

                    <MDBCol col='6'>
                        <MDBInput wrapperClass='mb-4' label='Horário' id='hour' type='text' value={hour} onChange={(e) => setHour(e.target.value)} />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol col='12'>
                        <MDBInput wrapperClass='mb-4' label='Caminho da Imagem já hospedada. (Ex.: https://aws.dominio.com/imagens/exemplo.jpg)' id='thumbnail' type='text' value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                    </MDBCol>
                </MDBRow>
                <div className="createPostButton">
                    <Button variant="contained" onClick={() => createPost()}>Criar Publicação</Button>
                </div>
            </MDBContainer>
        </div>
    )
}

export default CreatePost;
