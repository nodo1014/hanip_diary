import "./Viewer.css";
import getEmotionImage from "../util/get-emotion-image";
import {emotionList} from "../util/constants";

const Viewer = () => {
const emotionId = 5;
console.log(emotionList);
const emotionItem = emotionList.find(
    (item)=>String(item.emotionId)===String(emotionId)
)

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div
         className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}
         >
            <img src={getEmotionImage(emotionId)} />
            <div>{emotionItem.emotionName}</div>
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
            <p>일기 ...</p>
        </div>
      </section>

    </div>
  );
};

export default Viewer;