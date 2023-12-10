import React from 'react';

interface Props {
  task: string;
  complete: boolean;
}

const Todo: React.FC<Props> = ({ task, complete }) => {
  return (
    <li className={`list-item ${complete ? 'line-through' : ''}`}>
      {task}
    </li>
  );
};

export default Todo;
