import styled from "styled-components"

export const DIV = styled.div`
  
  min-height: 87.7vh;
  background: #2A3B47;
  display: flex;
  justify-content: center;
 
  .containers{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    background: #fff;
    border-radius: 10px;
  
  .container-main{
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: center;

    @media screen and (max-width: 840px) {
      max-width:95%;
    }
    @media screen and (max-width: 540px) {
      max-width:100%;
    }
    @media screen and (max-width: 1503px) {
      max-width:85%;
    }
  }}
  `

export const Torneo = styled.div`
  
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 20px;
    border-radius: 15px;
    margin: 10px;
    transition: .5s ease;
    overflow: hidden;
    max-width: 320px;
    &:hover{
        transform: scale(1.01);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    @media screen and (max-width: 420px) {
      width: 270px;
    }
  `

export const Dic = styled.div`
display:grid;
place-items: center;
width: 100%;
.botones{
  max-width: 100%;
  min-height: 50px;
  display: grid;
  place-items: center;
  margin: 20px 25px;
  grid-template-columns: repeat(auto-fit, minmax(55px,1fr));
  

  .active{
    background: red;
    transform:translateY(-5px)
  }
  button{
    width: 60px;
    height: 60px;
    margin: 5px 5px;
    border-radius:9px;
    transition: 0.5s;
    border: 1px double;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
}
`

export const Img = styled.img`
  width: 325px;
  height: 150px;
  transform: translateX(-7%) translateY(-15%);

  @media screen and (max-width: 420px) {
    width: 280px;

}
`
