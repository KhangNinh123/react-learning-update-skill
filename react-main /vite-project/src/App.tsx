import { useState } from 'react';

export default function SyncedInputs() {
    const [text, setText] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Input 
        label="First input" 
        text={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <Input 
        label="Second input" 
        text={text} 
        onChange={(e) => setText(e.target.value)} 
      />
    </div>
  );
}

// ĐÂY LÀ ĐOẠN CODE ĐÃ SỬA (Component Con nhận Props từ Cha)
type InputProps = {
  label: string;
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, text, onChange }: InputProps) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
      {label}
      <input
        value={text}
        onChange={onChange}
        style={{ padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #888' }}
      />
    </label>
  );
}
