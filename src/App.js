import "./App.css";
import Container from "./Components/Container";
import MainTitle from "./Components/MainTitle";
import DoingBox from "./Components/DoingBox";
import BoxTitle from "./Components/BoxTitle";
import DoneBox from "./Components/DoneBox";
import TodoBox from "./Components/TodoBox";
import ContainerOfBoxes from "./Components/ContainerOfBoxes";
import BoxTextofTodo from "./Components/BoxTextOfTodo";
import AddTaskButton from "./Components/AddTaskButton";
import InputText from "./Components/InputText";
import BoxTitleOfToDo from "./Components/BoxTitleOfToDo";
import BoxTitleOfDoing from "./Components/BoxTitleOfDoing";
import BoxTitleOfDone from "./Components/BoxTitleOfDone";
import BoxTextOfDoing from "./Components/BoxTextOfDoing";
import BoxTextOfDone from "./Components/BoxTextOfDone";
import BoxTextOfTodo from "./Components/BoxTextOfTodo";

function App() {
  return (
    <Container>
      <MainTitle>TO DO LIST MANAGEMENT SYSTEM</MainTitle>
      <ContainerOfBoxes>
        <InputText placeholder="Add your task !" />
        <AddTaskButton>Add Task +</AddTaskButton>
      </ContainerOfBoxes>
      <ContainerOfBoxes>
        <TodoBox>
          <BoxTitleOfToDo>To Do</BoxTitleOfToDo>
          <BoxTextOfTodo>Aysel lorem ipsum falan filan görevi</BoxTextOfTodo>
        </TodoBox>
        <DoingBox>
          <BoxTitleOfDoing>In Progress</BoxTitleOfDoing>
          <BoxTextOfDoing>Aysel lorem ipsum falan filan görevi</BoxTextOfDoing>
        </DoingBox>
        <DoneBox>
          <BoxTitleOfDone>Done</BoxTitleOfDone>
          <BoxTextOfDone>Aysel lorem ipsum falan filan görevi</BoxTextOfDone>
        </DoneBox>
      </ContainerOfBoxes>
    </Container>
  );
}

export default App;
