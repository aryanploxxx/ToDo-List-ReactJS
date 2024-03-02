// import logo from './logo.svg';
import Header from './MyComponents/Header';
import ToDos from './MyComponents/ToDos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import React, { useState } from 'react'

// npm install react-router-dom

function App() {
  const onDelete = (todo) => {
    console.log("i am ondelete of todo: ", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter( (e) => {
      return e!=todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding todo with title: ",title,"and desc: ", desc);

    let sno;
    if(todos.length===0) {
      sno=1;
    }
    else {
      sno = todos[todos.length -1].sno + 1;
      // Getting the sno of the last todo and doing +1 for sno of the next todo
    }

    const myTodo = {
      title: title,
      desc: desc,
      sno: sno
    }
    console.log(myTodo);
    setTodos([...todos,myTodo]);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "title1",
      desc: "hello welcome to todo 1"
    },
    {
      sno: 2,
      title: "title2",
      desc: "hello welcome to todo 2"
    },
    {
      sno: 3,
      title: "title3",
      desc: "hello welcome to todo 3"
    },
  ]);

  /*
    // This was the old code. Since we needed to delete the todos, we need to use useState
    let todos_arr = [
      {
        sno: 1,
        title: "title1",
        desc: "hello welcome to todo 1"
      },
      {
        sno: 2,
        title: "title2",
        desc: "hello welcome to todo 2"
      },
      {
        sno: 3,
        title: "title3",
        desc: "hello welcome to todo 3"
      },
    ]
  */
  return (
    <>
      <Header title="MyTodosList" searchBar={false}/>
      {/* 
          Direct values are passed using quotes -> title="newPage" 
          Variables and boolean values are passed using { } -> let title = "new";
                                            title={title}
          Although title={45} also works
      */}
      <AddTodo addTodo={addTodo}/>
      <ToDos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
