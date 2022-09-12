import styled from 'styled-components'


export const Container = styled.div`  

    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    h1{
        text-align: center;
        margin: 8rem 0;
        color: white;
    }

    button{
        margin-top: 6rem;
    }


`
export const SubContainer = styled.div`
    display: flex;
    height: 30%;
    width: 60%;
    background-color: black;
    align-items: center;
    justify-content: space-between;


    h1 {
        color: white;
    }`

export const CategoryContainer = styled.div`

    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    font-weight: bold;   
    

    img {
        height: 300px;
        width: 300px;
    }

    :hover{
        opacity: 0.5;
        transition: 0.3s;
    }



`

