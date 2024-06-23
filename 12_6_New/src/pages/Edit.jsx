// edit:id 받기. useParams, react-router-dom
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import {useContext} from "react";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
 const params = useParams();
 const nav = useNavigate();
 const {onDelete} = useContext(DiaryDispatchContext);

 const onClickDelete = () => {
    // useContext,diaryDispatchContext, onDelete(id)
    onDelete(params.id);
    nav("/", {replace: true});
  }

    return (
      <div>
       {/* Edit : params:id 는 {params.id} */}
       <Header 
        title={"일기 수정하기"}
        leftChild={<Button onClick={()=>nav(-1)} text={"뒤로 가기"} />}
        rightChild={<Button onClick={onClickDelete} text={"삭제 하기"} type={"NEGATIVE"} />}
       />
       <Editor />
      </div>
    );
};
export default Edit;
