import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'
import Artist from './components/Artist'
import News from './components/News'
import Shop from './components/Shop'
import Detail from './components/Detail';

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/artist' element={<Artist/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/shop' element={<Shop />} />          
        <Route path='/detail/:id' element={<Detail />} />  
        {/* <Route path="*" element={ <div>없는페이지 입니다</div> }/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
