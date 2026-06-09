import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD

const Address = ({ item }) => {
  return (
    <div
      className="
        m-1
        group
        max-w-96
        p-5
        flex
        items-start
        gap-4
        rounded-2xl
        bg-white
        border
        border-slate-100
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-violet-100
        cursor-pointer
      "
    >
      {/* Icon */}
      <div
        className="
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          bg-violet-100
          text-violet-600
          transition-all
          duration-300
          group-hover:bg-violet-600
          group-hover:text-white
        "
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className="text-lg"
        />
      </div>

      {/* Content */}
      <div>
        <p className="text-sm text-slate-500 mb-1">
          {item?.title}
        </p>

        <p className="text-base font-semibold text-slate-800 break-words">
=======
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-[10px] bg-white  hover:scale-[1] duration-450  cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,_0,_0,_0.1)] shadow-gray-200 max-sm:mx-auto"
      /* Scale effect:  */
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-10 md:h-12 aspect-square ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
        } center rounded-[4px]`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-lg md:text-xl ${
            hover ? "text-white" : "text-picto-primary"
          }`}
        />
      </div>
      <div className="ms-3.25">
        <p className="text-[12px] md:text-[14px] text-[#424E60] font-normal">
          {item?.title}:
        </p>
        <p className="text-[14px] md:text-[16px] text-[#132238] font-medium">
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
          {item?.description}
        </p>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Address;
=======
export default Address;
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
