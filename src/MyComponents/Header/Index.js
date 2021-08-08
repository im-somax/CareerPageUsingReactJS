import React, { Component } from 'react'
import "./style.css"
// const link="./../../Data/logo1.png";
class Header extends Component {
    render() {
        return (
            <>
                <nav className="mainRow">
                    <input type = "checkbox" id="check"/>
                    <label for = "check" class="checkbtn">
                        <i className="fas fa-bar"></i>
                    </label>
                    {/* <div className="logoImage" /> */}
                    <label className="logo">Tutor Here</label>
                    <ul className="listlinks">
                        <a href="#"><li className="linknames"> Home</li></a>
                        <a href="#"><li className="linknames"> Learners</li></a>
                        <a href="#"><li className="linknames"> CircleSpace</li></a>
                        <a href="#"><li className="linknames"> Blogs</li></a>
                        <a href="#"><li className="linknames"> About Us</li></a>
                        <a href="#"><li className="linknames"> Careers</li></a>
                        <a href="#"><li className="linknames"> .com.au</li></a>
                    </ul>
                </nav>
            </>
        )
    }
}
export default Header

