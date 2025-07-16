import { PageWrapper } from '@/components/page-wrapper';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function About() {
  const markdown = `
  # 123
    A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

  * Lists
  * [ ] todo
  * [x] done


  `;

  return (
    <>
      <PageWrapper>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </PageWrapper>
    </>
  );
}
