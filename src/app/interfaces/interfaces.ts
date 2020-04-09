// Interface created by JSON to Ts Plugin
// ctrl + shift + alt + v
interface ResponseTopHeadlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  source: Source;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

interface Source {
  id?: string;
  name: string;
}