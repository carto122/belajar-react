import { Link } from "react-router-dom";
import Search from "../Search";
import { IconButton, Badge, Tooltip } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-200 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between text-menu">
            <div className="col1 w-[50%]">
              <p className="text-[13px] text-[#848b95] font-[500]">
                Dapatkan diskon hingga 50% untuk gaya baru, hanya untuk waktu
                terbatas.
              </p>
            </div>

            <div className="col2 items-center justify-end">
              <ul className="flex items-center gap-2">
                <li className="list-none">
                  <Link className="text-[13px] text-[#848b95] hover:text-[#ff5252]">
                    Pusat Bantuan
                  </Link>
                </li>
                <li className="list-none">
                  <Link className="text-[13px] text-[#848b95] hover:text-[#ff5252]">
                    Lacak Pesanan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="haeder py-3">
        <div className="container flex items-center justify-between">
          <div className="col w-[30%]">
            <Link to={"/"}>
              <img src="/logo.jpg" alt="logo" />
            </Link>
          </div>
          <div className="col w-[40%]">
            <Search />
          </div>
          <div className="col w-[30%] flex items-center pl-7">
            <div className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  className="transition text-[15px] font-[500] hover:text-[#ff5252]"
                  to={"/login"}
                >
                  Masuk
                </Link>
                &nbsp;&nbsp;
                <Link
                  className="transition text-[15px] font-[500] hover:text-[#ff5252]"
                  to={"/register"}
                >
                  Registrasi
                </Link>
              </li>

              <li className="list-none">
                <Tooltip title="compare">
                  <IconButton aria-label="compare">
                    <Badge badgeContent={4} color="secondary">
                      <SyncIcon className="hover:text-[#ff5252] transition"></SyncIcon>
                    </Badge>
                  </IconButton>
                </Tooltip>
              </li>

              <li className="list-none">
                <Tooltip title="Wish List">
                  <IconButton aria-label="wishlist">
                    <Badge badgeContent={4} color="secondary">
                      <FavoriteBorderIcon className="hover:text-[#ff5252] transition"></FavoriteBorderIcon>
                    </Badge>
                  </IconButton>
                </Tooltip>
              </li>

              <li className="list-none">
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <Badge badgeContent={4} color="secondary">
                      <ShoppingCartIcon className="hover:text-[#ff5252] transition"></ShoppingCartIcon>
                    </Badge>
                  </IconButton>
                </Tooltip>
              </li>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
