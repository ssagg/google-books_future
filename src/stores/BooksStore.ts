import { makeAutoObservable, runInAction } from "mobx";
import { searchBooks, searchByBook, searchMoreBooks } from "../api/api";
import { Book, Books } from "../models/model";

export class BooksStore {
  books!: Books;
  isLoading: boolean = false;
  isLoadingMore: boolean = false;
  category: string | null = "";
  order: string | null = "";
  searchQuery: string = "";
  book!: Book;

  constructor() {
    makeAutoObservable(this);
  }

  getBooks = async (
    searchQuery: string,
    category: string | null,
    orderBy: string | null
  ) => {
    try {
      this.isLoading = true;
      const data = await searchBooks(searchQuery, category, orderBy);

      runInAction(() => {
        this.books = data;
      });
      this.isLoading = false;
    } catch (error: any) {
      console.log(error);

      this.isLoading = false;
    }
  };

  getMoreBooks = async (
    searchQuery: string,
    category: string | null,
    orderBy: string | null
  ) => {
    try {
      this.isLoadingMore = true;
      const data = await searchMoreBooks(searchQuery, category, orderBy);
      runInAction(() => {
        data.items = [...this.books.items, ...data.items];
        this.books = data;
      });
      this.isLoadingMore = false;
    } catch (error) {
      this.isLoadingMore = false;
      console.error(error);
    }
  };

  getBook = async (id: string | undefined) => {
    try {
      this.isLoading = true;
      const data = await searchByBook(id);
      runInAction(() => {
        this.book = data;
      });
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      console.error(error);
    }
  };

  setStoreCategory = (category: string | null) => {
    this.category = category;
  };
  setStoreOrder = (order: string | null) => {
    this.order = order;
  };
  setStoreSearchQuery = (searchQuery: string) => {
    this.searchQuery = searchQuery;
  };
}

export const bookStore = new BooksStore();
