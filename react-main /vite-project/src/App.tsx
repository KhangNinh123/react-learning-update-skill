import { useState } from 'react'
//shadow clone
export default function App() {
  const [person, setPerson] = useState({
    name: 'Dư Thanh Được',
    position: {
      title: 'Giám đốc',
      salary: 1000000,
    },
  })
  //Khi set lai
  return (
    <div className="p-8">
      <form className="flex flex-col gap-4 max-w-sm">
        <input
          className="border border-gray-400 p-2 rounded outline-none focus:border-blue-500"
          value={person.name}
          name="name"
          onChange={(e) => {
            setPerson({
              ...person,
              name: e.target.value,
            })
          }}
        />
        <input
          className="border border-gray-400 p-2 rounded outline-none focus:border-blue-500"
          value={person.position.title}
          name="title"
          onChange={(e) => {
            setPerson({
              ...person,
              position: {
                ...person.position,
                title: e.target.value,
              },
            })
          }}
        />
        <input
          className="border border-gray-400 p-2 rounded outline-none focus:border-blue-500"
          value={person.position.salary}
          name="salary"
          onChange={(e) => {
            setPerson({
              ...person,
              position: {
                ...person.position,
                salary: parseInt(e.target.value),
              },
            })
          }}
        />
      </form>
    </div>
  )
}
