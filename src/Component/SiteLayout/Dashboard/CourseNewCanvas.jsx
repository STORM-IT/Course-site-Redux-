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

    const { setShowCanvasCreate } = useContext(context);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

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
    };

    return (
        <Offcanvas show={show} onHide={() => setShow(false)} placement="end" scroll={false} backdrop={false}>
            <Offcanvas.Header onClick={() => setShowCanvasCreate(false)} closeButton>
                <Offcanvas.Title><h2>ساخت دوره جدید</h2></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label ><h4>نام دوره</h4></Form.Label>
                        <Form.Control name='title' aria-describedby='title' onChange={(e) => setTitle(e.target.value)} size='lg' type="text" placeholder="title course" /> <br />
                        <Form.Label ><h4>قیمت دوره</h4></Form.Label>
                        <Form.Control name='price'  onChange={(e) => setPrice(e.target.value)} size='lg' type="te" placeholder="title course" /> <br />
                        <Form.Label><h4>انتخاب عکس دوره</h4></Form.Label>
                        <Form.Control name='imageUrl' aria-describedby='imageUrl' type="file" size="lg" /><br />
                        <Form.Label ><h4>توضیحات درس</h4></Form.Label>
                        <Form.Control name='info' onChange={(e) => setInfo(e.target.value)} as="textarea" aria-label="With textarea" /> <hr />
                        <Button type='submit' className='p-3 btn-success w-100' ><h4>ساخت دوره</h4></Button>
                    </Form.Group>
                </form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

