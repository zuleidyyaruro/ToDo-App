import Header from "./components/Header";
import Menu from './components/Menu';
import React, {useEffect, useState} from 'react';
import Loader from "./components/Loader";
import Todo from "./components/Todo";
import './styles/App.css';

function App() {

    //states
    const [todoList, setTodoList] = useState(null);
    const [todoActive, setTodoActive] = useState([]);
    const [todoComplete, setTodoComplete] = useState([]);
    const [menuButtonClick, setMenuButtonClick] = useState(1)

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


    const hadleChangeCompleteTodo = (id, buttonClick) => {
        if (buttonClick === 1) {
            setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
        } else if (buttonClick === 2) {
            setTodoActive(todoActive.filter(todo => todo.id !== id));
            setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));

        } else {
            setTodoComplete(todoComplete.filter(todo => todo.id !== id));
            setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
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
    }

    return (
        <div>
            <Header/>
            <Menu handleActive={handleActive} handleComplete={handleComplete} handleAll={handleAll}/>
            <div className="container">

                {
                    menuButtonClick === 1 ?
                        (todoList &&
                        todoList.length > 0 ?
                            (todoList.map(singleTodo => (
                                <Todo
                                    key={singleTodo.id}
                                    singleTodo={singleTodo}
                                    handleChangeCompleteTodo={hadleChangeCompleteTodo}
                                    menuButtonClick={menuButtonClick}
                                />
                            )))
                            :
                            <Loader/>)
                        :
                        (
                            menuButtonClick === 2 ?
                                (
                                    todoActive &&
                                    todoActive.length > 0 ?
                                        (todoActive.map(singleTodo => (
                                            <Todo
                                                key={singleTodo.id}
                                                singleTodo={singleTodo}
                                                handleChangeCompleteTodo={hadleChangeCompleteTodo}
                                                menuButtonClick={menuButtonClick}
                                            />
                                        )))
                                        :
                                        <Loader/>
                                )
                                :
                                (
                                    todoComplete &&
                                    todoComplete.length > 0 ?
                                        (todoComplete.map(singleTodo => (
                                            <Todo
                                                key={singleTodo.id}
                                                singleTodo={singleTodo}
                                                handleChangeCompleteTodo={hadleChangeCompleteTodo}
                                                menuButtonClick={menuButtonClick}
                                            />
                                        )))
                                        :
                                        <Loader/>
                                )
                        )
                }

            </div>
        </div>
    );
}

export default App;
