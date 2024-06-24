import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  console.log(params);
return (
  <div>
    <Header title={"날짜 '일' 까지 표시"}
     leftChild={<Button text={"< 뒤로"} onClick={()=>nav(-1)} />}
     rightChild={<Button text={"수정"} />}
    />
    <Viewer />
  </div>
)
};
export default Diary;
