type DeleteTodoProps = {
  id: number;
  todo: string;
  cancelDeleteTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const DeleteTodo = ({
  id,
  todo,
  cancelDeleteTodo,
  deleteTodo,
}: DeleteTodoProps) => {
  return (
    <div className="form-delete border-[1px] border-red-500 rounded-[10px] p-[10px] w-full">
      <h1 className="font-bold mb-[10px]">Delete task?</h1>
      <p className="text-[16px]">Are you sure you want to delete this task?</p>
      <p>
        <em className="text-[16px] break-words">"{todo}"</em>
      </p>
      <div className="btn-confirm flex justify-center gap-[10px] text-[14px] mt-[10px]">
        <button
          className="border-[1px] rounded-[10px] p-[10px] w-auto hover:font-bold hover:text-black hover:bg-gray-100"
          onClick={() => cancelDeleteTodo(id)}
        >
          Cancel
        </button>
        <button
          className="border-[1px] rounded-[10px] p-[10px] w-auto hover:font-bold hover:text-red-400 hover:bg-red-100"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteTodo;
