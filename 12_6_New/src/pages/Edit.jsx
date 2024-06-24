// edit:id 받기. useParams, react-router-dom
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import {useContext, useEffect, useState} from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
 const params = useParams();
 const nav = useNavigate();
 const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
 const data = useContext(DiaryStateContext);
 const [curDiaryItem, setCurDiaryItem] = useState();

//  useEffect(() => {}, [params.id, data]) //params.id 나 data state가 바뀐 경우 실행.
useEffect(() => {
    const currentDiaryItem = data.find(
      (item)=>String(item.id) === String(params.id)
      );
    if(!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다. ")
      nav("/", {replace: true}); //BrowserRoute 등 컴포넌트가 마운트 되기 전, return 전에 호출.-> useNavigate
    }
    // return currentDiaryItem; // 리턴해도 저장할 곳이 없다. --> state 로 저장.
    setCurDiaryItem(currentDiaryItem);
    console.log(`Edit.jsx: useEffect() currentDiaryItem 을 현재 id Item 객체로`)
},[params.id, data]);
 
 const onClickDelete = () => {
   // useContext,diaryDispatchContext, onDelete(id)
   if (window.confirm("삭제하시겠습니까")) {
     onDelete(params.id);
     nav("/", {replace: true});
    }
  }

  //TODO: 저장할 때는 data객체(createdDate)를 타임스탬프로 .getTime()
  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  //TODO: 수정할 data state 얻기. params.id 와 같은 data 를 꺼내오는 함수 getCurrentDiaryItem 함수.
  // find 를 쓰는 것이 옳다. filter는 배열.. find()는 조건에 맞는 1개(첫번째), 없으면 undefined 반환.
  /******** nav("/", ) 때문에, useEffect(()=>{},[]) 로 변환.
  const getCurrentDiaryItem = () => {
      const currentDiaryItem = data.find(
        (item)=>String(item.id) === String(params.id)
        );
      if(!currentDiaryItem) {
        window.alert("존재하지 않는 일기입니다. ")
        nav("/", {replace: true}); //BrowserRoute 등 컴포넌트가 마운트 되기 전, return 전에 호출.-> useNavigate
      }
      return currentDiaryItem;
  };
  const currentDiaryItem = getCurrentDiaryItem();
  console.log(currentDiaryItem);
  ************/

    return (
      <div>
       <Header 
        title={"일기 수정하기"}
        leftChild={<Button onClick={()=>nav(-1)} text={"뒤로 가기"} />}
        rightChild={<Button onClick={onClickDelete} text={"삭제 하기"} type={"NEGATIVE"} />}
       />

       <Editor initData={curDiaryItem} onSubmit={onSubmit} />
      </div>
    );
};
export default Edit;
