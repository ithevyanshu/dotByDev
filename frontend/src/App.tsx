import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Layout from './components/Layout';
import Home from './components/Home';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
