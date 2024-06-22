import React from 'react'
import Button from './Button'
import getEmotionImage from '../util/get-emotion-image'
import "./DiaryItem.css"

function DiaryItem() {
    const emotionId = 5;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(1)} />
      </div>
      <div className="info_section">
        <div className='created_date'>{new Date().toLocaleDateString()}</div>
        <div className='content'>content</div>
      </div>
      <div className="button_section"><Button text={"수정"}/></div>
    </div>
  )
}

export default DiaryItem
