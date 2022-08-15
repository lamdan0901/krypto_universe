interface PaginationProps {
  cardsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate(pageNum: number): void;
}

const Pagination = ({
  cardsPerPage,
  currentPage,
  totalPosts,
  paginate,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="crypto-pagination">
        {pageNumbers.map((pageNum) => (
          <li
            key={pageNum}
            className={
              pageNum === currentPage ? "page-item disabled" : "page-item"
            }
            onClick={() => paginate(pageNum)}
          >
            {pageNum}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
