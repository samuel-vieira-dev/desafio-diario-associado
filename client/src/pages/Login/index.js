import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import httpClient from "../../HttpClient"
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

export function Login() {
    const [justifyActive, setJustifyActive] = useState('tab1');;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const logInUser = async () => {
      console.log(username, password);
  
      try {
        const resp = await httpClient.post("//localhost:5000/login", {
          username,
          password,
        });
  
        console.log(resp)
        window.location.href = "/";
      } catch (error) {
        if (error.response.status === 401) {
          alert("Invalid credentials");
        }
      }
    };

    const registerUser = async () => {
      try {
        const resp = await httpClient.post("//localhost:5000/register", {
          username,
          password,
        }, {withCredentials: false});
  
        console.log(resp);
        window.location.reload()
      } catch (error) {
        if (error.response.status === 401) {
          alert("Invalid credentials");
        }
        else if(error.response.status === 409){
          alert("Esse usuário já existe.")
        }
      }
    };

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <h1>Seja Bem-vindo!</h1>
      <br></br>
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink style={{ border: "1px solid #bdbdbd" }} onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Fazer Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink style={{ border: "1px solid #bdbdbd" }} onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Criar Conta
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>

          <MDBInput wrapperClass='mb-4' label='username' id='form1' type='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='password' id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

          <MDBBtn className="mb-4 w-100" onClick={() => logInUser()}>Fazer Login</MDBBtn>

        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab2'}>            

          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Eu concordo que li e aceito os termos de uso.' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={() => registerUser()}>Criar conta</MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Login;