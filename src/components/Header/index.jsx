import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-100 border-b-[1px]">
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
    </header>
  );
};

export default Header;
