function TodoItem({todo,onDelete}) {
    // We did destructuring here, the value i,e, the object we are catching in props will be renamed ad todo now
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            {/* 
                {onDelete} -> Function Passed
                {onDelete()} -> Function Called
                             -> However this way, the function will be executed at the time of rendering.
                             -> We want to call the function but at the same time not execute at time of rendering
                onClick={()=>{onDelete(todo)}} -> This way we will only pass the function and not run it, and run it only when the function is clicked
            */}
        </div>
    );
}

export default TodoItem;