
import { FaCode, FaArrowCircleRight } from 'react-icons/fa';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer p-5 bg-gray-700 text-primary-content footer-center gap-0">
            <a className='hover:text-neutral pb-3' href='https://github.com/Rakutu/Github-Finder'  target='_blank' rel="noreferrer">
                <FaCode style={{width: '50px', height: '50px'}}/>
                <p className='text-lg' style={{display: 'inline'}}>Go to code on the Github <FaArrowCircleRight className='mb-1' style={{display: 'inline'}}/></p>
            </a>
            <small>Copyright &copy; {year} All rights reserved</small>
        </footer>
    )
}

export default Footer