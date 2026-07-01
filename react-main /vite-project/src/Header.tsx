import { useContext } from 'react'
import { CountContext } from './CountContext' // Import Trạm phát sóng vào để xài

export default function Header() {
  // BƯỚC 3: BẮT SÓNG
  // Dò đài lấy thẳng biến count từ cụ cố Layout, bỏ qua hoàn toàn thằng Container!
  const count = useContext(CountContext)

  return (
    <div className='header'>
      <div>Header (Nơi hiển thị)</div>
      {/* In con số bắt được ra màn hình */}
      <div style={{ fontSize: '3rem', marginTop: '10px' }}>{count}</div>
    </div>
  )
}
