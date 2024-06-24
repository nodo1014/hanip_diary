//커스텀 hooks
// params.id 를 매개변수로 -> 스테이트 반환하는 훅.
import {useContext, useState, useEffect} from "react";
import { DiaryStateContext } from "../App";
import {useNavigate} from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext); // 스테이트 불러오기
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();
    
    useEffect(() => {
        const currentDiaryItem = data.find(
          (item)=>String(item.id) === String(id)
          );
        if(!currentDiaryItem) {
          window.alert("존재하지 않는 일기입니다. ")
          nav("/", {replace: true}); //BrowserRoute 등 컴포넌트가 마운트 되기 전, return 전에 호출.-> useNavigate
        }
        // return currentDiaryItem; // 리턴해도 저장할 곳이 없다. --> state 로 저장.
        setCurDiaryItem(currentDiaryItem);
        console.log(`Edit.jsx: useEffect() currentDiaryItem 을 현재 id Item 객체로`)
    },[id, data]);
    return curDiaryItem; // setCurDiaryItem 도 하고, curDiaryItem 도 리턴?
};

export default useDiary;
