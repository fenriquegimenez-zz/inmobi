import React from "react"

const SubmitButton = props => {
  return (
    <button
      onClick={() => props.onButtonClick}
      className="btn btn-success text-center"
    >
      Agregar
    </button>
  )
}

export default SubmitButton
