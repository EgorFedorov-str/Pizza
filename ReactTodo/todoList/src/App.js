import React, { useState } from "react";
import TodoList from "./Todo/Todo_list";
import Context from "./Todo/context";
import AddTodo from "./AddTodo";
import { useContext } from "react";

function App() {
  let [todos, setTodos] = React.useState([
    {
      id:1,
      completed: false,
      title: 'Тестовое задание'
    },
    {
      id:2,
      completed: true,
      title: 'Прекрасный код'
    },
    {
      id:3,
      completed: false,
      title: 'Покрытие тестами'
    }
  ])
  
  let [staticTodos, setStaticTodos] = useState([
    {
      id:1,
      completed: false,
      title: 'Тестовое задание'
    },
    {
      id:2,
      completed: true,
      title: 'Прекрасный код'
    },
    {
      id:3,
      completed: false,
      title: 'Покрытие тестами'
    }
  ]);

  function tooggleTodo(id) {
    setTodos(
    todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    )
    setStaticTodos(todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    }))
    
    console.log(staticTodos);
    console.log(todos);
  }
  
  function changeActive(completed) {
    todos = [...staticTodos]
    setTodos(
      todos.reduce((accum, todo)=>{
        if (todo.completed === false) {
          return accum.concat(todo)
        }
        return accum;
      }, [])
    )
    console.log(todos); 
  }

  function changeAll(completed) {
    todos = [...staticTodos]
    setTodos(
      todos.map((todo) => todo)
    ) 
  }

  function changeComplited(completed) {
    todos = [...staticTodos]
    setTodos(
      todos.reduce((accum, todo)=>{
        if (todo.completed === true) {
          return accum.concat(todo)
        }
        return accum;
      }, [])
    ) 
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
    setStaticTodos(staticTodos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed:false
    }]))
    setStaticTodos(staticTodos.concat([{
      title,
      id: Date.now(),
      completed:false
    }]))
  }
  
  return (
    <Context.Provider value={{ removeTodo }}>
    <div className="wrapper">
      <h1 className="header">Todos</h1>
      <AddTodo onCreate={addTodo}/>
      {(()=>{
        
      return todos.length ? <TodoList todos={todos} onToogle={tooggleTodo}/> : 
      <p>No todos!</p>})()}
      <div className="nav">
        <div>
          <h4>{todos.reduce((acc, elem) => {
            let newAcc = acc
            
            if (elem.completed === false) {
              newAcc = acc + 1

            }
            return newAcc;
          }, 0)} item left</h4>
        </div>
        <div className="changeTodoList">
          <div>
            <span onClick={changeAll}>All </span>
          </div>
          <div>
            <span onClick={changeActive}>Active </span>
          </div>
          <div>
            <span onClick={changeComplited}>Completed </span>
          </div>
        </div>  
      </div> 
    </div>

    </Context.Provider>
    
  );
}

export default App;
