import TodoItem from './TodoItem';

const ToDos = (props) => {
    return (
        <div className="container">
            <h3 className='text-center m-3'>ToDos List</h3>
            {/* 
                <TodoItem todo={props.todos[0]}/> 
                -> we need to loop this component using for loop so that we can display all the todo items (objects) in the todo_arr
            */}
            
            {props.todos.length === 0 ? "No ToDos to display" : 
                    props.todos.map( (todo) => { 
                        return (
                            <>
                                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                                <hr/>
                            </>
                        ) 
                        // Map method requires a unique key to be passed to every item that is being iterated
                    })
            }

            {/* 
                props.todos.map( (todo) => { 
                    return (
                        <>
                            <h3>Sample Text which is repeated with every Todo Item</h3>
                            <TodoItem todo={todo}/> 
                        </>
                    )
                })
            */}
            
        </div>
    );
}

export default ToDos;