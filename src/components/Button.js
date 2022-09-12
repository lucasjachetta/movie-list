import styled from 'styled-components';


const Button = styled.button `
    background-color: #FF0000;
    color: #FFFFFF;
    width: 70px;
    height: 30px;
    border: none;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;

    :hover{
        background-color: #800000;
        transition: all 0.3s;
    }
`


export default Button