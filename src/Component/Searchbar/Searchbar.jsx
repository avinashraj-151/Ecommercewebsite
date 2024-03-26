import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { dark } from "@mui/material/styles/createPalette";
const searchData = [
  {
    name: "Fashion",
    image:
      "https://media.istockphoto.com/id/956676812/photo/construction-rebar-steel-work-reinforcement-in-conncrete-structure-of-building.jpg?s=612x612&w=0&k=20&c=SMHVt0ztq2mf99tnsTgGvqKFDwWO7Cr7urHizT7pwxE=",
  },
  {
    name: "Shirt",
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  },
  {
    name: "Jacket",
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  },
  {
    name: "Mobile",
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
  },
  {
    name: "Laptop",
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  },
  {
    name: "Home",
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  },
  {
    name: "book",
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  },
];
function Searchbar() {
  const [Search, setSearch] = useState("");
  const filterSearch = searchData.filter((Data) => {
    return Data.name.toLowerCase().includes(Search.toLowerCase());
  });
  return (
    <div>
      {/* search input */}
      <div className="flex  rounded-lg gap-2  items-center px-1 bg-[#474747] w-96">
        <SearchIcon className="text-white cursor-pointer"></SearchIcon>
        <input
          type="text"
          placeholder="Search..."
          className="outline-none  px-2 py-2  placeholder-gray-400 bg-[#474747] rounded-lg text-white text-xl  items-center"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* drop down */}
      <div className="flex justify-center">
        {Search && (
          <div className="block w-96 bg-gray-200 absolute rounded-lg my-1 px-2 py-2 z-50 shadow-xl">
            {filterSearch.length > 0 ? (
              <>
                {filterSearch.map((data) => {
                  return (
                    <div key={data.name} className="py-2 px-2">
                      <div className="flex items-center gap-2">
                        <img className="w-10" src={data.image} alt="" />
                        {data.name}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    className=" w-20"
                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                    alt="img"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
