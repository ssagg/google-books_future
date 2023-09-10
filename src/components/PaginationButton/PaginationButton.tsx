import { Button } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { bookStore } from "../../stores/BooksStore";

const PaginationButton = observer(() => {
  const handleLoadMore = () => {
    const { books, getMoreBooks } = bookStore;
    const category = bookStore.category;
    const order = bookStore.order;
    const req = bookStore.searchQuery;
    const startIndex = books.items.length;
    console.log(startIndex);
    console.log(category);

    getMoreBooks(req, category, order);
  };

  return <Button onClick={handleLoadMore}>Load more</Button>;
});

export default PaginationButton;
