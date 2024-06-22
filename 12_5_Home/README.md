# npm init vite .
npm run dev

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

const getMonthlyData = (pivotDate, data) => {
.........
  return data.filter((item)=>item.createdDate >= beginTime && item.createdDate <= endTime)
}

const Home = () => {
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