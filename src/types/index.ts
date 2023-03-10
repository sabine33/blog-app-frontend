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

export type UserType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: null;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
};

export type APIResponseType = {
  data: any;
  message: string;
  status: boolean;
  statusCode: number;
};

export type AdminArticleType = {
  title: string;
  content: string;
  thumbnail: File;
};

type ContentType = "error" | "notification";
export type MessageType = {
  type: ContentType | null;
  content: string;
};
