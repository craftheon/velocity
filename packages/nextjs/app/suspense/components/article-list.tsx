"use client"

export default function ArticleList({ list }: { list: { id: number }[] }) {
  return (
    <ul>
      {list.map(e => <li key={e.id}>{e.id}</li>)}
    </ul>

  )
}