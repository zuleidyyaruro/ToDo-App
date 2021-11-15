
import './styles/App.css';
import { v4 as uuidv4 } from 'uuid';
import Menu from './components/Menu';
import Form from "./components/Form";
import Header from "./components/Header";
import React, { useEffect, useState } from 'react';
import TodoContainer from "./components/TodoContainer";

function App() {

    //states
    const [todoList, setTodoList] = useState(null);
    const [todoActive, setTodoActive] = useState([]);
    const [todoComplete, setTodoComplete] = useState([]);
    const [menuButtonClick, setMenuButtonClick] = useState(1);
    const [todoQuery, setTodoQuery] = useState({title:''});

    //Peticion con useEffect
    useEffect(() => {
        const handleTodoList = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const result = await response.json();
            const resultTodoList = result.slice(0, 10);
            setTodoList(resultTodoList);
        }

        setTimeout(() => {
            handleTodoList();
        }, 2000);

    }, [])


    const handleChangeCompleteTodo = (id, buttonClick) => {
        if (buttonClick === 1) {
            setTodoList(todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
        } else if (buttonClick === 2) {
            setTodoActive(todoActive.filter(todo => todo.id !== id));
            setTodoList(todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));

        } else {
            setTodoComplete(todoComplete.filter(todo => todo.id !== id));
            setTodoList(todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
        }
    }

    const handleActive = () => {
        setMenuButtonClick(2);
        const copyTodo = [...todoList];
        setTodoActive(copyTodo.filter(todo => todo.completed === false));
    }

    const handleComplete = () => {
        setMenuButtonClick(3);
        const copyTodo = [...todoList];
        setTodoComplete(copyTodo.filter(todo => todo.completed === true));
    }

    const handleAll = () => {
        setMenuButtonClick(1);
        setTodoList([...todoList])
    }

    const handleTodoQuery = (e) => {
        setTodoQuery({
            completed: false,
            id: uuidv4(),
            title: e.target.value,
            userId: 2
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([todoQuery, ...todoList]);
        setTodoQuery({title:''});
    }

    return (
        <div>
            <Header />
            <Menu
                handleActive={handleActive}
                handleComplete={handleComplete}
                handleAll={handleAll}
            />
            <Form
                handleTodoQuery={handleTodoQuery}
                handleSubmit={handleSubmit}
                todoQuery={todoQuery}
            />
            <TodoContainer
                menuButtonClick={menuButtonClick}
                todoList={todoList}
                handleChangeCompleteTodo={handleChangeCompleteTodo}
                todoActive={todoActive}
                todoComplete={todoComplete}
            />
        </div>
    );
}

export default App;
