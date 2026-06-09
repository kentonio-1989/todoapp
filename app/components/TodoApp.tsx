'use client';

import { useState, useEffect, useRef } from 'react';
import { LionIcon, DogIcon, FrogIcon, WolfIcon, FoxIcon, CatIcon, PawIcon } from './animals';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = 'all' | 'active' | 'completed';

const FILTER_LABELS: Record<Filter, string> = {
  all: 'すべて',
  active: '進行中',
  completed: '完了',
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [loading, setLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/api/todos')
      .then(r => r.json())
      .then(data => { setTodos(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const addTodo = async () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const todo = await res.json();
    setTodos(prev => [...prev, todo]);
    inputRef.current?.focus();
  };

  const toggleTodo = async (id: number, completed: boolean) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed } : t)));
    await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed }),
    });
  };

  const deleteTodo = async (id: number) => {
    setTodos(prev => prev.filter(t => t.id !== id));
    await fetch(`/api/todos/${id}`, { method: 'DELETE' });
  };

  const clearCompleted = async () => {
    const completed = todos.filter(t => t.completed);
    setTodos(prev => prev.filter(t => !t.completed));
    await Promise.all(completed.map(t => fetch(`/api/todos/${t.id}`, { method: 'DELETE' })));
  };

  const completedCount = todos.filter(t => t.completed).length;
  const activeCount = todos.filter(t => !t.completed).length;
  const progress = todos.length > 0 ? Math.round((completedCount / todos.length) * 100) : 0;

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const filterCounts: Record<Filter, number> = {
    all: todos.length,
    active: activeCount,
    completed: completedCount,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100 flex items-start justify-center pt-12 px-4 pb-16">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="mb-3 flex justify-center drop-shadow">
            <LionIcon size={72} />
          </div>
          <h1 className="text-4xl font-extrabold text-orange-500 tracking-tight">
            My Tasks
          </h1>
          <p className="mt-2 text-base text-orange-400 font-medium flex items-center justify-center gap-1">
            {loading
              ? '読み込み中…'
              : todos.length === 0
                ? <><span>タスクを追加してね！</span><PawIcon size={18} /></>
                : activeCount === 0
                  ? 'ぜんぶ完了！やったね 🎉'
                  : `あと ${activeCount} 件、がんばろう！`}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-1 mb-5 bg-white rounded-2xl p-1 shadow-sm border border-orange-100">
          {(['all', 'active', 'completed'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                filter === f
                  ? 'bg-orange-400 text-white shadow-sm'
                  : 'text-gray-400 hover:text-orange-400'
              }`}
            >
              {FILTER_LABELS[f]}
              {filterCounts[f] > 0 && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  filter === f ? 'bg-white/30 text-white' : 'bg-orange-100 text-orange-400'
                }`}>
                  {filterCounts[f]}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        {todos.length > 0 && (
          <div className="mb-4 bg-white rounded-2xl p-4 shadow-sm border border-orange-100">
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-gray-500 font-medium flex items-center gap-1">
                <PawIcon size={16} /> 進捗
              </span>
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
                <div className="font-bold text-green-500">{completedCount}</div>
                <div className="text-gray-400">完了</div>
              </div>
              <div className="flex-1 py-2.5">
                <div className="font-bold text-orange-400">{activeCount}</div>
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
            className="flex items-center gap-2 px-4 py-3 bg-orange-400 text-white rounded-2xl hover:bg-orange-500 active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-orange-200 font-bold"
            title="追加する"
          >
            <CatIcon size={28} />
            追加
          </button>
        </div>
        <p className="text-xs text-orange-300 mb-6 px-2">Enter キーでも追加できます</p>

        {/* Empty state */}
        {!loading && filteredTodos.length === 0 && (
          <div className="flex flex-col items-center py-16 rounded-3xl border-2 border-dashed border-orange-200 bg-white/70">
            <PawIcon size={52} />
            <p className="text-gray-400 text-sm mt-3">
              {filter === 'active'
                ? completedCount > 0 ? '進行中のタスクはないよ！' : 'タスクがまだないよ！追加してね'
                : filter === 'completed'
                  ? '完了済みのタスクはないよ！'
                  : 'タスクがまだないよ！追加してね'}
            </p>
            {filter !== 'all' && (
              <button
                onClick={() => setFilter('all')}
                className="mt-3 text-xs text-orange-400 underline"
              >
                すべて表示する
              </button>
            )}
          </div>
        )}

        {/* Todo list */}
        {filteredTodos.length > 0 && (
          <ul className="space-y-3">
            {filteredTodos.map(todo => (
              <li
                key={todo.id}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border-2 bg-white shadow-sm transition-all duration-200 ${
                  todo.completed
                    ? 'border-green-200 bg-green-50/50'
                    : 'border-orange-100 hover:border-orange-300 hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleTodo(todo.id, !todo.completed)}
                  title={todo.completed ? '未完了に戻す' : '完了にする'}
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-75 hover:scale-110 ${
                    todo.completed ? 'bg-green-100' : 'bg-yellow-100'
                  }`}
                >
                  {todo.completed ? <FrogIcon size={28} /> : <DogIcon size={28} />}
                </button>

                <span
                  className={`flex-1 text-sm font-medium break-all transition-all duration-200 ${
                    todo.completed ? 'line-through text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {todo.text}
                </span>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  title="削除する"
                  aria-label={`「${todo.text}」を削除`}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center active:scale-75 hover:scale-110 transition-all"
                >
                  <WolfIcon size={28} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Completed task actions */}
        {completedCount > 0 && (
          <div className="mt-5 flex flex-col gap-2 items-center">
            {filter !== 'active' ? (
              <button
                onClick={() => setFilter('active')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-500 text-sm font-semibold transition-all shadow-sm active:scale-95"
              >
                <FrogIcon size={20} />
                完了タスクを非表示
              </button>
            ) : (
              <button
                onClick={() => setFilter('all')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border-2 border-green-200 hover:bg-green-50 text-green-500 text-sm font-semibold transition-all shadow-sm active:scale-95"
              >
                <FrogIcon size={20} />
                完了タスクを表示する（{completedCount}件）
              </button>
            )}
            <button
              onClick={clearCompleted}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border-2 border-red-200 hover:bg-red-50 text-red-400 text-sm font-semibold transition-all shadow-sm active:scale-95"
            >
              <FoxIcon size={24} />
              完了済みをすべて削除
            </button>
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 flex justify-center gap-6 text-xs text-gray-400">
          <span className="flex items-center gap-1"><DogIcon size={18} /> 完了にする</span>
          <span className="flex items-center gap-1"><FrogIcon size={18} /> 元に戻す</span>
          <span className="flex items-center gap-1"><WolfIcon size={18} /> 削除する</span>
        </div>
      </div>
    </div>
  );
}
