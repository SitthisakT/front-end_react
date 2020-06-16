import React , {Component} from 'react'
import {Label,Input,Button} from 'reactstrap'

export default class TextFile extends Component{

    state = {
        selectedFile: '',
    }

    onChangeHandler = (e) => {
        // this.setState({
        //     selectedFile: event.target.files[0],
        // })
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
            this.setState({
                selectedFile: e.target.result,
            })
        };
        reader.readAsText(e.target.files[0])
    }

    handleSend = (e) => {

        e.preventDefault()  // don't have event default

        const {selectedFile} = this.state

        this.props.onSubmit({
            selectedFile
        })
    }


    render(){
        return(
            <div>
                <Label for="exampleFile"><h4>File</h4></Label>
                <br/><br/>
                <Input 
                    type="file" 
                    name="file"
                    id="exampleFile" 
                    onChange={this.onChangeHandler}
                />
                <br/><br/>
                <Button type="submit" color='primary' onClick={this.handleSend}>Upload</Button>
            </div>
        )
    }
} 
    

