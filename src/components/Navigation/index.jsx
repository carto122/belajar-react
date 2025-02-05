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

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          {/* Menu Kategori */}
          <div className="col_1 w-[30%]">
            <Button
              className="!text-[rgba(0,0,0,0.8)] gap-2 w-full !font-bold"
              onClick={openCategoryPanel}
            >
              <RiMenu2Line className="text-[18px]" />
              Toko by categories
              <LiaAngleDownSolid className="text-[18px] ml-auto" />
            </Button>
          </div>

          {/* Menu Navigasi */}
          <div className="col_1 w-[65%]">
            <ul className="flex items-center gap-3 !font-bold">
              {[
                "Home",
                "Fashion",
                "Elektronik",
                "Tas",
                "Makanan",
                "Sayuran",
                "Kecantikan",
                "Kesehatan",
              ].map((menu, index) => (
                <li key={index} className="list-none relative">
                  <Link
                    to="/"
                    className="link transition text-[14px] font-[500]"
                  >
                    <Button className="link transition !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                      {menu}
                    </Button>
                  </Link>

                  {/* Submenu untuk Fashion */}
                  {menu === "Fashion" && (
                    <div className="submenu absolute top-[100%] left-[0%] min-w-[300px] bg-white shadow-md">
                      <ul>
                        {[
                          "FASHION PRIA",
                          "FASHION WANITA",
                          "FASHION ANAK",
                          "FASHION BAYI",
                        ].map((subMenu, subIndex) => (
                          <li key={subIndex} className="list-none w-full">
                            <button className="w-full text-left px-4 py-2 transition hover:bg-gray-100 !text-[rgba(0,0,0,0.8)]">
                              {subMenu}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Info Gratis Ongkir */}
          <div className="col_1 w-[15%]">
            <p className="flex items-center gap-1 text-[13px] font-[500]">
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
