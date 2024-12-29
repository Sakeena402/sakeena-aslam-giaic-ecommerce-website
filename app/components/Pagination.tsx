import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "./ui/pagination"

  

export function PaginationDemo({
  totalItems = 30,
  itemsPerPage = 5,
  currentPage,
  onPageChange,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent className="space-x-8">
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            size={undefined}
            onClick={(e) => {
              e.preventDefault();
              handlePrevious();
            }}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === currentPage}
              size={undefined}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis for large numbers */}
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            size={undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNext();
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}














//   export function PaginationDemo() {
//     return (
//       <Pagination>
//         <PaginationContent className=" space-x-8">
//           <PaginationItem>
//             <PaginationPrevious href="#" size={undefined} />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#" size={undefined}>1</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#" isActive size={undefined}>
//               2
//             </PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#" size={undefined}>3</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationEllipsis />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationNext href="#" size={undefined} />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     )
//   }