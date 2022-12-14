import styled from "styled-components";

export const Movie = styled.li`
    
    display: flex;
    flex-direction: column;
    align-items: center;
        

    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        text-align: center;
    }
    
    a:hover {
        transform: scale(1.1);
        transition: all 0.3s;
        cursor: pointer;
    }`