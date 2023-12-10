import { useState, useRef } from 'react';
import './App.css'

function App() {
  const [list, setList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    const currentInputValue = inputRef.current?.value;
    if (currentInputValue) {
      setList(prevList => [...prevList, currentInputValue]);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">TODOリスト</h1>
      <div className="flex mb-4">
        <input ref={inputRef} className="border border-gray-300 rounded-l p-4 flex-grow" type="text" placeholder="新しいタスクを入力してください" />
        <button onClick={handleAdd} className="bg-blue-500 text-white rounded-r p-4">追加</button>
      </div>
      <ul className="space-y-2">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
