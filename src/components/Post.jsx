/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, publishedAt, content}){
  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

 return (
  <article className={styles.post}>
   <header>
    <div className={styles.author}>
      <Avatar src={author.avatarUrl}/>
     <div className={styles.authorInfo}>
      <strong>{author.name}</strong>
      <span>{author.role}</span>
     </div>
    </div>

    <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
   </header>

   <div className={styles.content}>
    {
      content.map(item=> {
        if (item.type === 'paragraph'){
          return <p>{item.content}</p>
        }else if(item.type === 'link') {
          return <p><a href='#'>{item.content}</a> </p>
        }
      })
    }
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