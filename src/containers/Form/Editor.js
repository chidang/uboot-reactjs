import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
}
/* 
* Quill editor formats
* See https://quilljs.com/docs/formats/
*/
const formats = [
'header', 'font', 'size',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image', 'video'
]
  
const Editor = () => {
    const [textMessage1, setTextMessage1] = useState('');
    const [textMessage2, setTextMessage2] = useState('');
    
    const handleChangeEditor1 = value => {
        setTextMessage1(value);
    };

    const handleChangeEditor2 = value => {
        setTextMessage2(value);
    };
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb ps-0 fs-base">
                    <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
                    <li className="breadcrumb-item"><span>Form</span></li>
                    <li className="breadcrumb-item active" aria-current="page">Editor</li>
                </ol>
            </nav>
            <div className="header mb-5">
                <h1 className="header-title h3">
                    <i className="bi-star text-primary" /> Editor <sup className="badge bg-primary fw-300 fs-xs">ADDON</sup>
                </h1>
            </div>
            <Card className="flex-fill w-100">
                <Card.Header>
                    <Card.Title tag="h4" className="fw-700 m-0 fs-base">Quill Editor <span className="fw-300 fst-italic">Snow theme</span></Card.Title>
                </Card.Header>
                <Card.Body>
                    <ReactQuill
                        placeholder={'Write something...'}
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={textMessage1}
                        onChange={handleChangeEditor1}
                    />
                </Card.Body>
            </Card>

            <Card className="flex-fill w-100">
                <Card.Header>
                    <Card.Title tag="h4" className="fw-700 m-0 fs-base">Quill Editor <span className="fw-300 fst-italic">Bubble theme</span></Card.Title>
                </Card.Header>
                <Card.Body>
                    <ReactQuill
                        placeholder={'Write something...'}
                        theme="bubble"
                        value={textMessage2}
                        onChange={handleChangeEditor2}
                    />
                </Card.Body>
            </Card>
        </>
    );
}

export default Editor;
