
import React, { Component } from 'react';

import {
    Link,
    Redirect,
  } from "react-router-dom";

class Navbar extends Component  {
    constructor(props) {
        super(props);
        this.onSubmitExperience = this.onSubmitExperience.bind(this);
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
        // <!-- Left Panel -->
        <aside id="left-panel" class="left-panel">
            <nav class="navbar navbar-expand-sm navbar-default">

                <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="./"><h5>MCS BOARD</h5></a>
                </div>

                <div id="main-menu" class="main-menu collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                            <li class="menu-item-has-children dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-laptop"></i>Actions</a>
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

export default Navbar;