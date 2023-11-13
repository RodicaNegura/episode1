import styled from "styled-components";


export const MainAppStyle = styled.div `
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  font-family: Arial, Helvetica, sans-serif;
`

export const AppStyleList = styled.div `
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
`

export const AppAddTaskStyle = styled.div `
  height: 30vh;
  background-color: blanchedalmond;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const AppAddTaskInputStyle = styled.input `
  height: 30px;
  width: 30rem;
  text-align: center;
  font-size: 20px;
`

export const AppAddTaskButtonStyle = styled.button `
height: 30px;
width: 10rem;
text-align: center;
align-items: center;
font-size: 20px;
background-color: brown;
color: white;
`
