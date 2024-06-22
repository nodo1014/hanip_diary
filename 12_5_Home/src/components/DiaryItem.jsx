import getEmotionImage from '../util/get-emotion-image'
import Button from './Button'
import "./DiaryItem.css"

function DiaryItem({id, emotionId, createdDate, content }) {
    // const emotionId = 5;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className='created_date'>{new Date(createdDate).toLocaleDateString()}</div>
        <div className='content'>{content}</div>
      </div>
      <div className="button_section"><Button text={"수정"}/></div>
    </div>
  )
}

export default DiaryItem
