import styled from "styled-components"


export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100vh;
    background-image: radial-gradient(circle at 50% 50%, #787874 0, #505467 25%, #1f3259 50%, #00154b 75%, #00003e 100%);
   .contenido{
    display: flex;
    border-radius: 25px;
    border: 3px solid white;
    overflow: hidden;
    background: white;

    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 25px;
        
        .entrada{
            margin : 10px auto;
            outline: none;
            border: 0;
            border-bottom: 2px solid #333;
        }
        
        .button{
            width: 65%;
            padding: 5px 10px;
            border-radius: 6px;
            border: 2px solid #67006e;
            color: #67006e;
            cursor: pointer;
            transition: 0.5s;
            margin-top: 35px;
            margin-bottom: 20px;
        }
    }

   }
`