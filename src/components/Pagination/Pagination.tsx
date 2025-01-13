import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  onChangePage: (page: number) => void;
  per_page: number;
  total_pages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  onChangePage,
  per_page,
  total_pages,
}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={per_page}
      pageCount={total_pages}
    />
  );
};

export default Pagination;
