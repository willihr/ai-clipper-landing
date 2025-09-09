import BackToTop from "@/app/backToTop";
import BlogDetailsPage from "../index";
import BlogData from "../../../data/blog.json";

export const metadata = {
  title: "Blog Details - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

export async function generateStaticParams() {
  let blogPosts = JSON.parse(JSON.stringify(BlogData.blog));
 
  return blogPosts.map((post) => ({
    blogId: post.id.toString(),
  }))
}

const BlogDetailsLayout = ({ params }) => {
  return (
    <>
      <BlogDetailsPage getBlog={params} />
      <BackToTop />
    </>
  );
};

export default BlogDetailsLayout;
