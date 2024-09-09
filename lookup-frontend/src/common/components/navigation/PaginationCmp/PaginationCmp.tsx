import { FC, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import "./PaginationCmp.scss";

interface PaginationCmpProps {
  page: number;
  count: number;
  variant: "outlined" | "text";
  shape: "circular" | "rounded";
  size: "small" | "medium" | "large";
  color: "primary" | "secondary" | "standard";
  change: (page: number) => void;
}

const PaginationCmp: FC<PaginationCmpProps> = ({ page, count, variant, shape, size, color, change }) => {
  const [currentPage, setCurrentPage] = useState(page);

  return (
    <Stack spacing={2} className="pagination-component">
      <Pagination
        page={currentPage}
        count={count}
        variant={variant}
        shape={shape}
        size={size}
        color={color}
        onChange={(_: any, page: number) => {
          setCurrentPage(page);
          change(page);
        }}
      />
    </Stack>
  );
};

export default PaginationCmp;
