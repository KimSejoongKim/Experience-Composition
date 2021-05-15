import React from 'react'
import {Tooltip, OverlayTrigger, Button} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import './MainChordRythm.css'
import  { ContainerTwo, Titleh1, Description, Container, Main } from './styled.js'
import Result from './Result'
import {Howl, Howler} from 'howler'
import string80 from '../sound/80_string.wav'; import string120 from '../sound/120_string.wav'; import string150 from '../sound/150_string.wav';
import brass80 from '../sound/80_brass.wav'; import brass120 from '../sound/120_brass.wav'; import brass150 from '../sound/150_brass.wav';
import both80 from '../sound/80_both.wav'; import both120 from '../sound/120_both.wav'; import both150 from '../sound/150_both.wav';

const location = 5700;

const soundstring80 = new Howl({
    src:[string80]
});
const soundstring120 = new Howl({
    src:[string120]
});
const soundstring150 = new Howl({
    src:[string150]
});

const soundbrass80 = new Howl({
    src:[brass80]
});
const soundbrass120 = new Howl({
    src:[brass120]
});
const soundbrass150 = new Howl({
    src:[brass150]
});

const soundboth80 = new Howl({
    src:[both80]
});
const soundboth120 = new Howl({
    src:[both120]
});
const soundboth150 = new Howl({
    src:[both150]
});

class RiffPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            riff:"string",
            choose:false
        }
        this.ref = React.createRef();
    }
    
    stopRiff = () => {
        Howler.stop()
    }

    playString = () => {
        
        Howler.stop()
        if (this.props.tempo == "80") {
            soundstring80.play()
        } else if (this.props.tempo == "120") {
            soundstring120.play()
        }else if (this.props.tempo == "150") {
            soundstring150.play()
        }
    }
    playBrass = () => {
        
        Howler.stop()

        if (this.props.tempo == "80") {
            soundbrass80.play()
        } else if (this.props.tempo == "120") {
            soundbrass120.play()
        }else if (this.props.tempo == "150") {
            soundbrass150.play()
        }
    }
    playBoth = () => {
        Howler.stop()

        if (this.props.tempo == "80") {
            soundboth80.play()
        } else if (this.props.tempo == "120") {
            soundboth120.play()
        }else if (this.props.tempo == "150") {
            soundboth150.play()
        }
    }

    setString = () => {
        this.setState({ riff:"string", choose:true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }
    setBrass = () => {
        this.setState({ riff:"brass", choose:true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }
    setBoth = () => {
        this.setState({ riff:"both", choose:true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }

    
    render() {
        return <Container>
            <ContainerTwo ref={this.ref}>
                <Titleh1 id="choose">덧씌울 소리를 선택하세요.</Titleh1>
                <Fade top>
                    <Description id="description">아무리 '간단한 작곡 체험'이라도 여기서 끝나버리면 아쉽죠.<br/> 지금까지는 음악에 거의 필수적인 요소들을 넣었습니다. 이제 그 위에 덧씌울 추가적인 소리를 선택해 봅시다.
                        <br/>어떤 악기로 소리를 표현할지 회색 버튼으로 먼저 미리 들어본 후 초록색 버튼을 눌러 결정하세요!
                    </Description>
                </Fade>

                <Button size="lg" variant="outline-secondary" onClick={this.stopRiff} style={{ margin: "10px" }}>미리듣기 멈추기</Button>
                <br/>
                <Button size="lg" variant="outline-secondary" onClick={this.playString} style={{ margin: "0 10px" }}>스트링<br/>듣기</Button>
                <Button size="lg" variant="outline-secondary" onClick={this.playBrass} style={{ margin: "0 10px" }}>브라스<br/>듣기</Button>
                <Button size="lg" variant="outline-secondary" onClick={this.playBoth} style={{ margin: "0 10px" }}>둘다!<br/>듣기</Button>

                <div style={{ margin: "10px" }} />
                <OverlayTrigger
                    overlay={<Tooltip>현악기, 바이올린, 첼로 등</Tooltip>}
                    placement="bottom"
                >
                    <Button size="lg" variant="success" onClick={this.setString} style={{ margin: "0 10px" }}>스트링</Button>
                </OverlayTrigger>

                <OverlayTrigger
                    overlay={<Tooltip>금관악기, 트럼펫, 색소폰 등</Tooltip>}
                    placement="bottom"
                >
                    <Button size="lg" variant="success" onClick={this.setBrass} style={{ margin: "0 10px" }}>브라스</Button>
                </OverlayTrigger>
                <Button size="lg" variant="success" onClick={this.setBoth} style={{ margin: "0 10px" }}>둘다!</Button>
            </ContainerTwo>
            <Main id="main">
                    <Result tempo={this.props.tempo} rythm={this.props.rythm} chord={this.props.chord} riff={this.state.riff}></Result>
            </Main>

        </Container>
    }
}
export default RiffPage