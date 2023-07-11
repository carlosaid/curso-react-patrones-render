import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoHeader } from '../TodoHeader';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { ChangeAlert } from '../ChangeAlert';

function App() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter   
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError = {() => <TodosError/>}
        onLoading = {() => <TodosLoading/>}
        onEmptyTodos = {() => <EmptyTodos/>}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para: {searchText}</p>
        }
        // render = {todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      

      
      <CreateTodoButton
        setOpenModal = {setOpenModal}
      />
      {openModal && (
      <Modal>
        <TodoForm 
          setOpenModal={setOpenModal}
          addTodo={addTodo}
        />
      </Modal>
      )}
      <ChangeAlert
        sincronize = {sincronizeTodos}
      />
    </>
  );
}

export default App;
