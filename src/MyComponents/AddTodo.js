import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            alert("Title or Description cannot be empty.")
        }
        else { // So that blank buttons are not added
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container'>
            <h3 className="m-3 text-center">Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="row mb-3">
                    <label htmlFor="title" className="col-sm-2 col-form-label">ToDo Title</label>
                    <div className="col-sm-10">
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="desc" className="col-sm-2 col-form-label">ToDo Description</label>
                    {/* Did htmlFor instead of for due to jsx */}
                    <div className="col-sm-10">
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-sm btn-success btn-primary">Add ToDo</button>
                </form>
        </div>
    )
}