import { Oval } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-[#030303] opacity-[0.7]">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#FA7B26"
        secondaryColor="#FA7B26"
        strokeWidth={5}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
