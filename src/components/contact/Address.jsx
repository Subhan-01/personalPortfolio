import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Address = ({ item }) => {
  return (
    <div
      className="
        group
        m-2
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
        <FontAwesomeIcon icon={item?.icon} className="text-lg" />
      </div>

      {/* Content */}
      <div>
        <p className="text-sm text-slate-500 mb-1">
          {item?.title}
        </p>

        <p className="text-base font-semibold text-slate-800 break-words">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;