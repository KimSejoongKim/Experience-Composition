import React from 'react'
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import './drumPage.css'
import MainChordRythm from './MainChordRythm'
import  { ContainerTwo, Titleh1, Description, Container, Main } from './styled.js'
import {Howl, Howler} from 'howler'
import basic80 from '../sound/80_basic.wav'; import basic120 from '../sound/120_basic.wav'; import basic150 from '../sound/150_basic.wav';
import punk80 from '../sound/80_punk.wav'; import punk120 from '../sound/120_punk.wav'; import punk150 from '../sound/150_punk.wav';
import com80 from '../sound/80_com.wav'; import com120 from '../sound/120_com.wav'; import com150 from '../sound/150_com.wav';

const location = 3700;

const soundbasic80 = new Howl({
    src:[basic80]
});
const soundbasic120 = new Howl({
    src:[basic120]
});
const soundbasic150 = new Howl({
    src:[basic150]
});

const soundpunk80 = new Howl({
    src:[punk80]
});
const soundpunk120 = new Howl({
    src:[punk120]
});
const soundpunk150 = new Howl({
    src:[punk150]
});

const soundcom80 = new Howl({
    src:[com80]
});
const soundcom120 = new Howl({
    src:[com120]
});
const soundcom150 = new Howl({
    src:[com150]
});

class DrumPage extends React.Component {

    

    constructor(props) {
        super(props)

        this.state = {
            rythm: "basic",
            tempo : this.props.tempo,
            choose: false,
            playing : false
        }
        this.ref = React.createRef();
    }

    stopRythms = () => {
        Howler.stop()    
    }

    playRythmBasic = () => {
        Howler.stop()
        if (soundbasic80.playing()) {
            soundbasic80.stop()
        }
        if (soundbasic120.playing()) {
            soundbasic120.stop()
        }
        if (soundbasic150.playing()) {
            soundbasic150.stop()
        }
        if (soundpunk80.playing()) {
            soundpunk80.stop()
        }
        if (soundpunk120.playing()) {
            soundpunk120.stop()
        }
        if (soundpunk150.playing()) {
            soundpunk150.stop()
        }
        if (soundcom80.playing()) {
            soundcom80.stop()
        }
        if (soundcom120.playing()) {
            soundcom120.stop()
        }
        if (soundcom150.playing()) {
            soundcom150.stop()
        }
        if (this.props.tempo == "80") {
            soundbasic80.play()
        } else if (this.props.tempo == "120") {
            soundbasic120.play()
        }else if (this.props.tempo == "150") {
            soundbasic150.play()
        }
    }   
    playRythmPunk = () => {
        Howler.stop()
        if (soundbasic80.playing()) {
            soundbasic80.stop()
        }
        if (soundbasic120.playing()) {
            soundbasic120.stop()
        }
        if (soundbasic150.playing()) {
            soundbasic150.stop()
        }
        if (soundpunk80.playing()) {
            soundpunk80.stop()
        }
        if (soundpunk120.playing()) {
            soundpunk120.stop()
        }
        if (soundpunk150.playing()) {
            soundpunk150.stop()
        }
        if (soundcom80.playing()) {
            soundcom80.stop()
        }
        if (soundcom120.playing()) {
            soundcom120.stop()
        }
        if (soundcom150.playing()) {
            soundcom150.stop()
        }
        if (this.props.tempo == "80") {
            soundpunk80.play()
        } else if (this.props.tempo == "120") {
            soundpunk120.play()
        }else if (this.props.tempo == "150") {
            soundpunk150.play()
        }
    }
    playRythmCom = () => {
        Howler.stop()
        if (soundbasic80.playing()) {
            soundbasic80.stop()
        }
        if (soundbasic120.playing()) {
            soundbasic120.stop()
        }
        if (soundbasic150.playing()) {
            soundbasic150.stop()
        }
        if (soundpunk80.playing()) {
            soundpunk80.stop()
        }
        if (soundpunk120.playing()) {
            soundpunk120.stop()
        }
        if (soundpunk150.playing()) {
            soundpunk150.stop()
        }
        if (soundcom80.playing()) {
            soundcom80.stop()
        }
        if (soundcom120.playing()) {
            soundcom120.stop()
        }
        if (soundcom150.playing()) {
            soundcom150.stop()
        }
        if (this.props.tempo == "80") {
            soundcom80.play()
        } else if (this.props.tempo == "120") {
            soundcom120.play()
        }else if (this.props.tempo == "150") {
            soundcom150.play()
        }
    }

    setRythmBasic = () => {
        this.setState({ rythm: "basic", choose: true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }
    setRythmPunk = () => {
        this.setState({ rythm: "punk", choose: true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }
    setRythmCom = () => {
        this.setState({ rythm: "com", choose: true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }


    render() {
        return <Container>
            <ContainerTwo ref={this.ref}>
                <Titleh1 id="choose">반복될 드럼 리듬을 선택하세요.</Titleh1>
                <Fade top>
                    <Description id="description">작곡을 하는 과정에는 여러가지 방법이 있지만 드럼리듬을 제일 처음에 결정하는 것도 일반적인 방법 중 하나입니다.<br />
                여기서는 몇 가지의 리듬을 제공합니다. 회색 버튼으로 먼저 미리 들어본 후 초록색 버튼을 눌러 결정하세요!
                </Description>
                </Fade>

                <Button size="lg" variant="outline-secondary" onClick={this.stopRythms} style={{ margin: "10px" }}>미리듣기 멈추기</Button>
                <br/>
                <Button size="lg" variant="outline-secondary" onClick={this.playRythmBasic} style={{ margin: "0 10px" }}>기본리듬<br/>미리듣기</Button>
                <Button size="lg" variant="outline-secondary" onClick={this.playRythmPunk} style={{ margin: "0 10px" }}>펑크리듬<br/>미리듣기</Button>
                <Button size="lg" variant="outline-secondary" onClick={this.playRythmCom} style={{ margin: "0 10px" }}>복잡리듬<br/>미리듣기</Button>
                

                <div style={{ margin: "10px" }} />

                <Button size="lg" variant="success" onClick={this.setRythmBasic} style={{ margin: "0 10px" }}>기본리듬</Button>
                <Button size="lg" variant="success" onClick={this.setRythmPunk} style={{ margin: "0 10px" }}>펑크리듬</Button>
                <Button size="lg" variant="success" onClick={this.setRythmCom} style={{ margin: "0 10px" }}>복잡리듬</Button>

            </ContainerTwo>
            <Main id="main">
                <MainChordRythm rythm={this.state.rythm} tempo={this.props.tempo}/>
            </Main>

        </Container>
    }
}

export default DrumPage