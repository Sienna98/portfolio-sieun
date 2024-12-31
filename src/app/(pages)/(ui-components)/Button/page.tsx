const ButtonPage = () => {
  return (
    <article className="flex flex-col gap-5">
      <div className="text-xl font-bold">Button</div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-[#969696] text-md">default</span>
          <button className="block w-36 h-12 text-sm font-medium text-[#58CE8F] bg-white border border-[#58CE8F] rounded-md transition duration-500 cursor-pointer hover:bg-[#58CE8F] hover:text-white">
            Alert-1
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-[#969696] text-md">
            :disabled
          </span>
          <button className="block w-36 h-12 text-sm font-medium rounded-md text-[#969696] bg-[#E8E8E8] cursor-not-allowed">
            Alert-2
          </button>
        </div>
      </div>
    </article>
  );
};

export default ButtonPage;
