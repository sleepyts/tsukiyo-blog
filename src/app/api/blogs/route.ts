import dbConnect from '@/lib/db/mongoose';
import Blog, { IBlog } from '@/lib/models/Blog';

export async function GetBlogs(
  pageQuery: boolean = false,
  page: number = 1,
  pageSize: number = 10
): Promise<IBlog[]> {
  await dbConnect();

  if (!pageQuery) {
    const blogs = await Blog.find({});

    return blogs.map((blog) => blog._doc);
  }

  const blogs = await Blog.find({})
    .skip((page - 1) * pageSize)
    .limit(pageSize);
  return blogs.map((blog) => blog._doc);
}
