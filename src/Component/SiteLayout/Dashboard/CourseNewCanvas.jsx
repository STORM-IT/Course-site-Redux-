import React, { useContext, useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { context } from '../../ContextApi/context';
import { createNewCourse } from '../../Redux/Action/Courses';


export default function CourseNewCanvas() {
    const [show, setShow] = useState(true);

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [info, setInfo] = useState();

    const { validator , setShowCanvasCreate } = useContext(context);

    const dispatch = useDispatch();

    const handle_create_course = (event) => {
        event.preventDefault();
        if(validator.current.allValid()){

            try {
                debugger
                let data = new FormData();
                data.append("title", title);
                data.append("price", Number.parseInt(price));
                data.append("imageUrl", event.target.imageUrl.files[0]);
                data.append("info", info);
    
                //Dispatch
                dispatch(createNewCourse(data));
                setShowCanvasCreate(false);
    
            } catch (ex) {
                console.log(ex);
            }
        }else{
            validator.current.showMessages();
        }
    };
    const handle_validator=(nameInput)=>{
        validator.current.showMessageFor(nameInput)
    }

    return (
        <Offcanvas show={show} onHide={() => setShow(false)} placement="end" scroll={false} backdrop={false}>
            <Offcanvas.Header onClick={() => setShowCanvasCreate(false)} closeButton>
                <Offcanvas.Title><h2>ساخت دوره جدید</h2></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <form action="" onSubmit={(e) => handle_create_course(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label ><h4>نام دوره</h4></Form.Label>
                        <Form.Control name='title'  onChange={(e) => {setTitle(e.target.value); handle_validator("title")}} size='lg' type="text" placeholder="title course" />
                        {validator.current.message("title",title,"required|min:5")} <br />
                        <Form.Label ><h4>قیمت دوره</h4></Form.Label>
                        <Form.Control name='price'  onChange={(e) => {setPrice(e.target.value); handle_validator("price")}} size='lg' type="te" placeholder="title course" /> 
                        {validator.current.message("price",price,"numeric|min:0,num")} <br />
                        <Form.Label><h4>انتخاب عکس دوره</h4></Form.Label>
                        <Form.Control name='imageUrl' aria-describedby='imageUrl' type="file" size="lg" />
                        <Form.Label ><h4>توضیحات درس</h4></Form.Label>
                        <Form.Control name='info' onChange={(e) => {setInfo(e.target.value); handle_validator("info")}} as="textarea" aria-label="With textarea" /> <hr />
                        {validator.current.message("info",info,"required|min:5")} <br />
                        <Button type='submit' className='p-3 btn-success w-100' ><h4>ساخت دوره</h4></Button>
                    </Form.Group>
                </form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

