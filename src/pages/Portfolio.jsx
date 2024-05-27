import React, {useState} from 'react'
import './portfolio.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { portfoliodata, imgData } from '../data/portfolio';
import { Modal } from 'react-bootstrap';

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [myImg, setMyImg] = useState(1);
  const [myData,setMyData] = useState(imgData);
  const [clickStyle1, setClickStyle1] = useState(false);
  const [clickStyle2, setClickStyle2] = useState(false);
  const [clickStyle3, setClickStyle3] = useState(false);
  const [clickStyle4, setClickStyle4] = useState(false);

  const handleCategory = (cate, num) => {
    setClickStyle1(false);
    setClickStyle2(false);
    setClickStyle3(false);
    setClickStyle4(false);

    switch(num) {
      case 1:
        setClickStyle1(true);
        break;
      
      case 2:
        setClickStyle2(true);
        break;

      case 3:
        setClickStyle3(true);
        break;

      case 4:
        setClickStyle4(true);
        break;
      
    }
    const newMydata = imgData.filter((item)=>{
      
      if(cate == 'all'){
        return imgData;
      }else{
        return item.category == cate;
      }

    });
    setMyData(newMydata);
    
  };

  const handleClose = () => {
    setShow(false);
  }

  const handleShow = (image) => {
    setMyImg(image);
    setShow(true);
  }

  return (
    <HelmetProvider>
    <div className='container p-5'>
      <Helmet>
        <meta charSet='UTF-8' />
        <title>{portfoliodata.title}</title>
        <meta name='description' content={portfoliodata.description} />
      </Helmet>
      <div className='d-flex justify-content-between'>
        <h1 className='mt-5 mb-5 bt-line border-bottom'>My PortFolio</h1>
        <div className='btn-box mb-5 mt-5'>
          <button type='button' className='btn'
          style={{backgroundColor: clickStyle1 ? "#F7DAD9" : "#D6D2C4"}} onClick={()=>handleCategory("all",1)}>
            All
          </button>
          <button type='button' className='btn ms-4' 
          style={{backgroundColor: clickStyle2 ? "#F7DAD9" : "#D6D2C4"}} onClick={()=>handleCategory("web",2)}>
            Web
          </button>
          <button type='button' className='btn ms-4' 
          style={{backgroundColor: clickStyle3 ? "#F7DAD9" : "#D6D2C4"}} onClick={()=>handleCategory("app",3)}>
            App
          </button>
          <button type='button' className='btn ms-4' 
          style={{backgroundColor: clickStyle4 ? "#F7DAD9" : "#D6D2C4"}} onClick={()=>handleCategory("design",4)}>
            Design
          </button>
        </div>
      </div>
      
      <div className='row'>
      {
       
        myData.map((item,index)=>{        
            return(
              <div key={index} className='col-6 col-lg-3 portfolio-img'>
                <img src={`https://picsum.photos/id/${item.img}/400/300`} 
                className='img-fluid img-thumbnail mb-5' onClick={()=>handleShow(item.img)}/>                
              </div>              
            )        
        })
      }
      </div> 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3 style={{color:"#000"}}>포트폴리오 설명</h3>
        </Modal.Header>
        <Modal.Body>
          <img src={`https://picsum.photos/id/${myImg}/600/400`} className="img-fluid"/>
        </Modal.Body>
      </Modal>
    </div>
    </HelmetProvider>
  )
}

export default Portfolio