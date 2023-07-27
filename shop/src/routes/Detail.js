import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { Nav } from 'react-bootstrap'



function Detail(props) {

  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });
  let [tab, setTab] = useState(0)



  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) }, 2000)

    return ()=>{
      clearTimeout(a);
    }
  }, [])




  return (
    <div className="container">
      {
        alert == true
        ? <div className="alert alert-warning">
          2초이내 구매시 할인
          </div>
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes"+ (parseInt(id)+1) +".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}


function TabContent({tab}){

  return [<div>0</div>, <div>1</div>, <div>2</div>][tab]
}

export default Detail;