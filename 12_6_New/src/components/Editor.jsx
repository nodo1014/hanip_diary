import Button from "./Button";
import EmotionItem from "./EmotionItem";
import "./Editor.css";

const emotionList = [
    {
        emotionId: 1,
        emotionName: "개좋아"
    },
    {
        emotionId: 2,
        emotionName: "쪼앙"
    },
    {
        emotionId: 3,
        emotionName: "머그래"
    },
    {
        emotionId: 4,
        emotionName: "아놔"
    },
    {
        emotionId: 5,
        emotionName: "쓋떠뻑"
    },
]

function Editor() {

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>

      <section className="emotion_section">
        <h4>오늘의 기부니. emotion</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) =>(
            <EmotionItem key={item.emotionId} {...item}/> 
            ))
            }
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea content="content">content_section</textarea>
      </section>

      <section className="button_section">
        <Button text={"취소"} type="NEGATIVE" onClick={() => nav(-1)} />
        <Button text={"저장"} type="POSITIVE" onClick={() => alert("저장")} />
      </section>
    </div>
  );
}

export default Editor
