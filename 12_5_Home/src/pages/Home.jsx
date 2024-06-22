import {useState} from "react";

import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const yoil = ["일","월","화","수","목","금","토"];
  const [pivotDate, setPivotDate] = useState(new Date());

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
      <DiaryList />
    </div>
  );
};
export default Home;
