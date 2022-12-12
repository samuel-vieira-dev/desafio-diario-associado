import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from './pages/Feed';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import './styles/global.css'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Feed />}/>
					<Route path="/login" element={<Login />}/>
					<Route path="/create-post" element={<CreatePost />}/>
					<Route path="/update-post/:id" element={<UpdatePost />}/>
				</Routes>
			</BrowserRouter>
		</>
	);

}

export default App;
