import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface Props {
  task: string;
  complete: boolean;
  onDelete: () => void; 
}

const Todo: React.FC<Props> = ({ task, complete, onDelete }) => {
  return (
    <li className={`list-item ${complete ? 'line-through' : ''}`}>
      {task}
      <span onClick={onDelete} className="text-red-500 cursor-pointer">
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  );
};

export default Todo;