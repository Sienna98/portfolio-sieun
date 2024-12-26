const Home = () => {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto p-6">
      <div className="mb-2">
        <h1 className=" text-3xl font-semibold">Welcome back</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4"></div>
      </div>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className=" text-2xl font-semibold">Newest songs</h1>
        </div>
        <div>List of Songs</div>
      </div>
    </div>
  );
};

export default Home;
