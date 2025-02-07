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
            { name: "Atasan", link: "/" },
            { name: "Bawahan", link: "/" },
            { name: "Pakaian Formal", link: "/" },
            { name: "Pakaian Olahraga & santai", link: "/" },
            { name: "Pakaian dalam & aksesoris", link: "/" },
            { name: "Pakaian tradisional dan khusus", link: "/" },
          ],
        },

        {
          name: "Fashion Wanita",
          link: "/",
          innerSubcategories: [
            { name: "Atasan", link: "/" },
            { name: "Bawahan", link: "/" },
            { name: "Dress & Jumpsuit", link: "/" },
            { name: "Pakaian Formal & Outerwear", link: "/" },
            { name: "Pakaian muslim & aksesoris", link: "/" },
            { name: "Pakaian olahraga & santai", link: "/" },
            { name: "Pakaian dalam dan aksesoris", link: "/" },
          ],
        },
        {
          name: "Fashion Anak",
          link: "/",
          innerSubcategories: [
            { name: "Pakaian Bayi", link: "/" },
            { name: "Pakaian Anak Balita", link: "/" },
            { name: "Pakaian Anak Sekolah", link: "/" },
            { name: "Pakaian Tidur & Rumah", link: "/" },
            { name: "Pakaian Musim dingin & Outdoor", link: "/" },
            { name: "Pakaian Khusus dan Kostum", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Elektronik",
      link: "/",
      subcategories: [
        {
          name: "Konsumen",
          link: "/",
          innerSubcategories: [
            { name: "Smartphone", link: "/" },
            { name: "Laptop & Komputer", link: "/" },
            { name: "Aksesoris Gadget", link: "/" },
            { name: "Kamera & Aksesoris", link: "/" },
            { name: "Peralatan Gaming", link: "/" },
            { name: "Wearable Devices", link: "/" },
          ],
        },
        {
          name: "Rumah Tangga",
          link: "/",
          innerSubcategories: [
            { name: "Televisi", link: "/" },
            { name: "Pendingin", link: "/" },
            { name: "Peralatan Dapur", link: "/" },
            { name: "Peralatan Kebersihan", link: "/" },
            { name: "Mesin cuci dan pengering", link: "/" },
          ],
        },
        {
          name: "Otomotif",
          link: "/",
          innerSubcategories: [
            { name: "Audio Mobil", link: "/" },
            { name: "Aksesoris mobil elektrik", link: "/" },
            { name: "Alarm & keamanan", link: "/" },
          ],
        },
        {
          name: "Industri & Profesional",
          link: "/",
          innerSubcategories: [
            { name: "Peralatan Jaringan & Komunikasi", link: "/" },
            { name: "Peralatan Kantor", link: "/" },
            { name: "Perlatan Media", link: "/" },
          ],
        },
        {
          name: "Energi & Listrik",
          link: "/",
          innerSubcategories: [
            { name: "Lampu & Pencahayaan", link: "/" },
            { name: "Peralatan Listrik", link: "/" },
            { name: "Baterai & Charger", link: "/" },
          ],
        },
      ],
    },
    {
      name: "MAKANAN",
      link: "/",
      subcategories: [
        {
          name: "Makanan Pokok",
          link: "/",
          innerSubcategories: [
            { name: "Beras", link: "/" },
            { name: "Gandum", link: "/" },
            { name: "Jagung", link: "/" },
          ],
        },
        {
          name: "Makanan Utama",
          link: "/",
          innerSubcategories: [
            { name: "Daging", link: "/" },
            { name: "Seafood", link: "/" },
            { name: "Susu & Keju", link: "/" },
          ],
        },
      ],
    },
    {
      name: "SAYURAN",
      link: "/",
      subcategories: [
        {
          name: "Sayuran Daun",
          link: "/",
          innerSubcategories: [
            { name: "Bayam", link: "/" },
            { name: "Kangkung", link: "/" },
            { name: "Sawi", link: "/" },
            { name: "Salada", link: "/" },
          ],
        },
        {
          name: "Sayuran Buah",
          link: "/",
          innerSubcategories: [
            { name: "Tomat", link: "/" },
            { name: "Terong", link: "/" },
            { name: "Cabai", link: "/" },
            { name: "Labu siam", link: "/" },
          ],
        },
        {
          name: "Sayuran Ubi",
          link: "/",
          innerSubcategories: [
            { name: "Wortel", link: "/" },
            { name: "Kentang", link: "/" },
            { name: "Ubi", link: "/" },
            { name: "Talas", link: "/" },
          ],
        },
        {
          name: "Sayuran Bunga",
          link: "/",
          innerSubcategories: [
            { name: "Brokoli", link: "/" },
            { name: "Kembang kol", link: "/" },
            { name: "Bunga Pepaya", link: "/" },
            { name: "Bunga turi", link: "/" },
          ],
        },
        {
          name: "Sayuran Kacang",
          link: "/",
          innerSubcategories: [
            { name: "Buncis", link: "/" },
            { name: "Kacang panjang", link: "/" },
            { name: "kacang merah muda", link: "/" },
            { name: "kacang kedelai", link: "/" },
          ],
        },
        {
          name: "Sayuran Jamur",
          link: "/",
          innerSubcategories: [
            { name: "Jamur Tiam", link: "/" },
            { name: "Jamur kancing", link: "/" },
            { name: "Jamur kuping", link: "/" },
            { name: "Jamur shiitake", link: "/" },
          ],
        },
      ],
    },
    {
      name: "KESEHATAN",
      link: "/",
      subcategories: [
        {
          name: "Suplemen & Vitamin",
          link: "/",
          innerSubcategories: [
            { name: "Multivitamin", link: "/" },
            { name: "Mineral", link: "/" },
            { name: "Suplemen Herbal", link: "/" },
            { name: "Probiotik & Prebiotik", link: "/" },
          ],
        },
        {
          name: "Alat Kesehatan",
          link: "/",
          innerSubcategories: [
            { name: "Ukur Kesehatan", link: "/" },
            { name: "Alat Bantu Medis", link: "/" },
            { name: "Alat Terapi", link: "/" },
            { name: "Alat Tes Medis", link: "/" },
          ],
        },
        {
          name: "Kesehatan KUlit & Tubuh",
          link: "/",
          innerSubcategories: [
            { name: "Kulit", link: "/" },
            { name: "Rambut", link: "/" },
          ],
        },
      ],
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
