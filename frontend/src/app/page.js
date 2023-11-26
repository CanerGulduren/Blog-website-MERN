import BlogContainer from "./components/blogsContainer/BlogContainer";

export default function Home() {
  return (
    <div>
      HOME
        <BlogContainer filterQuery={"category=genel özellikler&limit=5"} style={"flex gap-2"} />
    </div>
  )
}
