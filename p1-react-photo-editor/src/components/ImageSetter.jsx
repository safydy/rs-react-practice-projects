import React from "react"

const ImageSetter = ({setImage}) => {
    return (
        <div className='image-setter'>
            <label htmlFor="image-setter">Paste an image URL</label>
            <input type='text' placeholder='Image link' onChange={(e) => {setImage(e.target.value)} }/>
        </div>
    )
}

export default ImageSetter