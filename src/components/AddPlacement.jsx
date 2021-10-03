import React from 'react'

const AddPlacement = () => {
    return (
        <div style={{
            width: '60vw',
            margin: '0 auto',
            border: '1px solid rgb(240,240,240)',
            boxShadow: '5px 5px 10px rgb(240,240,240)',
            padding: '20px'
            }}>
            <form className="contact-form">
                <label>Image</label>
                <input type="file" name="image" style={{borderBottom: '1px solid rgb(240,240,240)'}}/>
                <label>Link</label>
                <input type="text" name="link" style={{borderBottom: '1px solid rgb(240,240,240)'}} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}
export default AddPlacement