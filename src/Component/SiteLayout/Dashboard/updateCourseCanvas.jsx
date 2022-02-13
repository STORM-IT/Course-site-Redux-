import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { context } from '../../ContextApi/context';
import { updateCourseTable } from '../../Redux/Action/Courses';

export default function UpdateCourseCanvas() {

  const [courseId, setCourseId] = useState();
  const [titleCourse, setTitleCourse] = useState();
  const [infoCourse, setInfoCourse] = useState();
  const [priceCourse, setPrice1] = useState();
  const [imageUrlCourse, setImageUrlCourse] = useState();

  const dispatch = useDispatch();

  const { setShowCanvasUpdate, showCanvasUpdate, courseUpdate, validator, handle_validator } = useContext(context);

  useEffect(() => {
    setCourseId(courseUpdate._id)
    setTitleCourse(courseUpdate.title)
    setInfoCourse(courseUpdate.info)
    setPrice1(courseUpdate.price)
    setImageUrlCourse(courseUpdate.imageUrl)

  }, [courseUpdate]);

  const handleUpdateCourse = (event) => {

    if (validator.current.allValid()) {
      event.preventDefault();
      let course = new FormData();
      course.append("title", titleCourse)
      course.append("info", infoCourse)
      course.append("price", priceCourse)
      if (event.target.imageUrl.files[0] != undefined) {
        course.append("imageUrl", event.target.imageUrl.files[0])
      } else {

        course.append("imageUrl", imageUrlCourse)
      }
      dispatch(updateCourseTable(courseId, course))
      setShowCanvasUpdate(false)
    } else {
      validator.current.showMessages();
    }
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
            <Form.Control name='title' aria-describedby='title' value={titleCourse} onChange={(e) => { setTitleCourse(e.target.value); handle_validator("title") }} size='lg' type="text" placeholder="title course" />
            {validator.current.message("title", titleCourse, "required|min:5")} <br />
            <Form.Label ><h4>قیمت دوره</h4></Form.Label>
            <Form.Control name='price' value={priceCourse} onChange={(e) => { setPrice1(e.target.value); handle_validator("price") }} size='lg' type="te" placeholder="title course" />
            {validator.current.message("price", priceCourse, "numeric|min:0,num")} <br />
            <Form.Label><h4>انتخاب عکس دوره</h4></Form.Label>
            <Form.Control onChange={() => console.log("hi work")} name='imageUrl' aria-describedby='imageUrl' type="file" size="lg" />
            <Form.Label ><h4>توضیحات درس</h4></Form.Label>
            <Form.Control name='info' value={infoCourse} onChange={(e) => { setInfoCourse(e.target.value); handle_validator("info") }} as="textarea" aria-label="With textarea" /> <hr />
            {validator.current.message("info", infoCourse, "required|min:5")}<br />
            <Button type='submit' className='p-3 btn-success w-100' ><h4>ویرایش دوره</h4></Button>
          </Form.Group>
        </form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
