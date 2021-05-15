import React from 'react'
import {Tooltip, OverlayTrigger, Button} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import './MainChordRythm.css'
import  { ContainerTwo, Titleh1, Description, Container, Main } from './styled.js'
import RiffPage from './RiffPage'
import {Howl, Howler} from 'howler'
import piano80 from '../sound/80_piano.wav'; import piano120 from '../sound/120_piano.wav'; import piano150 from '../sound/150_piano.wav';
import rock80 from '../sound/80_rock.wav'; import rock120 from '../sound/120_rock.wav'; import rock150 from '../sound/150_rock.wav';
import acoustic80 from '../sound/80_acoustic.wav'; import acoustic120 from '../sound/120_acoustic.wav'; import acoustic150 from '../sound/150_acoustic.wav';

const location = 4700;

const soundpiano80 = new Howl({
    src:[piano80]
});
const soundpiano120 = new Howl({
    src:[piano120]
});
const soundpiano150 = new Howl({
    src:[piano150]
});

const soundrock80 = new Howl({
    src:[rock80]
});
const soundrock120 = new Howl({
    src:[rock120]
});
const soundrock150 = new Howl({
    src:[rock150]
});

const soundacoustic80 = new Howl({
    src:[acoustic80]
});
const soundacoustic120 = new Howl({
    src:[acoustic120]
});
const soundacoustic150 = new Howl({
    src:[acoustic150]
});

class MainChordRythm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            chord:"piano",
            choose:false
        }
        this.ref = React.createRef();
    }

    stopChords = () => {
        Howler.stop()
    }

    playPiano = () => {
        Howler.stop()
        if (soundpiano80.playing()) {
            soundpiano80.stop()
        }
        if (soundpiano120.playing()) {
            soundpiano120.stop()
        }
        if (soundpiano150.playing()) {
            soundpiano150.stop()
        }
        if (soundrock80.playing()) {
            soundrock80.stop()
        }
        if (soundrock120.playing()) {
            soundrock120.stop()
        }
        if (soundrock150.playing()) {
            soundrock150.stop()
        }
        if (soundacoustic80.playing()) {
            soundacoustic80.stop()
        }
        if (soundacoustic120.playing()) {
            soundacoustic120.stop()
        }
        if (soundacoustic150.playing()) {
            soundacoustic150.stop()
        }
        if (this.props.tempo == "80") {
            soundpiano80.play()
        } else if (this.props.tempo == "120") {
            soundpiano120.play()
        }else if (this.props.tempo == "150") {
            soundpiano150.play()
        }
    }
    playRock = () => {
        Howler.stop()
        if (soundpiano80.playing()) {
            soundpiano80.stop()
        }
        if (soundpiano120.playing()) {
            soundpiano120.stop()
        }
        if (soundpiano150.playing()) {
            soundpiano150.stop()
        }
        if (soundrock80.playing()) {
            soundrock80.stop()
        }
        if (soundrock120.playing()) {
            soundrock120.stop()
        }
        if (soundrock150.playing()) {
            soundrock150.stop()
        }
        if (soundacoustic80.playing()) {
            soundacoustic80.stop()
        }
        if (soundacoustic120.playing()) {
            soundacoustic120.stop()
        }
        if (soundacoustic150.playing()) {
            soundacoustic150.stop()
        }
        if (this.props.tempo == "80") {
            soundrock80.play()
        } else if (this.props.tempo == "120") {
            soundrock120.play()
        }else if (this.props.tempo == "150") {
            soundrock150.play()
        }
    }
    playAcoustic = () => {
        Howler.stop()
        if (soundpiano80.playing()) {
            soundpiano80.stop()
        }
        if (soundpiano120.playing()) {
            soundpiano120.stop()
        }
        if (soundpiano150.playing()) {
            soundpiano150.stop()
        }
        if (soundrock80.playing()) {
            soundrock80.stop()
        }
        if (soundrock120.playing()) {
            soundrock120.stop()
        }
        if (soundrock150.playing()) {
            soundrock150.stop()
        }
        if (soundacoustic80.playing()) {
            soundacoustic80.stop()
        }
        if (soundacoustic120.playing()) {
            soundacoustic120.stop()
        }
        if (soundacoustic150.playing()) {
            soundacoustic150.stop()
        }
        if (this.props.tempo == "80") {
            soundacoustic80.play()
        } else if (this.props.tempo == "120") {
            soundacoustic120.play()
        }else if (this.props.tempo == "150") {
            soundacoustic150.play()
        }
    }

    setPiano = () => {
        this.setState({ chord:"piano", choose:true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }
    setRock = () => {
        this.setState({ chord:"rock", choose:true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }
    setAcoustic = () => {
        this.setState({ chord:"acoustic", choose:true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }
    
    render() {
        return <Container>
            <ContainerTwo ref={this.ref}>
                <Titleh1 id="choose">코드를 연주할 악기를 선택하세요.</Titleh1>
                <Fade top>
                    <Description id="description">음악에는 코드 진행이라는 아주 중요한 요소가 있습니다. <br/>어떤 분위기와 느낌으로 노래를 이어나갈지에 대한 영역이죠.<br/>
                        여기서는 쉽고 익숙한 C - G - Am - F 코드 진행으로 노래를 만들어 보겠습니다.<br/> 어떤 악기로 코드 진행을 표현할지 회색 버튼으로 먼저 미리 들어본 후 초록색 버튼을 눌러 결정하세요!
                    </Description>
                </Fade>

                <Button size="lg" variant="outline-secondary" onClick={this.stopChords} style={{ margin: "10px" }}>미리듣기 멈추기</Button>
                <br/>
                <Button size="lg" variant="outline-secondary" onClick={this.playPiano} style={{ margin: "0 10px" }}>피아노진행<br/>미리듣기</Button>
                <Button size="lg" variant="outline-secondary" onClick={this.playRock} style={{ margin: "0 10px" }}>일렉기타 진행<br/>미리듣기</Button>
                <Button size="lg" variant="outline-secondary" onClick={this.playAcoustic} style={{ margin: "0 10px" }}>통기타 진행<br/>미리듣기</Button>

                <div style={{ margin: "10px" }} />

                <Button size="lg" variant="success" onClick={this.setPiano} style={{ margin: "0 10px" }}>피아노진행</Button>
                <Button size="lg" variant="success" onClick={this.setRock} style={{ margin: "0 10px" }}>일렉기타 진행</Button>
                <Button size="lg" variant="success" onClick={this.setAcoustic} style={{ margin: "0 10px" }}>통기타 진행</Button>

            </ContainerTwo>
            <Main id="main">
                    <RiffPage rythm={this.props.rythm} tempo={this.props.tempo} chord={this.state.chord}></RiffPage>
            </Main>

        </Container>
    }
}
export default MainChordRythm