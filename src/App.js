import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Community from './pages/community';
import NavImport from './Components/NavBar/navImport';
import { Footer } from './Components/footer';
import Test from './pages/test';

function App() {
  return (
    <BrowserRouter>
      <NavImport />
      <Route path="/test" component={Test} />
      <Route path="/about" component={About} />
      <Route path="/community" component={Community} />
      <Route exact path="/" component={Home} />
      <Footer />
    </BrowserRouter>
  );

}

export default App;