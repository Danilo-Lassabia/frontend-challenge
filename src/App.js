import { Flex } from 'aiq-design-system';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import { CharacterDetails } from './pages/Characters/CharacterDetails';
import Providers from './providers';
import  GlobalStyle  from './styles';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Characters } from './pages/Characters/Characters';
import {Movies} from './pages/Movies/Movies'
import { MovieDetails } from './pages/Movies/MovieDetails';
import { Register } from './pages/Register/Register';


function App() {

  const [page, setPage] = useState('personagens')


  const {t:translate} = useTranslation()
  return (
    <Router>
     <Providers>
      <GlobalStyle/>
      <Flex width='100%' minHeight='100vh'  backgroundColor='black' flexDirection='column'>
        <Header/>
        <Flex mt='88px'>
          <Routes>
            <Route path='/' element={<Characters/>}/>
            <Route path='characters/:id' element={<CharacterDetails/>} />
            <Route path='movies' element={<Movies page={'filmes'}/>}/>
            <Route path='movies/:id' element={<MovieDetails/>} />
            <Route path='register' element={<Register/>}/>
          </Routes>
          </Flex>
      </Flex>
      </Providers>
     </Router>
  );
}

export default App;
