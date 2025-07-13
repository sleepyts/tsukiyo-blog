import { model, models, Schema } from 'mongoose';

export interface IBlog extends Document {
  id: number;
  title: string;
  description: string;
  pinned: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pinned: { type: Boolean, default: false },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Blog = models.Blog || model<IBlog>('Blog', BlogSchema);

export default Blog;
