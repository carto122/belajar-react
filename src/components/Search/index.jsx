import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50%] bg-[#e5e5e5] radius-[5px] relative p-2">
      <input
        type="text"
        placeholder="Cari Produk"
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
      />
      <Button className="!absolute top-[8px] right-[5px] !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black">
        <SearchIcon>Search</SearchIcon>
      </Button>
    </div>
  );
};

export default Search;
