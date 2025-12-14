
export function ContactSection() {
  return (
    <section className="px-20 pt-24 pb-14 mt-16 max-w-full bg-sky-200 rounded-[69px] w-[1322px] max-md:px-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[62%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full font-medium text-black max-md:mt-10 max-md:max-w-full">
            <h2 className="text-3xl">Have Something in mind?</h2>
            <button className="flex gap-2.5 justify-center items-center px-3.5 py-3 mt-6 text-2xl font-semibold bg-amber-300 min-h-[58px] rotate-[-0.0004952981438573766rad] rounded-[46px] shadow-[0px_76px_21px_rgba(0,0,0,0)]">
              <span className="self-stretch my-auto">Let's Connect</span>
            </button>
            <p className="self-stretch mt-6 text-base text-zinc-950 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Semper integer ipsum
              quis magna pulvinar adipiscing aliquet enim. Suspendisse
              blandit quis eget neque.
            </p>
          </div>
        </div>
        <div className="ml-5 w-[17%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-2xl font-medium text-black whitespace-nowrap max-md:mt-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/90c7118c7813e0bda764988fac960775f77e82f3?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
              alt="Social media link"
              className="object-contain aspect-[2.65] w-[143px]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b2ef9cd26d717a2a91c23e50eeed93094a558338?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
              alt="Social media link"
              className="object-contain aspect-[2.63] w-[142px]"
            />
            <span className="self-start mt-2">Instagram</span>
          </div>
        </div>
        <div className="ml-5 w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col justify-center px-11 py-11 text-6xl text-white whitespace-nowrap rounded-md aspect-[1.023] max-md:px-5 max-md:mt-10 max-md:text-4xl">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f7aa5f5ffd031eaf8aa67c2829dcfd6854b558c4?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <span className="relative max-md:text-4xl">Isha</span>
          </div>
        </div>
      </div>
    </section>
  );
}
