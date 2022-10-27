import React, {useState} from "react";
import PropTypes from 'prop-types'


function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

  function submitHandler(event) {
      event.preventDefault()

      if(value.trim()) {
          onCreate(value)
          setValue('')
      }
  }
    
    return (
        <div className="addTodo">
            <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
                <input value={value} onChange={event => setValue(event.target.value)}/>
                <button className="button-add" type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo