import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Content from './Components/Layout/Content';
import Footer from './Components/Layout/Footer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Components/Store/store';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar title='Github Finder'/>
          <main className='container mx-auto px-3'>
            <Content />
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
