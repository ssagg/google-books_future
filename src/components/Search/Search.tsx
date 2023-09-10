import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { bookStore } from "../../stores/BooksStore";

import styles from "./Header.module.scss";
import { Button, Select, TextInput } from "@mantine/core";

const optionsCategory = [
  { value: "all", label: "All" },
  { value: "art", label: "Art" },
  { value: "biography", label: "Biography" },
  { value: "computers", label: "Computers" },
  { value: "history", label: "History" },
  { value: "medical", label: "Medical" },
  { value: "poetry", label: "Poetry" },
];
const optionsSorting = [
  { value: "relevance", label: "Relevance" },
  { value: "newest", label: "Newest" },
];

const Search = () => {
  const { getBooks, setStoreCategory, setStoreOrder, setStoreSearchQuery } =
    bookStore;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [category, setCategory] = useState<string | null>("all");
  const [order, setOrder] = useState<string | null>("relevance");

  const navigate = useNavigate();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
    setStoreSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getBooks(searchQuery, category, order);
    setStoreCategory(category);
    setStoreOrder(order);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1>Search for books</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextInput
          placeholder='Enter search request'
          value={searchQuery}
          onChange={onChange}
          required
          name='search'
          onKeyDown={(e) => (e.key === "Enter" ? handleSubmit : null)}
        />

        <div className={styles.filters}>
          <Select
            label='Category'
            data={optionsCategory}
            value={category}
            onChange={setCategory}
          />
          <Select
            label='Sorting by'
            data={optionsSorting}
            value={order}
            onChange={setOrder}
          />
        </div>

        <Button type='submit' className={styles.button}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
