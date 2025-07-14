import { BlogCard } from '@/components/_home/BlogCard';
import { PageWrapper } from '@/components/PageWrapper';
import { IBlog } from '@/lib/models/Blog';
import { GetBlogs } from './api/blog/route';

export default async function Home() {
  const blogData: IBlog[] = await GetBlogs();
  // const blogData: IBlog[] = [
  //   {
  //     id: 12,
  //     title: 'Local Test',
  //     content: 'Here is content',
  //     description: 'Here is description',
  //     pinned: true,
  //     tags: ['tag1', 'tag2'],
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
