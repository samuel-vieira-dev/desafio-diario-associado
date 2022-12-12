import { Header } from '../../components/Header'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import '@fortawesome/fontawesome-free/css/all.css';
import Button from '@mui/material/Button';
import httpClient from "../../HttpClient"
import { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';

function UpdatePost() {
    const [title, setTitle] = useState();
    const [hour, setHour] = useState();
    const [thumbnail, setThumbnail] = useState();
    const { id } = useParams();

    console.log(id)

    const UpdatePost = async () => {
      console.log(title, hour);
  
      try {
        const resp = await httpClient.put("//localhost:5000/update-post", {
            id,
            title,
            hour,
            thumbnail
        });
  
        console.log(resp)
        window.location.href = "/";
      } catch (error) {
        if (error.response.status !== 200) {
          alert("Erro na atualização do post");
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
                        <MDBInput wrapperClass='mb-4' label='Horário (Ex.: 15:45)' id='hour' type='text' value={hour} onChange={(e) => setHour(e.target.value)} />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol col='12'>
                        <MDBInput wrapperClass='mb-4' label='Caminho da Imagem já hospedada. (Ex.: https://aws.dominio.com/imagens/exemplo.jpg)' id='thumbnail' type='text' value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                    </MDBCol>
                </MDBRow>
                <div className="UpdatePostButton">
                    <Button variant="contained" onClick={() => UpdatePost()}>Atualizar Publicação</Button>
                </div>
            </MDBContainer>
        </div>
    )
}

export default UpdatePost;
