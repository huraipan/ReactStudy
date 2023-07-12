/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [good, setGood] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
      <div>ReactBlog</div>
      </div>
      <button onClick={()=>{
        let copy2 = [...title];
        copy2.sort();
        setTitle(copy2);
      }}>sort</button>
      <button onClick={()=>{
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle(copy)
      }}>変更</button>
      <div className='list'>
        <h4>{title[0]} <span onClick={()=>{setGood(good + 1)}}>👍</span> {good} </h4>
        <p>2m 17d lunch</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2m 17d lunch</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ 
          if(modal == true){ setModal(false) }
          else { setModal(true) }
          
           }}>{title[2]}</h4>
        <p>2m 17d lunch</p>
      </div>

      {
        modal == true ? <Modal/> : null
      }
      
    </div>
  );
}


function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
