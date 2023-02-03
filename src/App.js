import "./App.css";
import Container from "./Components/Container";
import MainTitle from "./Components/MainTitle";
import DoingBox from "./Components/DoingBox";
import BoxTitle from "./Components/BoxTitle";
import DoneBox from "./Components/DoneBox";
import TodoBox from "./Components/TodoBox";
import ContainerOfBoxes from "./Components/ContainerOfBoxes";
import BoxText from "./Components/BoxText";

function App() {
  return (
    <Container>
      <MainTitle>TO DO LIST</MainTitle>
      <ContainerOfBoxes>
        <TodoBox>
          <BoxTitle>TO DO</BoxTitle>
          <BoxText>Aysel lorem ipsum falan filan görevi</BoxText>
        </TodoBox>
        <DoingBox>
          <BoxTitle>DOING</BoxTitle>
          <BoxText>Aysel lorem ipsum falan filan görevi</BoxText>
        </DoingBox>
        <DoneBox>
          <BoxTitle>DONE</BoxTitle>
          <BoxText>Aysel lorem ipsum falan filan görevi</BoxText>
        </DoneBox>
      </ContainerOfBoxes>
    </Container>
  );
}

export default App;
