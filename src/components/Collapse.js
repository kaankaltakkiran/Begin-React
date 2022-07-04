import React from "react";
//STATE O ANKİ DURUMU TAŞIR

//propsler başlangıç değerleri taşır
//propslar değiştirelemez
//statler değiebilir


//!ilk constrcutor çalışır
//!state ilk durum oluşur
//!ilk render metotu çalıştı
//!onclik eventi çalıştt
//!setstate triger yapıp tekrar render metodu çalışıyor 
//! güncel render gözküküyor
class Collapse extends React.Component{
  
  //sırayla yapılır bunlar
  //componenti özellikleri almak için
  constructor(){
   super(); // tüm özellikleri aldırır
   
   //STATE OLUŞTURMA false içeriği gösterme
   this.state={
    showContent:false
   }
   }
  
   showMore=()=>{
     this.setState({showContent:!this.state.showContent}) //dinamik oalrak değişiyor
   //react setstae metodu sayesinde sayfayı render ettriyor trigger yapıyor
   // !!!!! setstatten sonra render çalışıyor!!!!
   }
   //!compenent yaşam döngüsü
   //metotlar oluştdu
     componentDidMount(){
      console.log("Component oluşturuldu")
     }
       //metotlar güncelelndi
     componentDidUpdate(){
      console.log("Component update oldu")
     }


   //render olmadan hayatta olmaz
  render(){
    return (
      <div>
      <button
        className="btn btn-primary w-100" onClick={this.showMore}> {/* state için buton yaptık ve tıklama ayarladık */}
       {this.props.cardName}

      {/*  cardtitle uluşma */}
     {/*  ya bu şekilde */}
      {/*  {console.log(this.props.children.props.cardTitle)} */}   {/* //propslara erişim  */}

        {/*  ya bu şekilde */}
       {React.Children.map(this.props.children,children=>children.props.cardTitle)}

      </button>
      {
        //state true false durumu
        this.state.showContent ?(
          <div className="collapse show">

         {/*  {this.props.children}
 */}
{/*  çoçukları çekme */}
          {React.Children.map(this.props.children,children=>children)} 

            </div>
        ):null
      }
   
    </div>
  );
  } 
};

export default Collapse; //cardı exporxt etme