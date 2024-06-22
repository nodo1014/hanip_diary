import {useState, useContext} from "react";

import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext, DiaryDispatchContext } from "../App";

// getMonthlyData 헤더의 이번 달에 해당하는 일기 글을 보여주기.
// 이번 달의 시작점과 끝점이 필요
// pivotDate: 스테이트, data : 컨텍스트 데이터
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(),1,0,0,0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1,0,23,59,59).getTime();
  console.log(beginTime, endTime);
  return data.filter((item)=>item.createdDate >= beginTime && item.createdDate <= endTime)
}

const Home = () => {
  const yoil = ["일","월","화","수","목","금","토"];
  const data = useContext(DiaryStateContext); 
  //FIXME: useContext() 개발자 도구에서 Home 컴포넌트 데이터 확인 후, 컴포넌트 밖에서 getMonthlyData 함수 작성.
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    console.log(pivotDate);
  }
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1))
  }
  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월 ${pivotDate.getDate()}일 (${yoil[pivotDate.getDay()]})`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
        rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
      />
      <DiaryList data={monthlyData}/>
    </div>
  );
};
export default Home;
