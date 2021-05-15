import React from 'react'
import {Tooltip, OverlayTrigger, Button} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import './MainChordRythm.css'
import  { ContainerTwo, Titleh1, Description, Container, Main } from './styled.js'
import {Howl, Howler} from 'howler'
import basic80 from '../sound/80_basic.wav'; import basic120 from '../sound/120_basic.wav'; import basic150 from '../sound/150_basic.wav';
import punk80 from '../sound/80_punk.wav'; import punk120 from '../sound/120_punk.wav'; import punk150 from '../sound/150_punk.wav';
import com80 from '../sound/80_com.wav'; import com120 from '../sound/120_com.wav'; import com150 from '../sound/150_com.wav';
import piano80 from '../sound/80_piano.wav'; import piano120 from '../sound/120_piano.wav'; import piano150 from '../sound/150_piano.wav';
import rock80 from '../sound/80_rock.wav'; import rock120 from '../sound/120_rock.wav'; import rock150 from '../sound/150_rock.wav';
import acoustic80 from '../sound/80_acoustic.wav'; import acoustic120 from '../sound/120_acoustic.wav'; import acoustic150 from '../sound/150_acoustic.wav';
import string80 from '../sound/80_string.wav'; import string120 from '../sound/120_string.wav'; import string150 from '../sound/150_string.wav';
import brass80 from '../sound/80_brass.wav'; import brass120 from '../sound/120_brass.wav'; import brass150 from '../sound/150_brass.wav';
import both80 from '../sound/80_both.wav'; import both120 from '../sound/120_both.wav'; import both150 from '../sound/150_both.wav';
import bass80 from '../sound/80_bass.wav'; import bass120 from '../sound/120_bass.wav'; import bass150 from '../sound/150_bass.wav';

const location = 6700;

const soundbass80 = new Howl({
    src:[bass80], loop:true
});
const soundbass120 = new Howl({
    src:[bass120], loop:true
});
const soundbass150 = new Howl({
    src:[bass150], loop:true
});

const soundbasic80 = new Howl({
    src:[basic80], loop:true
});
const soundbasic120 = new Howl({
    src:[basic120], loop:true
});
const soundbasic150 = new Howl({
    src:[basic150], loop:true
});

const soundpunk80 = new Howl({
    src:[punk80], loop:true
});
const soundpunk120 = new Howl({
    src:[punk120], loop:true
});
const soundpunk150 = new Howl({
    src:[punk150], loop:true
});

const soundcom80 = new Howl({
    src:[com80], loop:true
});
const soundcom120 = new Howl({
    src:[com120], loop:true
});
const soundcom150 = new Howl({
    src:[com150], loop:true
});

const soundpiano80 = new Howl({
    src:[piano80], loop:true
});
const soundpiano120 = new Howl({
    src:[piano120], loop:true
});
const soundpiano150 = new Howl({
    src:[piano150], loop:true
});

const soundrock80 = new Howl({
    src:[rock80], loop:true
});
const soundrock120 = new Howl({
    src:[rock120], loop:true
});
const soundrock150 = new Howl({
    src:[rock150], loop:true
});

const soundacoustic80 = new Howl({
    src:[acoustic80], loop:true
});
const soundacoustic120 = new Howl({
    src:[acoustic120], loop:true
});
const soundacoustic150 = new Howl({
    src:[acoustic150], loop:true
});

const soundstring80 = new Howl({
    src:[string80], loop:true
});
const soundstring120 = new Howl({
    src:[string120], loop:true
});
const soundstring150 = new Howl({
    src:[string150], loop:true
});

const soundbrass80 = new Howl({
    src:[brass80], loop:true
});
const soundbrass120 = new Howl({
    src:[brass120], loop:true
});
const soundbrass150 = new Howl({
    src:[brass150], loop:true
});

const soundboth80 = new Howl({
    src:[both80]
});
const soundboth120 = new Howl({
    src:[both120], loop:true

});
const soundboth150 = new Howl({
    src:[both150], loop:true
});

