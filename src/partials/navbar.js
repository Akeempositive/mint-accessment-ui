
import React, { Component } from 'react';

import {
    Link,
    Redirect,
  } from "react-router-dom";

class Header extends Component  {
    constructor(props) {
        super(props);
        this.onSubmitExperience = this.onSubmitExperience.bind(this);
        this.state = {
            user : null
        }
    }

    componentDidMount(){
    
    }

    onSubmitExperience = (e) => {
        e.preventDefault();
    }

    setRoute=(path)=>{
        this.setState({redirectMe: {
                status:true,
                path:`/${path}`
            }
        })
    }

  render() {
    return (
        <aside id="left-panel" class="left-panel">
            <nav class="navbar navbar-expand-sm navbar-default">

                <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="./"><h5>Mint Verify Card UI</h5></a>
                </div>

                <div id="main-menu" class="main-menu collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                            <li class="menu-item-has-children dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-laptop"></i>Menu</a>
                                <ul class="sub-menu children dropdown-menu">
                                    <li>
                                        <Link to={`/verify-card`} ><i className="fa fa-puzzle-piece"></i>Verify Card</Link>
                                    </li>
                                </ul>
                            </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
  }
}

export default Header;




