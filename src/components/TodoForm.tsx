import { FormEvent, Fragment, useState } from "react";
import TodoCard from "./TodoCard";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

type Todo = {
  id: number;
  todo: string;
  isDone: boolean;
  isEdit: boolean;
  isDelete: boolean;
};

const TodoForm = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleAdd = (e: FormEvent) => {
    // prevent page refresh
    e.preventDefault();

    // set new todo
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        todo: todo,
        isDone: false,
        isEdit: false,
        isDelete: false,
      },
    ]);

    // clear form after submit
    setTodo("");
  };

  const toggleTodo = (id: number) => {
    // set line-through for task is done
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

    console.log(todos);
  };

  const clickEdit = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
      )
    );

    console.log(todos);
  };

  const editTodo = (updateTodo: string, id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, todo: updateTodo, isEdit: !todo.isEdit }
          : todo
      )
    );

    console.log(todos);
  };

  const clickDelete = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDelete: !todo.isDelete } : todo
      )
    );

    console.log(todos);
  };

  const cancelDeleteTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDelete: !todo.isDelete } : todo
      )
    );

    console.log(todos);
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

    console.log(todos);
  };

  return (
    <div className="todo-container flex flex-col gap-[10px] w-[800px] p-[20px] ">
      {/* form add new todo */}
      <img src="/swinging-doodle.svg" alt="svg" />
      <h1 className="font-bold text-[26px] tracking-[10px] my-[20px] animate-jump-in">
        MY TODO LIST
      </h1>
      <form
        className="form-add flex justify-between mb-[20px]"
        onSubmit={handleAdd}
      >
        <input
          className="border-[3px] rounded-l-[10px] p-[10px] w-full outline-none"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add your task..."
          required
        />
        <button
          className="border-[3px] border-l-[0px] rounded-r-[10px] p-[10px] w-auto hover:font-bold hover:text-black hover:bg-white"
          type="submit"
        >
          Add
        </button>
      </form>

      {/* display todo list | edit todo | delete todo */}
      {todos.map((todo) => (
        <Fragment key={todo.id}>
          {todo.isEdit ? (
            <EditTodo id={todo.id} todo={todo.todo} editTodo={editTodo} />
          ) : (
            <>
              {todo.isDelete ? (
                <DeleteTodo
                  id={todo.id}
                  todo={todo.todo}
                  cancelDeleteTodo={cancelDeleteTodo}
                  deleteTodo={deleteTodo}
                />
              ) : (
                <TodoCard
                  id={todo.id}
                  todo={todo.todo}
                  isDone={todo.isDone}
                  toggleTodo={toggleTodo}
                  clickEdit={clickEdit}
                  clickDelete={clickDelete}
                />
              )}
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default TodoForm;
