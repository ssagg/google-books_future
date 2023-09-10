export interface Books {
  items: Book[];
  totalItems: number;
}

export interface Book {
  id: string;
  etag: string;
  volumeInfo: {
    title: string;
    categories: string[];
    authors: string[];
    imageLinks: { thumbnail: string };
    description: string;
  };
  authors: string[];
}
