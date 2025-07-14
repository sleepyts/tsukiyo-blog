import { getBlogContent } from '@/app/api/blog/route';
import { PageWrapper } from '@/components/PageWrapper';
import { useCurrentBlogId } from '@/hooks/useCurrentBlogId';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const BlogDetail: FC<{ params: { id: string } }> = async ({
  params,
}) => {
  const blogId = params.id;
  const blogContent = await getBlogContent(Number(blogId));

  return (
    <PageWrapper>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{blogContent}</ReactMarkdown>
    </PageWrapper>
  );
};

export default BlogDetail;
