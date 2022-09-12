import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const SubContainer = styled.div`
    display: flex;
    height: 30%;
    width: 100%;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


    h1 {
        color: white;
    }

    button {
    background-color: #FF0000;
    color: #FFFFFF;
    width: 342px;
    height: 64px;
    border: none;
    font-size: 18px;
    border-radius: 8px;
    }
`