// components/PageWrapper.tsx
import { FC, ReactNode } from 'react';

interface props {
  children?: ReactNode;
}
export const PageWrapper: FC<props> = ({ children }) => {
  return <div className="flex flex-col gap-6 mt-6">{children}</div>;
};
