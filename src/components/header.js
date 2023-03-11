import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container">
            <header >
                <Link to='/' className="header">The daily news</Link>
            </header>
            <hr />
            <div className="item-container">
                <Link to='/' className='header-item'>Home</Link>
                <Link to='/Contact' className='header-item'>Contact</Link>
            </div>
        </div>
    )
}

export default Header