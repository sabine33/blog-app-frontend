export type UserType = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  createdAt: Date;
};

export type ArticleType = {
  id: number;
  userId: number;
  title: string;
  content: string;
  thumbnailUrl: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  status: boolean;
  isFeatured?: boolean;
  category?: string;
};
