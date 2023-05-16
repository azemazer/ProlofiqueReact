import logo from './logo.svg';
import './cssreset.css';
import './style.css';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Home from './components/home';
import { createBrowserRouter } from 'react-router-dom';
import Catalog from './components/catalog';
import Portfolio from './components/portfolio';
import Commandes from './components/commandes';
import Faq from './components/faq';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav/>,
    children: [
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "catalog",
        element: <Catalog/>,
      },
      {
        path: "portfolio",
        element: <Portfolio/>,
      },
      {
        path: "commandes",
        element: <Commandes/>,
      },
      {
        path: "faq",
        element: <Faq/>,
      }
    ]
  }
])

// function App() {
//   return (
//     <>
//       <HelmetProvider>
//       <Nav></Nav>
//       <Home></Home>
//       <Footer></Footer>
//       </HelmetProvider>
//     </>
//   );
// }

export default router;