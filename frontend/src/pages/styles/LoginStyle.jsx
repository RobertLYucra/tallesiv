import styled from  "styled-components"

const  Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    border: 3px solid white;
    overflow: hidden;
    background: white;
    img{
        width:450px;
        overflow:hidden;
    }

    form{
        display:flex;
        align-items: center;
        flex-direction: column;
        margin: 0 25px;
        margin-left: 40px;
        input{
            width: 100%;
            padding: 15px 0 0 0;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
            outline:none;
        }
        input,button{
            margin: 10px 0px
        }
        button{
            text-align:center;
            max-width: 150px;
            margin-top: 35px;
            border-radius: 15px;
            padding:12px 30px;
            background: #67006e;
            color: white;
            cursor: pointer;
            border: 0px;
        }
    }
`

export default Div