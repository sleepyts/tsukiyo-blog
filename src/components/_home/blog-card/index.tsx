'use client';
import { Calendar, ChevronRight, Pin, Tag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  pinned: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col p-4 border rounded-md gap-4 md:gap-6">
      <div className="flex justify-between items-start">
        <p className="text-xl md:text-2xl hover:cursor-pointer hover:text-red-700 transition duration-100">
          {props.title}
        </p>
        {props.pinned && (
          <div className="flex items-center gap-1 shrink-0">
            <Pin className="w-3.5" />
            <span className="hidden sm:inline-block text-xs">pinned</span>
          </div>
        )}
      </div>

      <p className="font-light text-sm md:text-base">{props.description}</p>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5" />
          <span className="text-xs">
            {props.createdAt.toLocaleDateString()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Tag className="w-3.5" />
          <div className="flex flex-wrap gap-1">
            {props.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:mt-0 ml-0 md:ml-auto flex items-center gap-2 hover:cursor-pointer hover:text-red-500 transition duration-100">
          <span
            className="text-xs"
            onClick={() => {
              router.push(`/blog-detail/${props.id}`);
            }}
          >
            Read More
          </span>
          <ChevronRight className="w-3.5" />
        </div>
      </div>
    </div>
  );
};