class Result extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            riff:"string",
            choose:false
        }
        this.ref = React.createRef();
    }

    
    stopMusic = () => {
        Howler.stop()
    }

    playBass = () => {
        Howler.stop()
        if (this.props.tempo == "80") { soundbass80.play() }
        if (this.props.tempo == "120") { soundbass120.play() }
        if (this.props.tempo == "150") { soundbass150.play() }
    }

    playMusic = () => {

        Howler.stop()
        if (this.props.tempo == "80") {
            soundbass80.play()

            if (this.props.rythm == "basic") {
                soundbasic80.play()
            }else if (this.props.rythm == "punk") {
                soundpunk80.play()
            } else if (this.props.rythm == "com") {
                soundcom80.play()
            }


            if (this.props.chord == "piano") {
                soundpiano80.play()
            }else if (this.props.chord == "rock") {
                soundrock80.play()
            } else if (this.props.chord == "acoustic") {
                soundacoustic80.play()
            }


            if (this.props.riff == "string") {
                soundstring80.play()
            } else if (this.props.riff == "brass") {
                soundbrass80.play()
            } else if (this.props.riff == "both") {
                soundboth80.play()
            }
        }

        if (this.props.tempo == "120") {
            soundbass120.play()

            if (this.props.rythm == "basic") {
                soundbasic120.play()
            }else if (this.props.rythm == "punk") {
                soundpunk120.play()
            } else if (this.props.rythm == "com") {
                soundcom120.play()
            }


            if (this.props.chord == "piano") {
                soundpiano120.play()
            }else if (this.props.chord == "rock") {
                soundrock120.play()
            } else if (this.props.chord == "acoustic") {
                soundacoustic120.play()
            }


            if (this.props.riff == "string") {
                soundstring120.play()
            } else if (this.props.riff == "brass") {
                soundbrass120.play()
            } else if (this.props.riff == "both") {
                soundboth120.play()
            }
        }

        if (this.props.tempo == "150") {
            soundbass150.play()

            if (this.props.rythm == "basic") {
                soundbasic150.play()
            }else if (this.props.rythm == "punk") {
                soundpunk150.play()
            } else if (this.props.rythm == "com") {
                soundcom150.play()
            }


            if (this.props.chord == "piano") {
                soundpiano150.play()
            }else if (this.props.chord == "rock") {
                soundrock150.play()
            } else if (this.props.chord == "acoustic") {
                soundacoustic150.play()
            }


            if (this.props.riff == "string") {
                soundstring150.play()
            } else if (this.props.riff == "brass") {
                soundbrass150.play()
            } else if (this.props.riff == "both") {
                soundboth150.play()
            }
        }

    }

    setString = () => {
        this.setState({ riff:"string", choose:true })
        window.scrollTo({top:this.ref.current.clientHeight, behavior:"smooth"});
    }

    
    render() {
        return <Container>
            <ContainerTwo ref={this.ref}>
                <Titleh1 id="choose">완성! 들어봅시다.</Titleh1>
                <Fade top>
                    <Description id="description">당신이 선택한 소리들로 노래가 완성되었습니다!<br/>가사나 아무말을 흥얼거리면서 멜로디를 지어보는 것도 좋겠죠.
                    </Description>
                </Fade>

                <Button size="lg" variant="outline-secondary" onClick={this.stopMusic} style={{ margin: "10px" }}>듣기 멈추기</Button>
                <br/>

                <div style={{ margin: "10px" }} />
               
                    <Button size="lg" variant="success" onClick={this.playMusic} style={{ margin: "0 10px" }}>완성된 노래 듣기</Button>
        <div style={{marginTop:"160px"}}>
            <Titleh1 id="choose">참고!</Titleh1>
                    <Description>
                        여기서는 당신이 추가한 적 없는 베이스가 최종적으로 자동 추가되었습니다.<br/>이것은 음악에는 거의 필수 요소이며, 없다면 사운드가 많이 빈 것처럼 들릴 확률이 높습니다.
                        <br/>베이스의 소리를 들어보고 싶다면 아래 회색 버튼을 눌러보세요.
                    </Description>
                    <Button size="lg" variant="outline-secondary" onClick={this.playBass} style={{ margin: "-20px" }}>베이스 재생</Button>
        </div>
            </ContainerTwo>


        </Container>
    }
}
export default Result