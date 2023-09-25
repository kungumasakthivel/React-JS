import {Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom'

class Header extends Component {

    render() {
        return(
        <nav>
        <div className='header'>
            
            <div>
                <h1>portfolio</h1>
            </div>
            <ul className='sub-header'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contant</Link></li>
            </ul>
            
        </div>
        </nav>
        )
    }
}

export default Header