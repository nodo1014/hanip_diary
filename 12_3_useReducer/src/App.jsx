/* eslint-disable no-unused-vars */
import React, {useReducer, useState, useEffect, useRef, useContext, createContext} from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import getEmotionImage from "./util/get-emotion-image";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

// 1. "/" : Home 모든 일기 조회
// 2. "/new" : 새로운 일기
// 3. "/diary" : 상세 조
const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId : 1,
    content: "1번 일기 컨텐트",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId : 2,
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

//TODO: useContext : 함수를 App 의 하위 모든 컴포넌트에 공급할 수 있도록, useContext
const DiaryStateContext = createContext(); 
const DiaryDispatchContext = createContext(); 
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
  const nav = useNavigate();
  const onClickButton = () => nav("/new")
  
  return (
    <>
    <button onClick={()=>{onCreate(new Date().getTime(),1,"새일기에요")}}>새 일기</button>
    <button onClick={()=>{onUpdate(1,new Date().getTime(),1,"1 수정되써염")}}>onUpdate</button>
    <button onClick={()=>{onDelete(2)}}>onDelete id:0</button>


      <Header
       title={"헤더"}
       leftChild={<Button text={"Left"}/>}
       rightChild={<Button text={"right"} />}
       />
    <div>
      public dir에 저장. import 없이 사용

    </div>
    <div>
  
      <img src={getEmotionImage(1)} />
      <img src={getEmotionImage(2)} />
      <img src={getEmotionImage(3)} />
      <img src={getEmotionImage(4)} />
      <img src={getEmotionImage(5)} />

    </div>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>new</Link>
      <Link to={"/diary"}>diary</Link>
      <a href="/">a href Home</a>
    </div>
    <button onClick={onClickButton}>useNavigate</button>
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
