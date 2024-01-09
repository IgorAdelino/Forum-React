import { Post } from './components/Post'
import { Sidebar } from './components/SIdebar'
import { Header } from './components/header'
import './global.css'

import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
