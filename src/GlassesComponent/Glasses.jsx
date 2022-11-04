import React, { Component } from "react";
import "../index.css";
export default class Glasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    };
  }

  // renderGlasses = () => {
  //   let content = [];
  //   content = this.state.mangGlasses.map((glasses, index) => {
  //     return (
  //       <div key={index} className="col-2">
  //         <a href="#">
  //           <img src={glasses.url} alt="" width={100}  />
  //         </a>
  //       </div>
  //     );
  //   });
  //   return content;
  // };
  changeGlasses= (glasses)=>{
    let imgSource =''
    let imgName =''
    let imgDesc = ''
    switch(glasses){
      case 'product1':{
        imgSource = "./glassesImage/v1.png"
        imgName = "GUCCI G8850U"
        imgDesc = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }; break;
      case 'product2':{
        imgSource = "./glassesImage/v2.png"
        imgName = "GUCCI G8759H"
        imgDesc = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }; break;
      case 'product3':{
        imgSource = "./glassesImage/v3.png"
        imgName = "DIOR D6700HQ"
        imgDesc = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }; break;
      case 'product4':{
        imgSource = "./glassesImage/v4.png"
        imgName = "DIOR D6005U"
        imgDesc = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }; break;
      case 'product5':{
        imgSource = "./glassesImage/v5.png"
        imgName = "PRADA P8750"
        imgDesc = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }; break;
      case 'product6':{
        imgSource = "./glassesImage/v6.png"
        imgName = "PRADA P9700"
        imgDesc = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }; break;
      case 'product7':{
        imgSource = "./glassesImage/v7.png"
        imgName = "FENDI F8750"
        imgDesc = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }; break;
      case 'product8':{
        imgSource = "./glassesImage/v8.png"
        imgName ="FENDI F8500"
        imgDesc = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }; break;
      case 'product9':{
        imgSource = "./glassesImage/v9.png"
        imgName = "FENDI F4300"
        imgDesc = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }; break;

    }
    this.setState({
      name: imgName,
      url: imgSource,
      desc: imgDesc
    })
      
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="card position-relative" style={{ width: "18rem" }}>
            <img src="./glassesImage/model.jpg" className="card-img-top" alt="..." />
            <img src={this.state.url} className="card-img-top position-absolute w-50 glasses" alt="..." />
            <div className="card-body bg-orange position-absolute card-body-position">
              <h4 className="text-primary">{this.state.name}</h4>
              <p className="card-text text-white">
                {this.state.desc}
              </p>
            </div>
          </div>
        </div>
        <div className="container bg-white product-margin">
          <div className="row">
            <div className="col-2">
              <a href="#" onClick={()=>this.changeGlasses('product1')}>
                <img src="./glassesImage/g1.jpg" alt="" width={100} />
              </a>
            </div>
            <div className="col-2">
              <a href="#" onClick={()=>this.changeGlasses('product2')}>
                <img src="./glassesImage/g2.jpg" alt="" width={100} />
              </a>
            </div>
            <div className="col-2">
              <a href="#" onClick={()=>this.changeGlasses('product3')}>
                <img src="./glassesImage/g3.jpg" alt="" width={100} />
              </a>
            </div>
            <div className="col-2">
              <a href="#" onClick={()=>this.changeGlasses('product4')}>
                <img src="./glassesImage/g4.jpg" alt="" width={100} />
              </a>
            </div>
            <div className="col-2">
              <a href="#" onClick={()=>this.changeGlasses('product5')}>
                <img src="./glassesImage/g5.jpg" alt="" width={100} />
              </a>
            </div>
            <div className="col-2">
              <a href="#" onClick={()=>this.changeGlasses('product6')}>
                <img src="./glassesImage/g6.jpg" alt="" width={100} />
              </a>
            </div>
            <div className="col-2">
              <a href="#" onClick={()=>this.changeGlasses('product7')}>
                <img src="./glassesImage/g7.jpg" alt="" width={100} />
              </a>
            </div>
            <div className="col-2">
              <a href="#" onClick={()=>this.changeGlasses('product8')}>
                <img src="./glassesImage/g8.jpg" alt="" width={100} />
              </a>
            </div>
            <div className="col-2">
              <a href="#" onClick={()=>this.changeGlasses('product9')}>
                <img src="./glassesImage/g9.jpg" alt="" width={100} />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
