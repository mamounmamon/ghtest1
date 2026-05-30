"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-sans bg-gray-50 dark:bg-black">
      <main className="flex flex-col items-center w-full max-w-md gap-8 p-10 bg-white rounded-xl shadow-lg dark:bg-zinc-900">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Text Echo App</h1>
        
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="text-input" className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Write something:
          </label>
          <input
            id="text-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:text-white text-black"
            placeholder="Type here..."
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            You wrote:
          </span>
          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 break-words min-h-[1.75rem]">
            {text}
          </p>
        </div>
      </main>
    </div>
  );
}
