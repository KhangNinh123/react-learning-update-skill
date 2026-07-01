import { createContext } from 'react';

// BƯỚC 1: XÂY DỰNG TRẠM PHÁT SÓNG
// Khởi tạo một Context mới. Số 0 là giá trị mặc định nếu không có ai phát sóng.
export const CountContext = createContext(0);
