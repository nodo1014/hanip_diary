/* eslint-disable no-unused-vars */
import {useReducer, useRef, createContext} from "react";
// import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import getEmotionImage from "./util/get-emotion-image";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-06-23").getTime(),
    emotionId : 3,
    content: "1번 일기 컨텐트",
  },
  {
    id: 2,
    createdDate: new Date("2024-06-22").getTime(),
    emotionId : 2,
    content: "2번 일기 컨텐트",
  },
  {
    id: 3,
    createdDate: new Date("2024-05-12").getTime(),
    emotionId : 5,
    content: "2번 일기 컨텐트",
  },
];
function reducer(state, action) {
  // 새로운 상태를 만드는 로직.
  switch (action.type) {
    case "CREATE":  return [action.data, ...state];

    case "UPDATE":
       return state.map((item)=>
      String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item)=>item.id !== action.id);
      
  }
  return state; //컴포넌트가 지닐 새로운 상태를 반환.
}

//TODO: useContext : 함수를 App 의 하위 모든 컴포넌트에 공급. useContext
export const DiaryStateContext = createContext(); 
export const DiaryDispatchContext = createContext(); 
// 이후, <Routes>를 <DiaryStateContext.Provider>로 감싸기

function App() {
  //FIXME:
  const [data, dispatch] = useReducer(reducer, mockData); // 
  const idRef = useRef(2);
  // dispatch : 액션을 발생시키는 "함수" dispatch({type: , data:});
  // mockData, [] : 초기값initialState.data 배열

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  }
  const onDelete = (id) => {
    dispatch({
      type:"DELETE",
      id,
    })
  }
  
  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  );
}

export default App;
