import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeTodo, switchTodo } from "../modules/todos";

function TodoList({ isActive }) {
  // store에 있는 todos를 가지고 옴
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteButtonClick = (id) => {
    dispatch(removeTodo(id));
  };

  const handleSwitchButtonClick = (id) => {
    dispatch(switchTodo(id));
  };

  console.log("todos", todos);
  return (
    <StyledListBox>
      <h4>{isActive ? "해야 할 일 💦" : "완료된 것 🤞"}</h4>
      {todos
        // isDone이 true이면 isActive가 false이면 !isActive의 반대인 ture로 올라간다.
        // isDone이 false이면 isActive가 true이면 !isActive의 반대인 false로 올라간다.
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StyledTodoBox key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <button onClick={() => handleSwitchButtonClick(item.id)}>
                {isActive ? "완료" : "취소"}
              </button>
              <button onClick={() => handleDeleteButtonClick(item.id)}>
                삭제
              </button>
              <br />
              <br />
              <button
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                상세보기
              </button>
            </StyledTodoBox>
          );
        })}
    </StyledListBox>
  );
}

export default TodoList;

const StyledListBox = styled.div`
  background-color: beige;
  padding: 20px;
`;

const StyledTodoBox = styled.div`
  background-color: #f4d7ef;
  padding: 10px;
  margin: 5px;
`;
