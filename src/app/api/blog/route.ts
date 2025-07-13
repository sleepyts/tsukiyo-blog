import dbConnect from '@/lib/db/mongoose';
import Blog, { IBlog } from '@/lib/models/Blog';

export async function GetBlogs(): Promise<IBlog[]> {
  await dbConnect();

  const blogs = await Blog.find({});
  return blogs.map((blog) => blog._doc);
}
