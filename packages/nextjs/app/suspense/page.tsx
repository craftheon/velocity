import { Suspense } from "react"
import ArticleList from "./components/article-list"
import { sleep } from "@/lib/utils"

async function getList() {
  await sleep(5000)
  return [
    {
      id: 1
    },
    {
      id: 2
    }
  ]
}

export default async function Page() {
  const res = await getList()
  return (
    <div>
      <h1>Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ArticleList list={res} />
      </Suspense>
    </div>
  )
}