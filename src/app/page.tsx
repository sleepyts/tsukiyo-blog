import { BlogCard } from '@/components/_home/blog-card';
import { PageWrapper } from '@/components/page-wrapper';
import { IBlog } from '@/lib/models/Blog';
import { GetBlogs } from './api/blogs/route';

export default async function Home() {
  const blogData: IBlog[] = await GetBlogs();

  // const blogData: IBlog[] = [
  //   {
  //     id: 1,
  //     title: '123',
  //     description: '123',
  //     pinned: false,
  //     tags: [],
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // ];
  return (
    <PageWrapper>
      {blogData.map((item) => (
        <BlogCard {...item} key={item.id.toString()} />
      ))}
    </PageWrapper>
  );
}
