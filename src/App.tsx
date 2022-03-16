import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Content from './Components/Layout/Content';
import Footer from './Components/Layout/Footer';
import { createStore } from 'redux';

// const store = createStore(rootReducer)

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title='Github Finder'/>
        <main className='container mx-auto px-3'>
          <Content />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
