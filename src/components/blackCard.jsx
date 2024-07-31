export default function BlackCard() {
  return (
    <>
      <div className=" flex  flex-col items-center justify-center rounded-lg  bg-black w-[68%] mx-[16%] py-[5rem]">
        <div className="text-white text-3xl mb-[2rem]">
          Build faster websites
        </div>
        <div className="text-white mb-[2rem] px-[5rem]">
          Pull content from anywhere and serve it fast with Astro's next-gen
          island architecture
        </div>
        <button className="bg-white px-[1rem] py-[0.5rem] rounded-[4px]">Get Started</button>
      </div>
      <div className="text-center my-[4rem]">
        <p>Copyright © 2024. All rights reserved</p>
        <p className="text-[0.875rem]">Made by Web3Templates</p>
      </div>
    </>
  );
}
