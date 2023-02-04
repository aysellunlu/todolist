import AddTaskButton from "./Components/AddTaskButton";
import BoxTextOfDoing from "./Components/BoxTextOfDoing";
import BoxTextOfDone from "./Components/BoxTextOfDone";
import BoxTextOfTodo from "./Components/BoxTextOfTodo";
import BoxTitleOfDoing from "./Components/BoxTitleOfDoing";
import BoxTitleOfDone from "./Components/BoxTitleOfDone";
import BoxTitleOfToDo from "./Components/BoxTitleOfToDo";
import Container from "./Components/Container";
import ContainerOfBoxes from "./Components/ContainerOfBoxes";
import DoingBox from "./Components/DoingBox";
import DoneBox from "./Components/DoneBox";
import InputText from "./Components/InputText";
import MainTitle from "./Components/MainTitle";
import TodoBox from "./Components/TodoBox";
import TaskDatas from "../src/Datas/taskList.json";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [taskDatas, setTaskDatas] = useState(TaskDatas);
  return (
    <Container>
      <MainTitle>TO DO LIST</MainTitle>
      <ContainerOfBoxes>
        <InputText placeholder="Add your task !" />
        <AddTaskButton>Add Task +</AddTaskButton>
      </ContainerOfBoxes>
      <ContainerOfBoxes>
        <TodoBox>
          {console.log(taskDatas)}
          <BoxTitleOfToDo>{taskDatas[0].titleName}</BoxTitleOfToDo>
          {taskDatas &&
            taskDatas[0].taskName.map((task) => (
              <BoxTextOfTodo>
                {task}
              </BoxTextOfTodo>
            ))}
        </TodoBox>
        <DoingBox>
          <BoxTitleOfDoing>{taskDatas[1].titleName}</BoxTitleOfDoing>
          {taskDatas &&
            taskDatas[1].taskName.map((task) => (
          <BoxTextOfDoing>{task}</BoxTextOfDoing>
          ))}
        </DoingBox>
        <DoneBox>
          <BoxTitleOfDone>{taskDatas[2].titleName}</BoxTitleOfDone>
          {taskDatas &&
            taskDatas[2].taskName.map((task) => (
          <BoxTextOfDone>{task}</BoxTextOfDone>
          ))}
        </DoneBox>
      </ContainerOfBoxes>
    </Container>
  );
};

export default App;
