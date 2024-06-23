import Header from "../components/Header";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import Editor from "../components/Editor";

import {useContext} from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const {onCreate} = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  const onSubmit = (input) => {
    onCreate(
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    )
  }
  return (
    <div>

      <Header
       title={"새 일기 쓰기"}
       leftChild={<Button text={"뒤로"} onClick={()=>nav(-1)}/>}
       />
      <Editor onSubmit={onSubmit} />
    </div>
  )
};
export default New;
