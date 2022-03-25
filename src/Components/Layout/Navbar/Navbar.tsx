import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface NavbarPropTypes {
    title: string
}

function Navbar({ title }: NavbarPropTypes) {
  return (
    <div className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaGithub className='inline pr-2 text-3xl' />
                <Link to='//Github-Finder' className='text-lg font-bold align-middle'>{title}</Link>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to='/Github-Finder/' className='btn btn-ghost btn-sm btn-rounded'>Home</Link>
                    <Link to='/Github-Finder/about' className='btn btn-ghost btn-sm btn-rounded'>About</Link>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Navbar