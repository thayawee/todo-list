import { FaEdit, FaStar } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

type TodoCardProps = {
  id: number;
  todo: string;
  isDone: boolean;
  toggleTodo: (id: number) => void;
  clickEdit: (id: number) => void;
  clickDelete: (id: number) => void;
};

const TodoCard = ({
  id,
  todo,
  isDone,
  toggleTodo,
  clickEdit,
  clickDelete,
}: TodoCardProps) => {
  return (
    <div className="flex justify-between items-center p-[10px] border-[1px] rounded-[10px]">
      <p
        className={
          isDone
            ? "flex items-center gap-[10px] truncate cursor-pointer line-through text-gray-500"
            : "flex items-center gap-[10px] truncate cursor-pointer"
        }
        onClick={() => toggleTodo(id)}
      >
        <span>
          {isDone ? <FaStar className="text-yellow-400 animate-jump-in" /> : ""}
        </span>
        <span className="truncate">{todo}</span>
      </p>
      <div className="flex gap-[10px] pl-[10px]">
        <FaEdit
          className="cursor-pointer hover:text-orange-400"
          onClick={() => clickEdit(id)}
        />
        <RiDeleteBin5Fill
          className="cursor-pointer hover:text-red-500"
          onClick={() => clickDelete(id)}
        />
      </div>
    </div>
  );
};

export default TodoCard;
