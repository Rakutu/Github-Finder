import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import About from '../../Pages/About';
import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import { fetchUsers } from '../../Store/reducers/actionAsync.js';

function Content() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default Content