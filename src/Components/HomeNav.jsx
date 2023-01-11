import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

export const HomeNav = () => {

    const [show, setShow] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return (
        <> {
            show && 
            <nav className="nav-container">
                <h1><Link to='/' className="home">JOHNNIE.</Link></h1>
                <h2>
                    <Link to='/catalog' className='catalog'>CATALOG</Link>
                    <span className="x">x</span>
                    <a className="contact" href="mailto:johnniemassart@gmail.com">CONTACT</a>
                </h2>
            </nav>
            }
        </> 
     );
}