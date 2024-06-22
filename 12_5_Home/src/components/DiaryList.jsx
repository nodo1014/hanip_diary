import "./DiaryList.css"
import Button from "./Button";
import DiaryItem from "./DiaryItem";

function DiaryList({data}) {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새 글쓰기"} type={"POSITIVE"} onClick={()=>alert("으잉")}/>
      </div>
      <div className="list_wrapper">
        {data.map((item) => (
          <DiaryItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
}

export default DiaryList;
