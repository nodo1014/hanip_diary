import getEmotionImage from '../util/get-emotion-image'
import Button from './Button'
import "./DiaryItem.css"
import {useNavigate} from "react-router-dom";

function DiaryItem({id, emotionId, createdDate, content }) {
    // const emotionId = 5;
    const nav = useNavigate("");
    const yoil = ["일", "월", "화", "수","목","금","토"];
  return (
    <div className="DiaryItem">
      <div onClick={()=>nav(`/diary/${id}`)} className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section" onClick={()=>nav(`/diary/${id}`)}>
        <div className='created_date'>{new Date(createdDate).toLocaleDateString()}
          ({yoil[new Date(createdDate).getDay()]})
        </div>
        <div className='content'>{content}</div>
      </div>
      <div className="button_section" onClick={()=>nav(`/edit/${id}`)}><Button text={"수정하기"}/></div>
    </div>
  )
}

export default DiaryItem
