import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Detail() {
  const params = useParams()

  const list = useSelector((state) => state.newTodo)

  const foundlist = list.find((item) => {
    return item.id === +params.id
  })

  return (
    <div>
      <h2>{foundlist.title}</h2>
      <div>{foundlist.content}</div>
      <Link to="/">back</Link>
    </div>
  )
}

export default Detail;