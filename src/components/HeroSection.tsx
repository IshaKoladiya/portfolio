
import Objicon from './../assets/Object.svg'
import Imageicon from './../assets/ImageGroup.svg'

export function HeroSection() {
  return (
    <section className="relative mx-auto mt-20 max-w-[100%]  text-white">
      
      {/* Headings */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light">
          Crafting{" "}
          <span className="inline-block rounded-full bg-pink-300 px-6 py-2 text-black font-bold">
            Contemporary
          </span>{" "}
          &
        </h1>

        <h2 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-light">
          Innovative Digital{" "}
          <span className="font-semibold text-amber-300">
            Experiences
          </span>
        </h2>
      </div>

      {/* Content */}
      <div className="mt-16 grid grid-cols-12  gap-10 items-center">
        
        {/* Left decoration */}
        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/bfe53ebd969046c37afc3fb1d5c01d73aadde476"
          alt=""
          className="hidden lg:block w-full max-w-sm"
        />
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center gap-6 lg:col-span-2 md:col-span-6 sm:col-span-12 col-span-12">
  

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ee219fb28d61ac836be8f876fe0e443a4eaedd20"
            alt="Profile"
            className="w-[100%] h-[100%] rounded-full"
          />

          
        </div>

        {/* Text + Buttons */}
        <div className="lg:col-span-4 md:col-span-2 sm:col-span-2 col-span-12 space-y-8">
          <p className="text-base leading-relaxed text-gray-200">
            Lorem ipsum dolor sit amet consectetur. Semper integer ipsum quis magna
            pulvinar adipiscing aliquet enim. Suspendisse blandit quis eget neque.
            Fringilla risus non consequat neque aliquet. Egestas volutpat quam ut
            dolor quis. Mattis rhoncus porta velit hac tristique.
          </p>
          <div className='relative'>
<img src={Objicon} alt="obj icon" className='absolute -top-4 right-[42%]'/>
          <button className="flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-black font-semibold hover:bg-amber-400 transition">
            View Resume
          </button>
          </div>
         
        </div>

        <div className="relative h-[100%] border lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
            <img src={Imageicon} alt="image grop" className='absolute bottom-0 right-[47%]' />
             
                <div className="absolute -bottom-12 z-30 -rotate-6 right-[35%] rounded-full bg-sky-200 px-8 py-3 text-black font-semibold">
                FEATURED
                </div>

                <button className="absolute -bottom-20 rotate-6 right-2 flex items-center gap-2 rounded-full bg-pink-300 px-8 py-3 text-black font-semibold hover:bg-pink-400 transition">
                PROJECTS
                <span className="text-xl">↓</span>
                </button>
     
        </div>
      </div>
    </section>
  );
}
