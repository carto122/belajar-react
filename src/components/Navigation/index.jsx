import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { RiMenu2Line } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { FaTruckFast } from "react-icons/fa6";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";
import { useState } from "react";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[30%]">
            <Button
              className="!text-[rgba(0,0,0,0.8)] gap-2 w-full !font-bold"
              onClick={() => setIsOpenCatPanel(true)}
            >
              <RiMenu2Line className="text-[18px]" />
              Toko by categories
              <LiaAngleDownSolid className="text-[18px] ml-auto" />
            </Button>
          </div>

          <div className="col_1 w-[65%]">
            <ul className="flex items-center gap-3 !font-bold">
              <li
                className="relative list-none"
                onMouseEnter={() => handleMouseEnter("fashion")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>
                {openMenu === "fashion" && (
                  <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md transition-all">
                    <ul>
                      <li className="relative list-none w-full text-[12px]">
                        <Link to="/">
                          <button className="w-full cursor-pointer text-left px-2 py-2 transition hover:bg-gray-100 !text-[rgba(0,0,0,0.8)]">
                            Fashion Pria
                          </button>
                        </Link>
                      </li>
                      <li className="relative list-none w-full text-[12px]">
                        <Link to="/">
                          <button className="w-full cursor-pointer text-left px-2 py-2 transition hover:bg-gray-100 !text-[rgba(0,0,0,0.8)]">
                            Fashion Wanita
                          </button>
                        </Link>
                      </li>
                      <li className="relative list-none w-full text-[12px]">
                        <Link to="/">
                          <button className="w-full cursor-pointer text-left px-2 py-2 transition hover:bg-gray-100 !text-[rgba(0,0,0,0.8)]">
                            Fashion Anak
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li className="relative list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Elektronik
                  </Button>
                </Link>
              </li>
              <li className="relative list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Makanan
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_1 w-[15%]">
            <p className="flex items-center gap-1 text-[14px] font-[500]">
              <FaTruckFast />
              Gratis Ongkir
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        setIsOpenCatPanel={setIsOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
