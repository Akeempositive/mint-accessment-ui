
import React, { Component } from 'react';
import {USER} from '../constants'
import {
    Link,
    Redirect,
  } from "react-router-dom";

class Header extends Component  {
    constructor(props) {
        super(props);
        this.state ={
            user : {userName : 'User'}
        }

    }

    onSubmitExperience = (e) => {
        e.preventDefault();
    }

    componentDidMount = ()=>{
    }

  render() {

    return (
        /* <!-- Header--> */
        <header id="header" class="header">

            <div class="header-menu">

                <div class="col-sm-7">
                    <a id="menuToggle" class="menutoggle pull-left"><i class="fa fa fa-tasks"></i></a>
                    <div class="header-left">
                        <button class="search-trigger"><i class="fa fa-search"></i></button>
                        <div class="form-inline">
                            <form class="search-form">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                <button class="search-close" type="submit"><i class="fa fa-close"></i></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-sm-5">
                    <div class="user-area dropdown float-right">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Header;


