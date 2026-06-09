'use client';

import { useState, useEffect, useRef } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const INITIAL_TODOS: Todo[] = [
  { id: 1, text: '牛乳を買う', completed: false },
  { id: 2, text: '部屋を掃除する', completed: false },
  { id: 3, text: '運動する', completed: false },
  { id: 4, text: '本を読む', completed: false },
];

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [loaded, setLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      try { setTodos(JSON.parse(saved)); } catch { /* ignore */ }
    } else {
      setTodos(INITIAL_TODOS);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, loaded]);

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
    setInput('');
    inputRef.current?.focus();
  };

  const toggleTodo = (id: number) =>
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTodo = (id: number) =>
    setTodos(prev => prev.filter(t => t.id !== id));

  const clearCompleted = () =>
    setTodos(prev => prev.filter(t => !t.completed));

  const completed = todos.filter(t => t.completed).length;
  const remaining = todos.length - completed;
  const progress = todos.length > 0 ? Math.round((completed / todos.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100 flex items-start justify-center pt-12 px-4 pb-16">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3 drop-shadow">🦁</div>
          <h1 className="text-4xl font-extrabold text-orange-500 tracking-tight">
            My Tasks
          </h1>
          <p className="mt-2 text-base text-orange-400 font-medium">
            {todos.length === 0
              ? 'タスクを追加してね！🐾'
              : remaining === 0
                ? 'ぜんぶ完了！やったね 🎉'
                : `あと ${remaining} 件、がんばろう！`}
          </p>
        </div>

        {/* Progress bar */}
        {todos.length > 0 && (
          <div className="mb-4 bg-white rounded-2xl p-4 shadow-sm border border-orange-100">
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-gray-500 font-medium">🐾 進捗</span>
              <span className="font-bold text-orange-500">{progress}%</span>
            </div>
            <div className="h-3 bg-orange-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Progress checklist summary */}
        {todos.length > 0 && (
          <div className="mb-6 bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
            <div className="px-4 py-2.5 bg-orange-50 border-b border-orange-100">
              <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">進捗確認チェックリスト</span>
            </div>
            <div className="divide-y divide-gray-50">
              {todos.map(todo => (
                <div key={todo.id} className="flex items-center gap-3 px-4 py-2.5">
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                    todo.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {todo.completed ? '✓' : '○'}
                  </span>
                  <span className={`flex-1 text-sm ${
                    todo.completed ? 'line-through text-gray-300' : 'text-gray-600'
                  }`}>
                    {todo.text}
                  </span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    todo.completed
                      ? 'bg-green-100 text-green-600'
                      : 'bg-orange-50 text-orange-400'
                  }`}>
                    {todo.completed ? '完了' : '未完了'}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex divide-x divide-orange-100 border-t border-orange-100 text-center text-xs">
              <div className="flex-1 py-2.5">
                <div className="font-bold text-green-500">{completed}</div>
                <div className="text-gray-400">完了</div>
              </div>
              <div className="flex-1 py-2.5">
                <div className="font-bold text-orange-400">{remaining}</div>
                <div className="text-gray-400">未完了</div>
              </div>
              <div className="flex-1 py-2.5">
                <div className="font-bold text-gray-500">{todos.length}</div>
                <div className="text-gray-400">合計</div>
              </div>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="flex gap-2 mb-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTodo()}
            placeholder="タスクを入力してね…"
            className="flex-1 px-4 py-3 rounded-2xl border-2 border-orange-200 bg-white text-gray-700 placeholder-gray-300 focus:outline-none focus:border-orange-400 transition-colors text-sm shadow-sm"
          />
          <button
            onClick={addTodo}
            disabled={!input.trim()}
            className="px-5 py-3 bg-orange-400 text-white rounded-2xl hover:bg-orange-500 active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-orange-200 text-lg font-bold"
            title="追加する"
          >
            🐱 追加
          </button>
        </div>
        <p className="text-xs text-orange-300 mb-6 px-2">Enter キーでも追加できます</p>

        {/* Empty state */}
        {todos.length === 0 && (
          <div className="flex flex-col items-center py-16 rounded-3xl border-2 border-dashed border-orange-200 bg-white/70">
            <div className="text-5xl mb-3">🐾</div>
            <p className="text-gray-400 text-sm">タスクがまだないよ！追加してね</p>
          </div>
        )}

        {/* Todo list */}
        {todos.length > 0 && (
          <ul className="space-y-3">
            {todos.map(todo => (
              <li
                key={todo.id}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border-2 bg-white shadow-sm transition-all duration-200 ${
                  todo.completed
                    ? 'border-green-200 bg-green-50/50'
                    : 'border-orange-100 hover:border-orange-300 hover:shadow-md'
                }`}
              >
                {/* Complete toggle button */}
                <button
                  onClick={() => toggleTodo(todo.id)}
                  title={todo.completed ? '未完了に戻す' : '完了にする'}
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-all active:scale-75 hover:scale-110 ${
                    todo.completed ? 'bg-green-100' : 'bg-yellow-100'
                  }`}
                >
                  {todo.completed ? '🐸' : '🐶'}
                </button>

                {/* Text */}
                <span
                  className={`flex-1 text-sm font-medium break-all transition-all duration-200 ${
                    todo.completed ? 'line-through text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {todo.text}
                </span>

                {/* Delete button */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  title="削除する"
                  aria-label={`「${todo.text}」を削除`}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center text-2xl active:scale-75 hover:scale-110 transition-all"
                >
                  🐺
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Clear completed */}
        {todos.some(t => t.completed) && (
          <div className="mt-5 flex justify-center">
            <button
              onClick={clearCompleted}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border-2 border-red-200 hover:bg-red-50 text-red-400 text-sm font-semibold transition-all shadow-sm active:scale-95"
            >
              🦊 完了済みをすべて削除
            </button>
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 flex justify-center gap-6 text-xs text-gray-400">
          <span>🐶 → 完了にする</span>
          <span>🐸 → 元に戻す</span>
          <span>🐺 → 削除する</span>
        </div>
      </div>
    </div>
  );
}
