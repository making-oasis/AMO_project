import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useRouter } from "next/router";

type Props = {
  items: [];
  pageCount: number;
  renderItem: unknown;
};

const PaginatedList: React.FC<Props> = ({ items, pageCount, renderItem }) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;

  const handlePageChange = (e: React.ChangeEvent, page: number) => {
    const { pathname, query } = router;
    query.page = `${page}`;
    router.push({
      pathname,
      query,
    });
  };

  return (
    <div>
      {/* このitemsとrenderItemは親からchildrenでlistを渡せばいいだけでした... */}
      {items.map((item) => renderItem(item))}
      <Pagination
        page={currentPage}
        count={pageCount}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PaginatedList;
