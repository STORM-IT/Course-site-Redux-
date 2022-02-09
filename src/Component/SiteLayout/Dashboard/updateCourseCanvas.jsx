import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { context } from '../../ContextApi/context';
import { updateCourseTable } from '../../Redux/Action/Courses';

export default function UpdateCourseCanvas() {
   
    const dispatch=useDispatch();
    const {setShowCanvasUpdate,showCanvasUpdate,courseUpdate} = useContext(context);

  


    const [courseId,setCourseId] =useState();
    const [titleCourse,setTitleCourse] =useState();
    // const [show,setShow] =useState(true);
    const [infoCourse,setInfoCourse] =useState();
    const [priceCourse,setPrice1] =useState();
    const [imageUrlCourse,setImageUrlCourse] =useState();
    

    useEffect(() => {
      setCourseId(courseUpdate._id)
      setTitleCourse(courseUpdate.title)
      setInfoCourse(courseUpdate.info)
      setPrice1(courseUpdate.price)
      setImageUrlCourse(courseUpdate.imageUrl)

    }, [courseUpdate]);
    
    const handleUpdateCourse=(event)=>{
      debugger
        event.preventDefault();
        let course=new FormData();
        course.append("title",titleCourse)
        course.append("info",infoCourse)
        course.append("price",priceCourse)
        if(event.target.imageUrl.file==undefined){
          course.append("imageUrl" , event.target.imageUrl.file[0])
        }else{
          course.append("imageUrl" , imageUrlCourse)
        }
        dispatch(updateCourseTable(courseId,course))
        setShowCanvasUpdate(false)
    }


  return (
    <Offcanvas show={showCanvasUpdate} onHide={() => setShowCanvasUpdate(false)} placement="end" scroll={false} backdrop={false}>
    <Offcanvas.Header onClick={() => setShowCanvasUpdate(false)} closeButton>
        <Offcanvas.Title><h2>ساخت دوره جدید</h2></Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <form action="" onSubmit={(e) => handleUpdateCourse(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label ><h4>نام دوره</h4></Form.Label>
                <Form.Control name='title' aria-describedby='title' value={titleCourse}  onChange={(e) => setTitleCourse(e.target.value)} size='lg' type="text" placeholder="title course" /> <br />
                <Form.Label ><h4>قیمت دوره</h4></Form.Label>
                <Form.Control name='price' value={priceCourse}  onChange={(e) => setPrice1(e.target.value)} size='lg' type="te" placeholder="title course" /> <br />
                <Form.Label><h4>انتخاب عکس دوره</h4></Form.Label>
                <Form.Control name='imageUrl'  aria-describedby='imageUrl' type="file" size="lg" /><br />
                <Form.Label ><h4>توضیحات درس</h4></Form.Label>
                <Form.Control name='info' value={infoCourse}  onChange={(e) => setInfoCourse(e.target.value)} as="textarea" aria-label="With textarea" /> <hr />
                <Button type='submit' className='p-3 btn-success w-100' ><h4>ساخت دوره</h4></Button>
            </Form.Group>
        </form>
    </Offcanvas.Body>
</Offcanvas>
  );
}
