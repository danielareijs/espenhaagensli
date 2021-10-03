import React from 'react'
import '../css/removeButton.css';

const RemoveButton = ( {removeProject, index} ) => {
    return (
        <div>
            <button className="remove-button" onClick={() => removeProject(index)}>Remove</button>
        </div>
    )
}

export default RemoveButton
