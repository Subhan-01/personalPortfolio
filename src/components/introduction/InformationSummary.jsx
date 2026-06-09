const InformationSummary = ({ item }) => {
  return (
    <div
      className={`rounded-xl shadow-md 
        sm:bg-[#F6EBFE] sm:backdrop-blur-none
        bg-transparent backdrop-blur-sm text-center`}
    >
      <div className="flex flex-col items-center px-2 py-2 sm:px-4 sm:py-4">
        <p className="text-base sm:text-2xl font-semibold text-gray-700 leading-tight">
          {item.description}
        </p>
        <p className="text-xs sm:text-base font-normal text-gray-500 mt-0 break-words">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;
