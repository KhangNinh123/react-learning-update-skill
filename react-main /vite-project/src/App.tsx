import { useState } from 'react'
import './App.css'

let nextId = 0;

type Artist = {
  id: number
  name: string
}

export default function App() {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState<Artist[]>([])

  const handleRemoveArtist = (artistId: number) => {
    const newArtists = artists.filter((artist) => artist.id !== artistId)
    setArtists(newArtists)
  }

  console.log(artists)
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          const newArtists = [ ...artists, { id: nextId++, name }]
          setArtists(newArtists)
          setName('')
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => handleRemoveArtist(artist.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
