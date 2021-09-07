/*eslint-disable*/
import { useEffect,useState } from 'react';
import {useHistory,useParams} from 'react-router-dom';
import styled from 'styled-components'
let Box = styled.div `
  padding : 20px;
  background-color:#ffe1e1;
`;
let Tit = styled.h4 `
  font-size : 25px;
  color: ${ props => props.color };
  text-align : center;
`;
let Box2 = styled.span `
  color:red;
  font-weight:600;
  padding-left: 5px;
`;

function Detail(props){
  let [show, setShow] = useState(true);
  let [input, setInput] = useState('');
  let [show2, setShow2] = useState(false);
  useEffect(()=>{
    let timer = setTimeout(()=>{
      setShow(false);
    },3000)
    return ()=>{
      clearTimeout(timer);
    }
  },[show])
  let history = useHistory();
  let {id} = useParams();
  let findDetail = props.shoes.find(a=> a.id == id);
  return(
      <div className="container">
        <input onChange={(e)=>{setInput(e.target.value)}}></input>
        { show && <Box show={show}><Tit color='red'>품절임박</Tit></Box> }
        <div className="row">
          <div className="col-md-6 thumb">
          <div className="img" style={{backgroundImage: "url(https://codingapple1.github.io/shop/shoes"+(findDetail.id+1)+".jpg)"}}></div>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{ findDetail.title }</h4>
            <p>{ findDetail.price }</p>
            <p>재고 : {findDetail.piece} {show2 && <Box2 show2={show2}>Sold Out</Box2>}</p>
            <button className="btn btn-danger" onClick={()=>{
                let setShoes2 = [...props.shoes]
                setShoes2[findDetail.id].piece > 0
                ? setShoes2[findDetail.id].piece--
                : setShow2(true)
                props.setShoes(setShoes2)
              }
            }>주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button> 
          </div>
        </div>
      </div> 
  )
}
// function Info(props){
  
//   return(
    
//   )
// }
export default Detail