// import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";
// configureStore import 추가
import { configureStore } from "@reduxjs/toolkit";

// AS IS
// 1. rootReducer를 만들것이고 --> reducer들을 합칠 거야
// module 밑에 있ㅎ는 여러 파일들이 반환하는 값
// 현재: todos, counter, users 등등

// const rootReducer = combineReducers({
//   todos,
// });

// 2. 이걸 이용해서 store를 만들 것이다(main)
// const store = createStore(rootReducer);

// 3. export 해서 다른 파일에서 import할 수 있도록 한다.
// export default store;

// TO-BE
// toolkit으로 변경
const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
