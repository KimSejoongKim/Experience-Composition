import React from 'react'
import './firstPage.css'
import { Button } from 'react-bootstrap';
import SetTempoPage from './SetTempoPage'
import {Howl,Howler} from 'howler'
import {Titleh1} from './styled'


// var location = window.innerHeight * 2;

class FirstPage extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            start : false,
        }
        this.ref = React.createRef()
    }

    startCompose = () => { 
        this.setState({ start:true }) 
        window.scrollTo({top:this.ref.current.clientHeight, behavior:"smooth"});

        Howler.volume(0.6);
    }

    componentDidMount(){

    }

    render(){
        return <div className={this.state.start ? "container_background" : ""} >

            <div ref={this.ref}  className="container">

                <Titleh1>간단한 작곡 체험</Titleh1>
                <Button variant="outline-primary" size="lg" onClick={this.startCompose}>시작하기</Button>
            </div>
            <div id="main">
                <SetTempoPage></SetTempoPage>
            </div>
            {/* <div id="volume_div">
                <h4>볼륨 조절</h4>
                <Button size="lg" variant="outline-info" onClick={this.state.volume > 0.1 ? this.setState({volume : this.state.volume -= 0.1})  : <></>}>-</Button>
                <Button size="lg" variant="outline-info" onClick={this.state.volume < 0.9 ? this.setState({volume : this.state.volume += 0.1})  : <></>}>+</Button>
            </div> */}
        </div>
    }
}

export default FirstPage