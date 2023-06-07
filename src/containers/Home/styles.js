import styled from 'styled-components'

export const Background = styled.div`

    background-image: url( ${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display:flex;
    align-items:center;
    justify-content: center;

    &::before{
        content: '';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:110%;
        background-color: rgba(0, 0, 0, 0.5   );
    }

`
export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    height: 500px;
    max-width:1100px;
`

export const Info = styled.div`
    z-index:2; 
    padding: 50 px;
    width:55%;

    h1{
        font-size: 50px;
        font-weight: 600;
        margin-top:50px;
        color: #ffffff;
        }
    p{
        font-size:14px;
        font-weight: 700;
        color:#ffffff;
        margin-top:15px;
        margin-bottom:20px;
    }    
`

export const Quadro = styled.div`
    z-index:1;
    img{
        width:280px;
        border-radius:30px;
        margin-top:25px;
    }

`
export const ContainerButtons = styled.div`
    display:flex;
    gap:20px;
    margin-top:30px;
`
