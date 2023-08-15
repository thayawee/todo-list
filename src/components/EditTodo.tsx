import { FormEvent, useState } from "react";

type EditTodoProps = {
  id: number;
  todo: string;
  editTodo: (updateTodo: string, id: number) => void;
};

const EditTodo = ({ id, todo, editTodo }: EditTodoProps) => {
  const [updateTodo, setUpdateTodo] = useState<string>(todo);

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();

    editTodo(updateTodo, id);
  };

  return (
    <div>
      {/* form edit todo */}
      <form className="form-edit flex justify-between" onSubmit={handleEdit}>
        <input
          className="border-[1px] border-orange-400 rounded-l-[10px] p-[10px] w-full outline-none"
          type="text"
          value={updateTodo}
          onChange={(e) => setUpdateTodo(e.target.value)}
          placeholder="update your task..."
          required
        />
        <button
          className="border-[1px] border-l-[0px] border-orange-400 rounded-r-[10px] p-[10px] w-auto hover:font-bold hover:text-orange-400 hover:bg-orange-100"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
