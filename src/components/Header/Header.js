import React from 'react'
import logo from '../../logo.svg';
import './Header.css'

const Header = (props) => {
    return (
        <header className="header">
            <div className="_logobox">
                <img className="_logo" src={require('../../assests/ecom.png')} alt="logo" />
            </div>
            <div className="hOne-box">
                <h1 className="heading_big">
                    <span className="heading_1">Ecommerce</span>
                    <span className="heading_2">Take It Online</span>
                </h1>
                <a href="#" class="btn btn-white">Discover Our Products</a>
            </div>

        </header>
    )

}

export default Header