import BlogContainer from "./components/blogsContainer/BlogContainer";

export default function Home() {
  return (
    <div>
      <BlogContainer filterQuery={"category=genel özellikler&limit=3"} style={"flex gap-2"} />
    </div>
  )
}
