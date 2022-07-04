//MÖDÜL İMPORT
import React from 'react';
import  ReactDOM  from 'react-dom';

import Card from './components/Card'; //oluşturduğumuz compenets card .import etme 


import Collapse from './components/Collapse';


//component takıp çıkarabilir
//componet hazırlama

//JSX HTML GİBİ
//js+html

//copmonet oluşturma sayfaya yazdırma
//tek bir yerde yazılmalı burda divde

  //key-value yazımı stlye de
  
  //html de class kullanımı jsx te classname olarak kulanılır
const App=()=>{

 return (
    <div className='container'>

      <div className='row'>

      <div className="card-group w-100">
        <div className='col'>

        <Collapse href='collapseExample1' cardName='Birinci Kart'>

        <Card /* cardTitle='Card Title1' */ cardText='Text2' updateTimes='1 min ago' image='https://picsum.photos/id/1/200/300' />
        </Collapse>
        </div>
        <div className='col'>
          
        <Collapse href='collapseExample2' cardName='İkinci Kart'>

        <Card cardTitle='Card Title2' cardText='Text2' updateTimes='2 min ago' image='https://picsum.photos/id/1/200/300' />
        </Collapse>
        </div>
        <div className='col'>
          
        <Collapse href='collapseExample3' cardName='Üçüncü Kart'>

        <Card cardTitle='Card Title3' cardText='Text3' updateTimes='3 min ago' image='https://picsum.photos/id/1/200/300' />
        </Collapse>
        </div>
      </div>  
  </div>      
</div>
  ); 
}



/* class App2 extends React.Component{
    render(){
         return <h1>Benim Adım Kaan</h1>;
    }
} */


//compenenti render etmek lazım
ReactDOM.render(
    <App />, 
 document.getElementById('root') //ıd index.htmlden gelio 
 //bu şekildede olur document.querySelector('#root')
);



