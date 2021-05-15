import styled from 'styled-components'

export const ContainerTwo = styled.div`
    height:1000px;
    margin : 0 auto;
    text-align: center;
`

export const Titleh1 = styled.h1`
    font-family: noto_bold;
    margin-bottom:100px;
`

export const Description = styled.p`
    font-size:20px;
    margin-bottom:80px;
    @media screen and (max-width: 768px){
        font-size:16px;
        margin-left:15px;
        margin-right:15px;
    }
`
export const Container = styled.div`
    padding-top:100px;
    height:max-content;
    width:100vw;
`

export const Main = styled.div`
    margin:0 auto;
    text-align: center;
    width:max-content;
    height:max-content;
`


/*
#choose{
    font-family: noto_bold;
    margin-bottom:100px;
}

#radio_drum{
    margin-top:70px;
}

#description{
    font-size:20px;
    margin-bottom:80px;
}

#setTempo_container{
    padding-top:100px;
    height:max-content;
    width:100vw;
}

.setTempo_background{
    background:rgb(223, 250, 237);
}

#main{
    margin:0 auto;
    text-align: center;
    width:max-content;
    height:max-content;
}
*/