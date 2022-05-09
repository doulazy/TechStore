import { useState, useRef } from 'react'
import './Navbar.css'


const Navbar = () => {

    const [menuVisibility, setMenuVisibility] = useState(false)
    const ref = useRef({} as HTMLDivElement);

    const handleClick = () => {
        if (menuVisibility) {
            setMenuVisibility(false)
            // console.log(menuVisibility)
        } else {
            setMenuVisibility(true)
            //console.log(menuVisibility)
        }
    }

    if (menuVisibility === true) {
        ref.current.className = "active"

    } else {
        ref.current.className = "items"
    }


    return (
        <header className="headerContainer">
            <div className="headerSection">
                <div className="Logo">OneTech</div>
                <div className="searchBar">
                    <input type="text" name="" id="" placeholder="Search for more products..." />
                    <select className="dropdown" value="dropdown">
                        <option value="categories" disabled selected>All Categories</option>
                        <option value="Computers" >Computers</option>
                        <option value="SmartPhones" >SmartPhones</option>
                        <option value="Cameras" >Cameras</option>
                        <option value="Hardware" >Hardware</option>
                    </select>
                    <button><i className="fa fa-search"></i></button>
                </div>
                <div className="cartWishList">
                    <div className="cart">
                        <i className="fa fa-cart-shopping icon"><span className="badge">5</span></i>

                        <div className="information">
                            <h4 className="title">Cart</h4>
                            <span className="cost">$18</span>
                        </div>
                    </div>
                    <div className="wishList">
                        <i className="fa fa-heart icon"><span className="badge">5</span></i>

                        <div className="information">
                            <h4 className="title">Wishlist</h4>
                            <span className="itemsNumber">18</span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="navContainer">
                    <div className="navDropMenu">
                        <div className="navDropMenuList">
                            <div className="titleContainer">
                                <h4 className="titleMenu" onClick={handleClick}><i className="fa-solid fa-bars menuIcon"></i> Categories</h4>
                            </div>
                            <div className="items" ref={ref}>
                                <div className="navDropMenuItem" style={menuVisibility ? { cursor: 'pointer' } : { cursor: 'default' }}>Hardware</div>
                                <div className="navDropMenuItem" style={menuVisibility ? { cursor: 'pointer' } : { cursor: 'default' }}>Computers</div>
                                <div className="navDropMenuItem" style={menuVisibility ? { cursor: 'pointer' } : { cursor: 'default' }}>Smart Phones</div>
                                <div className="navDropMenuItem" style={menuVisibility ? { cursor: 'pointer' } : { cursor: 'default' }}>Cameras</div>
                                <div className="navDropMenuItem" style={menuVisibility ? { cursor: 'pointer' } : { cursor: 'default' }}>Headphones</div>
                            </div>
                        </div>
                    </div>
                    <div className="navLinks">
                        <ul className="navLinksList">
                            <li className="navLink">Home</li>
                            <li className="navLink">About Us</li>
                            <li className="navLink">Search</li>
                            <li className="navLink">Contact Us</li>
                            <li className=" specialLink">Sign In</li>
                            <li className=" specialLink">Sign Up</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;