import styled from "styled-components"

export const DIV = styled.div`
  display: grid;
  place-items: center;
  .container-main{
    max-width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: center;

    @media screen and (max-width: 840px) {
      max-width:95%;
    }
  }
  ` 

  export const Torneo = styled.div`
  
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 20px;
    border-radius: 15px;
    margin: 15px auto;
    transition: .5s ease;
    overflow: hidden;
    &:hover{
        transform: scale(1.01);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  `