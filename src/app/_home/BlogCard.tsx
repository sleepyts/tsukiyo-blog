import { IBlog } from '@/lib/models/Blog';
import { Calendar, ChevronRight, Pin, Tag } from 'lucide-react';

export function BlogCard(props: IBlog) {
  return (
    <div className="flex flex-col p-4 border rounded-md gap-6">
      <div className="flex justify-between">
        <p className="text-2xl hover:cursor-pointer hover:text-red-700 transition duration-100 ">
          {props.title}
        </p>
        {props.pinned && (
          <div className="flex items-center gap-1">
            <Pin className="w-3.5" />
            <span className="text-xs">pinned</span>
          </div>
        )}
      </div>
      <p className=" font-light">{props.description}</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5" />
          <span className="text-xs">
            {props.createdAt.toLocaleDateString()}
          </span>
        </div>
        <div className="flex items-center gap-2 ">
          <Tag className="w-3.5" />
          <span className="text-xs">{props.tags.join(' | ')}</span>
        </div>
        <div className="flex items-center gap-2 ml-auto hover:cursor-pointer hover:text-red-500 transition duration-100">
          <span className="text-xs">Read More</span>
          <ChevronRight className="w-3.5" />
        </div>
      </div>
    </div>
  );
}
