import React from 'react'

const ButtonSlide = ({ text, handle, styleButton  }) => {
    return (
        <>
            <button className={styleButton} onClick={handle}>{text}</button>
        </>
    )
}

export default ButtonSlide
