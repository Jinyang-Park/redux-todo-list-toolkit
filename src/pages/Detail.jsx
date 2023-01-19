import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const navigate = useNavigate();
  const paramId = useParams().id;

  const todos = useSelector((state) => state.todos);
  const filteredTodo = todos.filter((item) => item.id === paramId)[0];

  console.log(filteredTodo);
  return (
    <StyledDetailBox>
      <h3 styled={{ marginBottom: "10px" }}>입력받은 ID와 일치하는 상세보기 출력</h3>
      제목: {filteredTodo.title}
      <br />
      내용: {filteredTodo.contents}
      <br />
      완료여부: {filteredTodo.isDone.toString()}
      <br />
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        이전 페이지로
      </button>
    </StyledDetailBox>
  );
}

export default Detail;

const StyledDetailBox = styled.div`
  background-color: lavender;
  padding: 30px;
`;
