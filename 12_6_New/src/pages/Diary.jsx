import { useParams, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

import useDiary from "../hooks/useDiary";
import getStringedDate from "../util/getStringedDate";


const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id); 
if (!curDiaryItem) {
  return <div>데이터 로딩중...!</div>
}
 const title = getStringedDate(new Date(curDiaryItem.createdDate));
return (
  <div>
    <Header title={`${title}`}
     leftChild={<Button text={"< 뒤로"} onClick={()=>nav(-1)} />}
     rightChild={<Button text={"수정"} />}
    />
    <Viewer id={curDiaryItem.content}/>
  </div>
)
};
export default Diary;
