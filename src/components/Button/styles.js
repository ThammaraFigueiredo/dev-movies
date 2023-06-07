import styled, { css } from 'styled-components'


const buttonStyles = css`
    border: 3px solid #ffffff;
    background: transparent;
    color: #ffffff;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;

    &:hover{ 
        color:#9537d4;
        background: pink;
    }

`

export const ButtonWhite = styled.button`
 ${buttonStyles}
`

export const ButtonPink = styled.button`
  ${buttonStyles}
 background: pink;
 border: 4px solid transparent;
 box-shadow: 0px 0px 7px 8px rgb(238 130 238 / 30%);

 &:hover {
    box-shadow: 0px 0px 7px 15px rgb(238 130 238 / 30%);
    background: pink;
    color: #9537d4;
 }
`
