
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'



export function Post({author, publishedAt, content}){
  const [comments, setComments] = useState([
    "Post muito bacana, hein!?",
  ])

  const [newCommentText, setNewCommentText] = useState('')


  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value)
  }

  function handleNewCOmmentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
          return <p key={item.content}>{item.content}</p>
        }else if(item.type === 'link') {
          return <p key={item.content}><a href='#'>{item.content}</a> </p>
        }
      })
    }
   </div>

   <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea name='comment' 
        placeholder='Deixe seu comentário' 
        onChange={handleNewCommentChange} 
        value={newCommentText}
        onInvalid={handleNewCOmmentInvalid}
        required
        >
      </textarea>
      <footer>
      <button type='submit' disabled={newCommentText.length === 0}>Comentar</button>
    </footer>
    </form>
    <div className={styles.commentList}>
      {
        comments.map(comment => {
          return <Comment content={comment} key={comment} onDeleteComment={isNewCommentEmpty}/>
        })
      }
    </div>
  </article>
 )
}