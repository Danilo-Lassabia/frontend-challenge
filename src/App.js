import { Flex } from 'aiq-design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import Providers from './providers';
import  GlobalStyle  from './styles';

function App() {
  const {t:translate} = useTranslation()
  return (<Providers>
     <GlobalStyle/>
      <Flex width='100%' minHeight='100vh'  backgroundColor='black' flexDirection='column'>
        <Header />
        <Header />
      </Flex>
  </Providers>);
}

export default App;
