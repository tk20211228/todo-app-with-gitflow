import { useState } from 'react';
import './App.css'
import Todo from './components/Todo';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<{task: string, complete: boolean}[]>([]);

  const handleAddClick = () => {
    setTodos([...todos, {task, complete: false}]);
    setTask("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">TODOリスト</h1>
      <div className="flex mb-4">
        <input 
          className="border border-gray-300 rounded-l p-4 flex-grow" 
          type="text" 
          placeholder="新しいタスクを入力してください" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button 
          className="bg-blue-500 text-white rounded-r p-4"
          onClick={handleAddClick}
        >
          追加
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <Todo key={index} task={todo.task} complete={todo.complete} />
        ))}
      </ul>
    </div>
  )
}

export default App