import { useState } from 'react'
import { CountContext } from './CountContext' // Import Trạm phát sóng vào

export default function Layout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  return (
    <div className='layout'>
      <div>
        <span>Layout (Nơi giữ biến count)</span>
        <span>
          <button onClick={() => setCount(count + 1)}>+</button>
          <span>{count}</span>
          <button onClick={() => setCount(count - 1)}>-</button>
        </span>
      </div>

      {/* BƯỚC 2: PHÁT SÓNG */}
      {/* Bật công tắc phát sóng lên, và nhét biến 'count' vào làm nội dung để phát */}
      <CountContext.Provider value={count}>
        <div>{children}</div>
      </CountContext.Provider>
    </div>
  )
}
