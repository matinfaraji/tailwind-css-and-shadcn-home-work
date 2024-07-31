export default function Header() {
  return (
    <div className="flex justify-around w-[100%] ">
      <div className="flex flex-col    ml-[5rem]  w-[60%]">
        <span className="text-4xl font-bold">Scalable Apps</span>
        <span className="text-4xl font-bold ">with frameworks</span>
        <span className="text-[0.875rem] py-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptate et neque earum iste hic consequatur nulla deserunt
          architecto numquam!
        </span>
        <span>
          <button className="bg-black text-white px-[1rem] py-[0.5rem] rounded-[4px] text-[0.875rem]">Download for Free</button>
          <button className="bg-white px-[1rem] py-[0.5rem] rounded-[4px] text-[0.875rem] border-2">
            Github Repo
          </button>
        </span>
      </div>
      <div className=" w-[40%] ">
        <img src="./src/assets/hero-image.svg" alt="" className="w-[700]" />
      </div>
    </div>
  );
}
