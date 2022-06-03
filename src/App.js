import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  let post = '동성로 맛집';
  let [title, titleFix] = useState(['양식집 추천', '일식집 추천', '술집 추천']);
  let [like, likeFix] = useState(0);
  function titleButton() {
    var newTitle = [...title];
    newTitle[0] = '파스타 맛집'
    titleFix(newTitle)
  }
  function titleSort() {
    var sortTitle = [...title];
    sortTitle.sort();
    titleFix(sortTitle);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize: '16px'}}>Blog</h4>
      </div>
      <button onClick={() => {titleButton()}}>제목변경</button>
      <button onClick={() => {titleSort()}}>제목정렬</button>
      <div className="list">
        <h4>{title[0]} <span onClick={() => {likeFix(like + 1)}}>👍</span> {like} </h4>
        <p>6월 2일</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>6월 2일</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>6월 2일</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
