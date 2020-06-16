import React , { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TextContent /*, TextFile */} from '../components'
import { BallBeat } from 'react-pure-loaders';
import { Col,Row } from 'reactstrap'
import './App.css';
import Axios from 'axios';

export default class App extends Component{
  
  state = {
    textContent : '',
    selectedFile : '',
    contentType:'',
    loading:false
  }

  

  handlerText = () =>{
    Axios({
      url: `/text`,
      method: 'POST',
      data: this.state.textContent,
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res)=>{
      this.setState({
        loading:false,
        contentType: res.data
      },function(){
        console.log(this.state.contentType)
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // handlerFile = () =>{
  //   Axios({
  //     url: `/file`,
  //     method: 'POST',
  //     data: this.state.selectedFile,
  //     headers:{
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then((res)=>{
  //     this.setState({
  //       contentType: res.data
  //     },function(){
  //       console.log(this.state.contentType)
  //     })
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // }

  setText = (text) => {
    this.setState({textContent: text,loading:true}, function () {
      this.handlerText()
      })
  }

  setFile = (file) => {
    this.setState({selectedFile: file,loading:true}, function(){
      this.handlerFile()
    })    
  }

  render(){
    const {contentType,loading} = this.state

    return(
      <div className="app"> 
        <div className="container">
          <div className="contentTopic">
            Content Prediction
          </div>
          <br/>
          <div>
            <Row className="contentCenter">
              <Col md={12}>
                <TextContent onSubmit={this.setText} />
              </Col>
            </Row>  
          </div>   
          <br/><br/>
          <div className="contentResult">
            {(!loading)&&(contentType!=='') ?<div>Prediction Result  : "{contentType}" </div> : null}

            {loading ? <div><BallBeat color={'#123abc'} loading={loading} /> </div>
              : null
            }
          </div> 
        </div>
      </div>
      
    )
  }
}

