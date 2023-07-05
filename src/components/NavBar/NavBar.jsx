import { Link } from 'react-router-dom'
import * as userService from "../../utilities/users-service"
import Logo from "../Logo/Logo.svg"
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            {/* <img src={Logo} alt="logo" className='logo'></img> */}
            <Link to="/">Memes</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/orders">Cart</Link>
            {/* <Link to="/orders/new">New Order</Link> */}
            &nbsp;&nbsp;
            <div className='user-container'>
                <Link to="" onClick={handleLogOut}>
                    <img className='user-pfp' src={user.pfp ? user.pfp : 'https://i.pinimg.com/originals/51/2c/2d/512c2df42555717bad4833fb49cfd4bd.jpg'}></img>
                    <span>{user.name}</span>
                </Link>
            </div>

            {/* &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link> */}

        </nav>
    )
}