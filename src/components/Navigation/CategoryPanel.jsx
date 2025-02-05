import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { useState, useCallback } from "react";

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = useCallback(
    (newOpen) => () => {
      setIsOpenCatPanel(newOpen);
    },
    [setIsOpenCatPanel]
  );

  const toggleSubmenu = useCallback((index) => {
    setSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
    setInnerSubmenuIndex(null); // Reset inner submenu saat submenu utama berubah
  }, []);

  const toggleInnerSubmenu = useCallback((index) => {
    setInnerSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  const categories = [
    {
      name: "Fashion",
      link: "/",
      subcategories: [
        {
          name: "Fashion Pria",
          link: "/",
          innerSubcategories: [
            { name: "Atasan Pria", link: "/" },
            { name: "Kaos Pria", link: "/" },
            { name: "Celana Pria", link: "/" },
            { name: "Sepatu Pria", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Elektronik",
      link: "/",
      subcategories: [
        {
          name: "komputer PC",
          link: "/",
          innerSubcategories: [
            { name: "Monitor", link: "/" },
            { name: "Keyboard", link: "/" },
            { name: "Mouse", link: "/" },
            { name: "CPU & GPU PC", link: "/" },
          ],
        },
      ],
    },
    {
      name: "TAS",
      link: "/",
    },
    {
      name: "MAKANAN",
      link: "/",
    },
    {
      name: "SAYURAN",
      link: "/",
    },
    {
      name: "KECANTIKAN",
      link: "/",
    },
    {
      name: "KESEHATAN",
      link: "/",
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Toko by categories{" "}
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          {categories.map((category, index) => (
            <li key={index} className="list-none flex flex-col relative">
              <Link to={category.link} className="w-full">
                <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                  {category.name}
                </Button>
              </Link>

              {submenuIndex === index ? (
                <MdOutlineIndeterminateCheckBox
                  className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={() => toggleSubmenu(index)}
                />
              ) : (
                <FaRegPlusSquare
                  className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={() => toggleSubmenu(index)}
                />
              )}

              {submenuIndex === index && (
                <ul className="relative w-full pl-3 bg-white rounded z-10">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className="list-none relative">
                      <Link to={subcategory.link} className="w-full">
                        <Button className="submenu w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                          {subcategory.name}
                        </Button>
                      </Link>

                      {innerSubmenuIndex === subIndex ? (
                        <MdOutlineIndeterminateCheckBox
                          className="absolute top-[10px] right-[15px] cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleInnerSubmenu(subIndex);
                          }}
                        />
                      ) : (
                        <FaRegPlusSquare
                          className="absolute top-[10px] right-[15px] cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleInnerSubmenu(subIndex);
                          }}
                        />
                      )}

                      {innerSubmenuIndex === subIndex && (
                        <ul className="relative w-full pl-3 bg-white rounded">
                          {subcategory.innerSubcategories.map(
                            (innerSub, innerIndex) => (
                              <li key={innerIndex} className="list-none">
                                <Link to={innerSub.link} className="w-full">
                                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                                    {innerSub.name}
                                  </Button>
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
