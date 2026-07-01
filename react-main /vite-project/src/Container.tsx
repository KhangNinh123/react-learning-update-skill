export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='container'>
      <div>Container</div>
      <div>{children}</div>
    </div>
  )
}
