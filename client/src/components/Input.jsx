import React from 'react'

const Input = ({name, placeholder, handleInputChange, type}) => {
  return (
    <div>
        <input name={name} placeholder={placeholder} onChange={handleInputChange} type={type} style={{ padding: "10px", fontSize: "16px" , borderRadius: "4px",border: "1px solid #ccc", margin: "10px 0"}}/>
    </div>
  )
}

export default Input