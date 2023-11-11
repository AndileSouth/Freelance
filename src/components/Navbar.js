import './Navbar.css'
import { Link } from 'react-router-dom';

const NAVBAR = ({ onClick }) => {

    const showMenu = () => {
        const menu = document.getElementById('menu');

        const displayStyle = window.getComputedStyle(menu).getPropertyValue('display');

        if(displayStyle === 'none') {
            menu.style.display = 'flex';
        }
    }

    return ( 
        <div className="NAVBAR">
            <div className="navbar-content row">

                <div className="brand row cursor">
                    <div className='row'>A</div>
                  <h2>Andile</h2>
                </div>
                <div className='nav-items row'>

                    <div className="nav-links row">
                    <div className="nav-item cursor">
                        <Link to={`/`}><h2 onClick={() => onClick('section1')}>
                        Projects
                        </h2> </Link>
                    </div>
                    <div className="nav-item cursor">
                        <Link to={`/`}><h2 onClick={() => onClick('section2')}>
                        Capabilities
                        </h2>  </Link>
                    </div>

                    <div className="nav-item cursor contact">
                        <Link to={`/`}><h2>
                        <span className="contact" onClick={() => window.location.href = "mailto:andilezondo555@gmail.com"}>
                            Contact
                            </span> 
                        </h2>  </Link>
                    </div>

                    </div>

                                      

                    <div className="menu-btn" onClick={showMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentcolor' height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </div>

                </div>
                
            </div>
        </div>
     );
}
 
export default NAVBAR;