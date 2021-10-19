import React, { useState } from "react"

function Home() {
  const [name, setName] = useState("")
  return (
    <main>
      <h1>Welcome {name}</h1>
      <form>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </main>
  )
}

export default Home
