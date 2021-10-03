import React, { useState } from 'react'

const AddProject = ({addNewProject}) => {
    const [image, setImage] = useState('');

    return (
        <div style={{
            width: '60vw',
            margin: '0 auto',
            border: '1px solid rgb(240,240,240)',
            boxShadow: '5px 5px 10px rgb(240,240,240)',
            padding: '20px',
            textAlign: 'left'
            }}>
            <form className="contact-form" onSubmit={(e) => addNewProject(e, image)}>
                <label>Title</label>
                <input type="text" name="title" id="title"/>
                <label>Link</label>
                <input type="text" name="link" id="link" />
                <label>Category</label>
                <input type="text" name="category" id="category"/>
                <label>Image</label>
                <input type="file" name="image" id="image" onChange={(e) => {setImage(e.target.files[0])}}/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddProject
