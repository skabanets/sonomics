import { Oval } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="bg-backdropBgColor fixed inset-0 z-[100] flex h-full w-full items-center justify-center">
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
