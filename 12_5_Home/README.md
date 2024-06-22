# npm init vite .
npm run dev

# 12-11 Home 구현하기
HOME title 부분 : 2024년6월(pivotDate) 을 state 로 저장  
new Date()
.getFullYear
.getMont() + 1
# Home 에서 useContext 로 프롭스 데이터 공급받기.


public 에 css font, image
public dir에 저장하면, import 없이 사용
      <img src={"/emotion1.png"} />
src 에 이미지? => import 후 사용.
이미지를 src 에 넣으면, vite가 빌드 최적화시 브라우저 캐싱으로 유리.
npm run build