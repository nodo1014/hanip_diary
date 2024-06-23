import "./DiaryList.css"
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function DiaryList({data}) {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a,b)=>{
      if (sortType === 'oldest') {
        return Number(a.createdDate) - Number(b.createdDate)
      } else {
        return (b.createdDate) - (a.createdDate)
      }
    })
  }
  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새 글쓰기"} type={"POSITIVE"} onClick={()=>nav('/new')}/>
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
}

export default DiaryList;
