
import { FaHome, FaSadTear } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="hero">
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <FaSadTear className='center' style={{width: '100px', height: '100px', display: 'inline'}} />
                <h1 className="text-8xl font-bold mb-8">Oooops!</h1>
                <p className="text-5xl mb-8">404 - Page not found!</p>
                <Link to='/' className='btn btn-primary btn-lg'>
                    <FaHome className='mr-2' />
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound