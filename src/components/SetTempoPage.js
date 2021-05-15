import React from 'react'
import {ToggleButtonGroup, ToggleButton, Tooltip, OverlayTrigger, Button} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import './SetTempoPage.css'
import DrumPage from './DrumPage'
import  { ContainerTwo, Titleh1, Description, Container, Main } from './styled.js'

const location = 2500;

class SetTempoPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            setTempo : "120",
            choose:false,
            drumShow : false
        }
        this.ref = React.createRef();
    }

    setTempo80 = () => {
        this.setState({ setTempo : "80", choose:true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }
    setTempo120 = () => {
        this.setState({ setTempo : "120", choose:true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});
    }
    setTempo150 = () => {
        this.setState({ setTempo : "150", choose:true })
        window.scrollTo({top:this.ref.current.offsetTop+ this.ref.current.clientHeight, behavior:"smooth"});       
    }

    render(){
        return <Container>
            <ContainerTwo className="setTempo_container_two" ref={this.ref}>
                <Titleh1 id="choose">곡의 템포(BPM)를 선택하세요.</Titleh1>
                <Fade top>
                    <Description id="description">곡의 템포는 전반적인 노래의 속도를 나타냅니다.<br />템포가 빠르면 빠를수록 신나고 들뜨는 느낌을 주게 됩니다.<br />
                이것은 노래의 분위기를 조성하는 데 엄청난 역할을 합니다. 각 템포에 마우스를 갖다대면 힌트를 얻을 수 있습니다.
                </Description>
                </Fade>

                <OverlayTrigger
                    overlay={<Tooltip>블루스, 알앤비, 발라드</Tooltip>}
                    placement="top"
                >
                    <Button size="lg" variant="outline-success" onClick={this.setTempo80} style={{ margin: "0 10px" }}>80</Button>
                </OverlayTrigger>

                <OverlayTrigger
                    overlay={<Tooltip>팝, Funk, 락</Tooltip>}
                    placement="top"
                >
                    <Button size="lg" variant="outline-success" onClick={this.setTempo120} style={{ margin: "0 10px" }}>120</Button>
                </OverlayTrigger>

                <OverlayTrigger
                    overlay={<Tooltip>빠른 노래, Punk Rock, 덥스텝, Drum'n'Bass</Tooltip>}
                    placement="top"
                >
                    <Button size="lg" variant="outline-success" onClick={this.setTempo150} style={{ margin: "0 10px" }}>150</Button>
                </OverlayTrigger>
            </ContainerTwo>
            <Main id="main">
                <DrumPage tempo={this.state.setTempo}></DrumPage>
            </Main>
        </Container>
    }
}

export default SetTempoPage