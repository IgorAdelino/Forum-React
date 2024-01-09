import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
 return (
  <article className={styles.post}>
   <header>
    <div className={styles.author}>
      <Avatar src="https://github.com/IgorAdelino.png"/>
     <div className={styles.authorInfo}>
      <strong>Igor Adelino</strong>
      <span>Web developer</span>
     </div>
    </div>

    <time title='11 de maio às 12:13' dateTime='2024-08-01'>Publicado há 1 hora</time>
   </header>

   <div className={styles.content}>
    <p>Hi there, Im Igor Adelino</p>
    <p>Im a Software Engineer and Computer Science Student at University Center Unipê.</p>
    <p>I have a deep interest in Solid Principles, Clean Architeture, Design Patterns and Microsservices</p>
    <p>My primary interests are Backend Programming, utilizing Javascript, Typescript (Nodejs, Nestjs, Prisma, Vitest and Jest), </p>
    <p>but also have experience in Cloud-based projects with AWS (Lambda, Aurora, API Gateway) and Frontend development (Angular, React and Next).</p>
    <p><a href="https://github.com/IgorAdelino">My Github</a></p>
   </div>

   <form className={styles.commentForm}>
    <strong>Deixe seu feedback</strong>
    <textarea >Deixe seu comentário</textarea>
    <footer>
      <button type='submit'>Comentar</button>
    </footer>

    <div className={styles.commentList}>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
   </form>
  </article>
 )
}