import styled from  "styled-components"

const  Div = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background-image: radial-gradient(circle at 50% 50%, #787874 0, #505467 25%, #1f3259 50%, #00154b 75%, #00003e 100%);
    .form{


    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    border: 3px solid white;
    overflow: hidden;
    background: white;
    img{
        max-width:450px;
        overflow:hidden;
    }

    form{
        display:flex;
        align-items: center;
        flex-direction: column;
        margin: 0 25px;
        margin-left: 40px;
        label{
            margin-top: 15px;
            span{
                color: #1e4be0;
                cursor: pointer;
            }
        }
        p{
            font-size: 12px;
            margin-top: 12px auto;
            color: red;
        }
        img{
           max-width: 100px;
           overflow:hidden;
           border-radius: 15px;
           margin-bottom: 35px;
           box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

        }
        input{
            width: 100%;
            padding: 15px 0 7px 0;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
            outline: none;
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
}
`

export default Div