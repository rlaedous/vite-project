import { useState } from 'react'
import { Item } from './types/type'
import ItemList from './components/ItemList'
import InsertItem from './components/InsertItem'
const App = () => {
  const [items, setItems] = useState<Item[]>([])

  return (
    <div>
      <div>
        <div>
          <h1>{`Todo List`}</h1>
        </div>
        <InsertItem items={items} setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </div>
    </div>
  )
}

export default App
