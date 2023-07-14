/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import * as React from 'react'

function App() {
  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [subTitle, setSubTitle] = useState(0);
  let [input, setInput] = useState('');


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

      

      {
        title.map(function(a, i){
          return (<div className='list' key={i}>
          <h4 onClick={ ()=>{ setModal(!modal); setSubTitle(i) } }>{a} 
            <span onClick={(e)=>{
              e.stopPropagation();
              let copy = [...good];
              copy[i]++;
              setGood(copy)
              }}>👍</span> {good[i]} 
          </h4>
          <p>2m 17d lunch</p>
          <button onClick={()=>{
            let copy = [...title]
            copy.splice(i, 1);
            setTitle(copy);
          }}>delete</button>
        </div>)
        })
      }

      <input onChange={(e)=>{setInput(e.target.value)}} />
      <button onClick={()=>{
        let copy = [...title]
        copy.unshift(input);
        setTitle(copy);
      }}>add</button>
      <Modal2></Modal2>

      {
        modal == true ? <Modal subTitle={subTitle} modify={()=>{
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          setTitle(copy)
        }} title={title}/> : null
      }
      
    </div>
  );
}


function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.title[props.subTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.modify}>글수정</button>
    </div>
  )
}

class Modal2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return (
      <div>안녕 {this.state.age}
        <button onClick={()=>{
          this.setState({age : 21})
        }}>button</button>
      </div>
    )
  }
}

export default App;
