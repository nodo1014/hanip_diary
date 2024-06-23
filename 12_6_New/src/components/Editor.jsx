import Button from "./Button";
import EmotionItem from "./EmotionItem";
import "./Editor.css";
import { useState } from "react";

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
// input date 에 표시하기 위해서, Date객체 : (targetDate) 를 String 으로 x
const getStringedDate = (targetDate) => {
    // targetDate객체 -> "2024-12-12" String으로.
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth()+1;
    let date = targetDate.getDate();
    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }
    console.log(`getSD: ${year}-${month}-${date}`);
    return `${year}-${month}-${date}`;
}

function Editor() {
    // FIXME: 마우스 오버시, 이모션 배경색 변경! EmotionItem.jsx 에 isSelected(true/false) 프롭스 보내서, true 면, 배경색 변경 클래스 추가 
// 오늘의 날짜 input 처리하기 : Date 객체 <--> String
    const [input, setInput] = useState({
        createdDate : new Date(),
        emotionId : 3,
        content : ""
    });
    // 달력 날짜 인풋에서, 날짜를 변경하면 setInput() 으로 createdDate 저장.
    // 다목적 onChangeInput (날짜, 이모션:target생성, content)
    // FIXME: 이모션은 input 이 아니라서, target.name과 value 가 없어서, 따로 추가!
    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "createdDate") {
            value = new Date(value); // string을 date 객체로 변화.
        }

        setInput({
            ...input,
            [name] : value,
        })
    }

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 기부니. emotion</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
            onClick={() => onChangeInput({
                target : {
                    name: "emotionId",
                    value : item.emotionId,
                },
            })}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
        name="content"
        value={input.content}
        onChange={onChangeInput}
        placeholder="오늘은 어때쓔? 지금까지와 달라?"></textarea>
      </section>

      <section className="button_section">
        <Button text={"취소"} type="NEGATIVE" onClick={() => nav(-1)} />
        <Button text={"저장"} type="POSITIVE" onClick={() => alert("저장")} />
      </section>
    </div>
  );
}

export default Editor
