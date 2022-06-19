
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { storage } from './common/uione';
import GlobalStyles from './components/GlobalStyle';
import { DefaultLayout } from './components/Layout';
import { config } from './config';
import { publicRoutes, route } from './routes';
function App() {
  storage.setConfig(config);
  return (<GlobalStyles>
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route: route, index: number) => {
            const Page = route.component;
            const Layout = route.layout === null ? Fragment :DefaultLayout;  
            return <Route key={index} path={route.path}  element={<Layout><Page/></Layout>} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  </GlobalStyles>

  )
}

export default App;
