import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";
import "./SearchBarCmp.scss";

interface SearchBarCmpProps {
  onSearch: (searchString: string) => void;
}

const SearchBarCmp: FC<SearchBarCmpProps> = ({ onSearch }) => {
  return (
    <div className="search-bar-component shadow">
      <div className="search-bar-icon-wrapper">
        <SearchIcon />
      </div>
      <div className="search-bar-input-wrapper">
        <input
          className="search-bar-input"
          id="search"
          placeholder="Search..."
          onInput={(event) => onSearch((event.target as HTMLInputElement).value)}
          aria-label="search"
        />
      </div>
    </div>
  );
};

export default SearchBarCmp;
