import { IBlog } from '@/lib/models/Blog';
import { BlogCard } from './_home/BlogCard';
import { GetBlogs } from './api/blog/route';

export default async function Home() {
  const blogData: IBlog[] = await GetBlogs();

  return (
    <div className="flex flex-col gap-6 mt-6">
      {blogData.map((item) => (
        <BlogCard {...item} key={item.id.toString()} />
      ))}
    </div>
  );
}
