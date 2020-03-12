import React, { Component } from 'react';
import Header from '../../partials/header';
import Navbar from '../../partials/navbar'
import {getCardDetails} from './verify-card-api'

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Modal,
    Select,
    Button,
    Row,
    Col,
    Spin,
    notification,Popconfirm,Table, Divider, Tag 
  } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
class VerifyCardPage extends Component  {
    constructor(props) {
        super(props);
        this.state={
            cardNumber : '',
            cardDetail : {}
        }
    }

    componentDidMount(){
       // this.getAllTask()
    } 

  render() {
    const bodystyle =  {
        background: "#f1f2f7",
        display: "table",
        fontFamily: "'Open Sans' sans-serif !important",
        fontSize: "16px",
        width: "100%" }

    return (
        <div style={bodystyle}>

            <div  class="right-panel ">
                {/* <!-- /header --> */}
                {/* <!-- Header--> */}

                <div class="content mt-3">
                    
                    <div class="animated fadeIn">
                        <div className="row">
                            This is where I will input
                            
                        </div>
                        <Spin spinning={this.state.isloading}>
                            
                           This is where I will get Card Information
                        </Spin>

                    </div>
                </div>
                {/* <!-- .content --> */}
            </div>
            {/* <!-- /#right-panel --> */}

            {/* <!-- Right Panel --> */}
        </div>
    );
  }
}

export default VerifyCardPage;
