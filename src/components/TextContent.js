import React , { Component } from 'react'
import {Input,Button /*,Row,Col */} from 'reactstrap'
import Searching from './search.png'

export default class TextContent extends Component{

    state = {
        textContent:''
    }

    handleSend = (e) =>{
        e.preventDefault()         
        const {textContent} = this.state
        
        this.props.onSubmit({
            textContent
        })
        this.clearForm()
        
    }

    changeState = () => (e) => (
        this.setState({ textContent : e.target.value })
    )

    clearForm = () => {
        this.setState({
            textContent:''
        })
    } 


    render(){
        const {textContent} = this.state

        return(
            <div className="contentCenter">

                        <Input 
                        type="text"
                        value={textContent}
                        placeholder="Text prediction..."
                        onChange={this.changeState()}
                        />
                            <Button 
                                type='submit'
                                color='light'
                                onClick={this.handleSend}
                            >
                                <img src={Searching}/>
                            </Button>


            </div>
        )
    }
}



