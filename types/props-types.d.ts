// test
export type TestData = Array<{
  id: number;
  title: string;
  content: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}>

export type SignupData = {
  username: string;
  email: string;
  password: string;
}

export type LoginData = {
  email: string;
  password: string;
}

export type CreateArticle = {
  title: string;
  content: string;
}