# npm init vite .
npm run dev
# 원본 깃허브 소스
https://github.com/winterlood/onebite-react-v2/tree/main
# useReducer
```
function reducer(state, action) {
  // 새로운 상태를 만드는 로직.
  switch (action.type) {
    case "CREATE":  return [action.data, ...state];

    case "UPDATE":
       return state.map((item)=>
      String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item)=>String(item.id) !== String(action.id));
      
  }
  return state; //컴포넌트가 지닐 새로운 상태를 반환.
}
function App() {
  //FIXME:
  const [data, dispatch] = useReducer(reducer, mockData); // 
  const idRef = useRef(2);

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
```
# 12-11 Home 구현하기
HOME title 부분 : 2024년6월(pivotDate) 을 state 로 저장  
new Date()
.getFullYear
.getMont() + 1
# Home 에서 useContext 로 프롭스 데이터 공급받기.

## App.jsx에서
```
import {userReducer, useRef, createContext} from 'react';

export const DiaryStateContext = createContext(); 
export const DiaryDispatchContext = createContext(); 

function App() {
  //FIXME:
  const [data, dispatch] = useReducer(reducer, mockData); // (reducer, 초기값)
  const idRef = useRef(2);

```

## Home.jsx
```
import { DiaryStateContext, DiaryDispatchContext } from "../App";

  // Home 컴포넌트 밖에서 getMonthlyData 함수 작성.
const getMonthlyData = (pivotDate, data) => {
.........
  return data.filter((item)=>item.createdDate >= beginTime && item.createdDate <= endTime)
}

const Home = () => {
  const data = useContext(DiaryStateContext); // useContext 로 App컴포넌트 data 받기.
  //useContext() 개발자 도구-컴포넌트-Home 확인.
  const monthlyData = getMonthlyData(pivotDate, data);

  return
        <DiaryList data={monthlyData}/>
```

## DiaryList
```
function DiaryList({data}) {
  return (
      <div>
       {data.map((item) => (
      <DiaryItem key={item.id} {...item}/>
      ))}
      </div>
```
public 에 css font, image
public dir에 저장하면, import 없이 사용
      <img src={"/emotion1.png"} />
src 에 이미지? => import 후 사용.
이미지를 src 에 넣으면, vite가 빌드 최적화시 브라우저 캐싱으로 유리.
npm run build