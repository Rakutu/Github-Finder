
import { Routes, Route } from 'react-router-dom';
import About from '../../Pages/About';
import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import UserPageContainer from '../../Pages/UserPageContainer';

function Content() {

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users/:login' element={<UserPageContainer />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default Content