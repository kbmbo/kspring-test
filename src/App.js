/*eslint-disable*/
import React, { useState } from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import './App.scss';
import shoesData from './data.js';
import Detail from './Detail.js';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
function App() {
  let [shoes, setShoes] = useState( shoesData );
  let shoesList = shoes.map((a)=>{
    return(
      <div className="col-md-4 thumb" key={a.id}>
        <div className="img" style={{backgroundImage: "url(https://codingapple1.github.io/shop/shoes"+(a.id+1)+".jpg)"}}></div>
        <h4>{ a.title }</h4>
        <p>{ a.price }</p>
      </div>
    )
  })
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>KING spring</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div className="main"></div>
          <div className="container">
            <div className="row">
              { shoesList }
            </div>
            {/* <div className="row">
              <Card shoes={shoes[0]}></Card>
              <Card shoes={shoes[1]}></Card>
              <Card shoes={shoes[2]}></Card>
            </div> */}
            <button className="more" onClick={()=>{axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((a)=>{
              let shoesData2 = [...shoesData,...a.data]
              setShoes(shoesData2)
            })
            .catch(()=>{
              console.log('실패')
            })
            }}>더보기 +</button>
            
          </div>
        </Route>
        {/* <Route path="/detail" component={Detail} ></Route> */}
        <Route path="/detail/:id">
          <Detail shoes={shoes} setShoes={setShoes}></Detail>
        </Route>
        <Route path="/:id"><div>아무거나</div></Route>
      </Switch>
      
    </div>
  );
}
// function Card(props){
//   return(
//     <div className="col-md-4 thumb" >
//       <div className="img" style={{backgroundImage: "url("+ props.shoes.url +")"}}></div>
//       <h4>{props.shoes.tit }</h4>
//       <p>{ props.shoes.price }</p>
//     </div>
//   )
// }
export default App;
