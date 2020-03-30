import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import Logo from '../myLogo.svg'
import './Header.css';

export default class Header extends Component{

    constructor() {
        super();
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
      
      showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
          
        }
      }

    render() {
        return(
            <React.Fragment>
                <div className="topnav">
                    <div className='nav-level-1'>
                        {/* <NavLink to="/" exact activeClassName="active"><img src={Logo} alt="Home Page"/></NavLink> */}
                        <NavLink to="/" exact activeClassName="active" aria-label="Home Page">Home</NavLink>
                    </div>
                    <div className="dropdown">
                        <div className='nav-level-1'>
                            <NavLink onClick={this.showMenu} to="/codesnippets" exact activeClassName="active" aria-label="Code Snippets | Dropdown menu">Code Snippets</NavLink>
                        </div>
                        {
                            this.state.showMenu
                                ? (
                                <div
                                    className="dropdown-content"
                                    ref={(element) => {
                                    this.dropdownMenu = element;
                                    }}
                                >
                                    <NavLink to="/codesnippets/HTML">HTML</NavLink>
                                    <NavLink to="/codesnippets/React">React.js</NavLink>
                                </div>
                                )
                                : (
                                null
                                )
                        }
                    </div>
                    <div className='nav-level-1'>
                        <NavLink to="/bestpractices" exact activeClassName="active">Best Practices</NavLink>
                    </div>
                    <div className='nav-level-1'>
                        <NavLink to="/colorpalettes" exact activeClassName="active">Color Palettes</NavLink>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
