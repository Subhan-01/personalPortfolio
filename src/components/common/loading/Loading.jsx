import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
<<<<<<< HEAD
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

=======
    <div
      className={`flex justify-center items-center fixed bottom-0 bg-white h-[100vh] w-[100vw] mx-auto z-50 `}
    >
      <HashLoader color="#A53DFF" speedMultiplier={2} size={80} />
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
    </div>
  );
};

<<<<<<< HEAD
export default Loading;
=======
export default Loading;
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
