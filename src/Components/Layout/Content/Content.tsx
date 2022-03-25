
import { Routes, Route } from 'react-router-dom';
import About from '../../Pages/About';
import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import UserPageContainer from '../../Pages/UserPageContainer';

function Content() {

  return (
    <Routes>
        <Route path='/Github-Finder/' element={<Home />} />
        <Route path='/Github-Finder/about' element={<About />} />
        <Route path='/Github-Finder/users/:login' element={<UserPageContainer />} />
        <Route path='/Github-Finder/notfound' element={<NotFound />} />
        <Route path='/Github-Finder/*' element={<NotFound />} />
    </Routes>
  )
}

export default Content