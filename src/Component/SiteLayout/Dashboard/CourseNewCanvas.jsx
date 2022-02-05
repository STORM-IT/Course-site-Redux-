import React, { useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';

export default function CourseNewCanvas() {
    const [show, setShow] = useState(true);

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [info, setInfo] = useState();

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            let data = new FormData();
            data.append("title", title);
            data.append("price", Number.parseInt(price));
            data.append("imageUrl", event.target.imageUrl.files[0]);
            data.append("info", info);

            //Dispatch
            dispatch(createNewCourse(data));
            closeDialog();
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <Offcanvas show={show} onHide={() => setShow(false)} placement="end" scroll={false} backdrop={false}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><h2>ساخت دوره جدید</h2></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <form action="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h4>نام دوره</h4></Form.Label>
                        <Form.Control size='lg' type="text" placeholder="title course" /> <br />
                        <Form.Label><h4>قیمت دوره</h4></Form.Label>
                        <Form.Control size='lg' type="te" placeholder="title course" /> <br />
                        <Form.Label><h4>انتخاب عکس دوره</h4></Form.Label>
                        <Form.Control type="file" size="lg" /><br />
                        <Form.Label><h4>توضیحات درس</h4></Form.Label>
                        <Form.Control as="textarea" aria-label="With textarea" /> <hr />
                        <Button className='p-3 btn-success w-100'><h4>ساخت دوره</h4></Button>
                    </Form.Group>
                </form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

