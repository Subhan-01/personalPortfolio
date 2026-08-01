import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950">

      <HashLoader
        color="#7C3AED"
        speedMultiplier={1.5}
        size={70}
      />

      <h2 className="mt-8 text-2xl font-bold text-white">
        Subhan Imran
      </h2>

      <p className="mt-2 text-slate-400 text-sm tracking-wider">
        Web Developer & Programming Mentor
      </p>

      <div className="mt-8 w-52 h-1 rounded-full bg-slate-800 overflow-hidden">
        <div className="h-full w-full animate-pulse bg-violet-600"></div>
      </div>

    </div>
  );
};

export default Loading;