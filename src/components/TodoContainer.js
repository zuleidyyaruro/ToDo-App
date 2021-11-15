import React from 'react';
import Loader from './Loader';
import Todo from './Todo';

const TodoContainer = ({ menuButtonClick, todoList, handleChangeCompleteTodo, todoActive, todoComplete }) => {
    return (
        <div className="container">

            {
                menuButtonClick === 1 ?
                    (todoList &&
                        todoList.length > 0 ?
                        (todoList.map(singleTodo => (
                            <Todo
                                key={singleTodo.id}
                                singleTodo={singleTodo}
                                handleChangeCompleteTodo={handleChangeCompleteTodo}
                                menuButtonClick={menuButtonClick}
                            />
                        )))
                        :
                        <Loader />)
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
                                            handleChangeCompleteTodo={handleChangeCompleteTodo}
                                            menuButtonClick={menuButtonClick}
                                        />
                                    )))
                                    :
                                    <Loader />
                            )
                            :
                            (
                                todoComplete &&
                                    todoComplete.length > 0 ?
                                    (todoComplete.map(singleTodo => (
                                        <Todo
                                            key={singleTodo.id}
                                            singleTodo={singleTodo}
                                            handleChangeCompleteTodo={handleChangeCompleteTodo}
                                            menuButtonClick={menuButtonClick}
                                        />
                                    )))
                                    :
                                    <Loader />
                            )
                    )
            }

        </div>
    )
}

export default TodoContainer
