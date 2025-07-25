import { model, models, Schema } from 'mongoose';

export interface IBlog {
  id: number;
  title: string;
  description: string;
  pinned: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    id: {
      type: Number,
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    pinned: { type: Boolean, default: false },
    tags: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

const Blog = models.Blog || model<IBlog>('Blog', BlogSchema);

export default Blog;
