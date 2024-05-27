import React, { useState } from 'react'
import './contact.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col, Alert } from 'react-bootstrap'
import { meta, contact_config } from '../data/portfolio'
import * as emailjs from 'emailjs-com'
import { FaGithubAlt } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {AiOutlinePhone} from "react-icons/ai";

const MyContact = () => {
  const [formData, setFormData] = useState({
     email: "",
     name: "",
     message: "",
     loading: false,
     show: false,
     alertmessage: "",
     variant: ""
  });

  const handleSubmit = (e) => {
     e.preventDefault();
     setFormData({ loading: true });

     const templateParams = {
      from_name : formData.email,
      user_name : formData.name,
      to_name : contact_config.ADMIN_EMAIL,
      message:formData.message
    };
  
    emailjs.send(
      contact_config.ADMIN_SERVICED,
      contact_config.ADMIN_TEMPLATE_ID,
      templateParams,
      contact_config.ADMIN_API
    ).then(
      (res) => {
        console.log(res.text);
        setFormData({
          loading:false,
          alertmessage:'전송에 성공했습니다. 곧 답변을 드리겠습니다.',
          variant:'success',
          show:true
        })
      },(error) => {
        console.log(error.text);
        setFormData({
          alertmessage:`이메일 전송에 실패했습니다. (${error.text})`,
          variant:'danger',
          show:true
        });
        document.getElementsByClassName('co-alert')[0].scrollIntoView();
      }
    )
  }
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  console.dir(formData);
  return (
    <HelmetProvider>
       <Container>
           <Helmet>
            <meta charset="UTF-8" />
            <title>{ meta.title } | Contact </title>
            <meta name="description" content={meta.description} />
           </Helmet>
           <Row>
             <Col lg="12">
              <Alert
                 variant={formData.variant}
                 className={`rounded-0 co-alert ${
                    formData.show? "d-block":"d-none"
                 }`}
                 onClose={()=>setFormData({show: false})} dismissible>
                   <p className="my-0">{formData.alertmessage}</p>
               </Alert>
             </Col> 
           </Row>
           <Row className="mb-5 mt-3 mt-md-3">
              <Col lg="8"> 
                <h1 className="display-4 mb-4">Contact Me</h1>
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
           </Row>
           <Row className="mb-5 mt-3 mt-md-3">
              <Col lg="2"></Col>
              <Col lg="8" className='text-center'>
                 <h3 className="py-4">연락을 기다립니다.</h3>
                 <address>
                   <strong><HiOutlineMail className='icon'/>  EMAIL : </strong>
                   <a href={`mailto:${contact_config.ADMIN_EMAIL}`}>{contact_config.ADMIN_EMAIL}</a>
                   <br /><br />
                   <strong><AiOutlinePhone className='icon'/>  PHOME : </strong>
                   <a href={`tel:${contact_config.ADMIN_PHONE}`}>
                       {contact_config.ADMIN_PHONE}
                   </a>
                   <br /><br/>
                   <strong><FaGithubAlt className='icon'/>  GITHUB : </strong>
                   <a href={`github:${contact_config.ADMIN_GITHUB}`}>
                       {contact_config.ADMIN_GITHUB}
                   </a>
                 </address>
                 
              </Col>
              <Col lg="2"></Col>
              </Row>              
              <Row>
              <Col lg="2"></Col>
              <Col lg="8" className="mt-4 mb-8">
                 <form className="contact_form w-100" onSubmit={handleSubmit}>
                    <Row className="align-items-center">
                       <Col lg='6' className="form-group">
                           <input type="text" placeholder="이름" className="form-control"  name="name" onChange={handleChange} value={formData.name || ""} required/>
                       </Col>
                       <Col lg='6' className="form-group">
                           <input type="email" placeholder="이메일" className="form-control"  name="email" onChange={handleChange} value={formData.email||""} required/>
                       </Col>
                       <Col lg="12" className="mt-4 form-group">
                         <textarea className="form-control" placeholder="내용" rows="5" name="message" onChange={handleChange} value={formData.message} required>
                         </textarea>                       
                       </Col>   
                       <Col lg="12" className="form-group mt-5 text-center">
                          <button className="btn btn-action" type="submit">
                          {formData.loading ? "전송중.." : "전송"}                             
                          </button>
                       </Col>                    
                    </Row>
                 </form>
              </Col>
              <Col lg="2"></Col> 
           </Row>
       </Container>
       <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  )
}

export default MyContact