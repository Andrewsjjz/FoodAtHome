import SliderIndex from "../components/SliderIndex";

const Index = () => {
  return (
    <>
       <div className="p-5 grid grid-cols-3 gap-5">
        <div className="rounded shadow-lg md:w-80 lg:w-80 sm:w-1/2">
          <img
            className="w-full"
            src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex justify-center sm:text-xs md:text-xs">
            <div className="font-bold mb-2 sm:text-xs md:text-xs lg:text-xl">
              Food
            </div>
          </div>
        </div>

        <div className="rounded shadow-lg md:w-80 lg:w-80 sm:w-1/2">
          <img
            className="w-full"
            src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex justify-center sm:text-xs md:text-xs">
            <div className="font-bold mb-2 sm:text-xs md:text-xs lg:text-xl">
              Grocery
            </div>
          </div>
        </div>

        <div className="rounded shadow-lg md:w-80 lg:w-80 sm:w-1/2">
          <img
            className="w-full"
            src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
            alt="Mountain"
          />
          <div className="px-6 py-4 flex justify-center sm:text-xs md:text-xs">
            <div className="font-bold mb-2 sm:text-xs md:text-xs lg:text-xl">
              Courier
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl m-5">
    <div className="md:flex">
        <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400" alt="Event image"/>
        </div>
        <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Premium</div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">Premium</p>
        <p className="mt-2 text-gray-500">Premium</p>
        </div>
    </div>
    </div>

    <SliderIndex/>



 
     
    </>
  );
};

export default Index;
