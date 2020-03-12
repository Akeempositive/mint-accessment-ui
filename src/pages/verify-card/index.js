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
            cardDetail : {},
            isloading : false
        }
    }

    componentDidMount(){
       // this.getAllTask()
    } 


   getCardDetails = () => {
       this.setState({isloading : true});
        getCardDetails(this.state.cardNumber)
        .then((response) =>{
            this.setState({isloading : false,cardDetail : response.data});
        }).catch((error)=>{
            this.setState({isloading : false});
            console.log('An error occured '+ console.error(error))
        })
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

            <Navbar></Navbar>
            
            <div  class="right-panel">
                <Header></Header>

                <div class="content mt-3">
                <div>Project Repositories
                    <div><a href="https://github.com/akeempositive/mint-accessment-project.git">Producer Kafka</a></div>
                    <div><a href="https://github.com/akeempositive/mint-accessment-consumer.git">Consumer Kafka</a></div>
                    <div><a href="https://github.com/akeempositive/mint-accessment-ui.git">React UI</a></div>
                </div>
                    
                    
                    <div class="animated fadeIn">
                        <div className="row">
                        <div class="col-4">
                        <label>Card Number</label>
                                        <Input
                                            size="large"
                                            name="cardNumber"
                                            width="40px"
                                            autoComplete="off"
                                            placeholder="Card Number"
                                            value={this.state.cardNumber}
                                            onChange={(e) => {
                                                this.state.cardNumber = e.target.value;
                                                this.getCardDetails();
                                            }
                                        }/>
                        </div>
                        <Spin spinning={this.state.isloading}>
                            <h3>Card Information for Card Number : {this.state.cardNumber}</h3>
                           <label>Card Retrieval Status</label><div>{this.state.cardDetail.sucess}</div>
                            {(this.state.cardDetail.success)
                            ?
                            (<span>
                                <div><label>Scheme : {this.state.cardDetail.payload.scheme}</label></div>
                                <div><label>Bank : {this.state.cardDetail.payload.bank}</label></div>
                                <div><label>Type : {this.state.cardDetail.payload.type}</label></div>
                            </span>
                            )
                            :
                            
                                (this.state.cardNumber.length)?
                                <h2 className="text-ant-btn-danger" style={{color : 'red'}}>Card Scheme is not available</h2>
                                : <h2 style={{color : 'blue'}}> Type to the card number field</h2>
                            

                        }
                    
                        </Spin>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
}

export default VerifyCardPage;
