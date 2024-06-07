import { usePagination } from "./../../hooks/UsePagination";

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    selectedType
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    selectedType
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="pt-6 min-[1280px]:pt-8 w-full min-[930px]:w-1/3 flex space-x-2 items-center justify-end text-xs xl:text-base">
      {/* Left navigation arrow */}
      <button
        className={`text-blue_3 ${
          currentPage === 1 ? "pointer-events-none" : "pointer-events-auto"
        } ${currentPage === 1 && "text-text_2"} `}
        onClick={onPrevious}
      >
        &lt; <span> Previous</span>
      </button>
      {paginationRange.map(pageNumber => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === "DOTS") {
          return <button className={`text-blue_3`}>&#8230;</button>;
        }

        // Render our Page Pills
        return (
          <button
            className={`${
              currentPage === pageNumber
                ? "bg-blue_3 text-white"
                : "bg-transparent text-blue_3"
            }
             w-[30px] xl:w-10 h-[30px] xl:h-10 rounded-[10px] `}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      {/*  Right Navigation arrow */}
      <button
        className={`text-blue_3 ${
          currentPage === lastPage
            ? "pointer-events-none"
            : "pointer-events-auto"
        } ${currentPage === lastPage && "text-text_2"} `}
        onClick={onNext}
      >
        <span>Next </span> &gt;
      </button>
    </div>
  );
};

export default Pagination;
