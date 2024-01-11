/* eslint-disable react/jsx-key */
import styles from './App.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/SIdebar'
import { Header } from './components/header'
import './global.css'



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/IgorAdelino.png',
      name: 'Igor Adelino',
      role: "Software Engineer"
    },
    content: [
      {type: 'paragraph', content: 'Hi there, Im Igor Adelino'},
      {type: 'paragraph', content: 'Im a Software Engineer and Computer Science Student at University Center Unipê.'},
      {type: 'paragraph', content: 'I have a deep interest in Solid Principles, Clean Architeture, Design Patterns and Microsservices'},
      {type: 'paragraph', content: 'My primary interests are Backend Programming, utilizing Javascript, Typescript (Nodejs, Nestjs, Prisma, Vitest and Jest), '},
      {type: 'paragraph', content: 'but also have experience in Cloud-based projects with AWS (Lambda, Aurora, API Gateway) and Frontend development (Angular, React and Next).'},
      {type: 'link', content: 'https://github.com/IgorAdelino'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/joaopedroaraujoinacio.png',
      name: 'João Pedro',
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Awesome'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  }
]

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map (post => {
            return (
              <Post
                author= {post.author}
                content= {post.content}
                publishedAt= {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
