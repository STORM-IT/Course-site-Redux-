import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

export default function CourseNewCanvas() {
    const [show, setShow] = useState(true);
    return (
            <Offcanvas show={show} onHide={()=>setShow(false)} placement="end" scroll={false} backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
    );
}

