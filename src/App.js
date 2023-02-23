import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact'
import Detail from './components/Detail';

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />         
        <Route path='/detail/:id' element={<Detail />} />  
        {/* <Route path="*" element={ <div>없는페이지 입니다</div> }/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
