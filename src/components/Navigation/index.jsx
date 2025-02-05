import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  return (
    <>
      <nav className="py-2 border-t-[1px] border-gray-200 border-b-[1px]">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[30%] ">
            <Button className="!text-black gap-2 w-full !font-bold">
              <MenuIcon className="text-[18px]"></MenuIcon>
              Toko by categories
              <ExpandMoreIcon className="text-[18px] ml-auto"></ExpandMoreIcon>
            </Button>
          </div>
          <div className="col_1 w-[65%]">
            <ul className="flex items-center gap-3 !font-bold">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Elektronik
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Tas
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Makanan
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Sayuran
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Kecantikan
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Kesehatan
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_1 w-[15%]">
            <p className="flex items-center gap-1 text-[13px] font-[500]">
              <LocalShippingIcon></LocalShippingIcon>
              Gratis Ongkir
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel />
    </>
  );
};

export default Navigation;
