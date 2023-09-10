import { API_KEY, BASE_URL } from "../constants/constants";
import { bookStore } from "../stores/BooksStore";

export const searchBooks = async (
  request: string,
  category: string | null,
  orderBy: string | null
) => {
  if (category !== "all") {
    const resp = await fetch(
      `${BASE_URL}?q=${request}+subject:${category}&orderBy=${orderBy}&maxResults=30&key=${API_KEY}`
    );
    const data = resp.json();

    return data;
  } else {
    const resp = await fetch(
      `${BASE_URL}?q=${request}&orderBy=${orderBy}&maxResults=30&key=${API_KEY}`
    );
    const data = resp.json();

    return data;
  }
};

export const searchMoreBooks = async (
  request: string,
  category: string | null,
  orderBy: string | null
) => {
  const { books } = bookStore;
  if (category !== "all") {
    const resp = await fetch(
      `${BASE_URL}?q=${request}+subject:${category}&orderBy=${orderBy}&maxResults=30&startIndex=${books.items.length}&key=${API_KEY}`
    );
    const data = resp.json();

    return data;
  } else {
    const resp = await fetch(
      `${BASE_URL}?q=${request}&orderBy=${orderBy}&maxResults=30&startIndex=${books.items.length}&key=${API_KEY}`
    );
    const data = resp.json();

    return data;
  }
};

export const searchByBook = async (
  id: string | undefined
)=> {
  const resp = await fetch(`${BASE_URL}/${id}?key=${API_KEY}`);
  const data = resp.json();

  return data;
};
