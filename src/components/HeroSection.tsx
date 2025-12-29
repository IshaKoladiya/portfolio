
import Objicon from './../assets/Object.svg'
import Imageicon from './../assets/ImageGroup.svg'

export function HeroSection() {
  return (
    <section className="relative mx-auto mt-10 max-w-[100%] h-[100vh]  text-white">
      
      {/* Headings */}
     <div className="text-center px-4 py-8">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
    Crafting{" "}
    <span className="inline-block rounded-full bg-pink-300 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
      Contemporary
    </span>{" "}
    &
  </h1>

  <h2 className="mt-6  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
    Innovative Digital{" "}
    <span className="font-semibold text-amber-300">
      Experiences
    </span>
  </h2>
</div>

      {/* Content */}
      <div className="mt-12 grid grid-cols-12  gap-6 ">
        
        {/* Left decoration */}
        <div className="lg:col-span-3 md:col-span-12 sm:col-span-12 col-span-12">

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/bfe53ebd969046c37afc3fb1d5c01d73aadde476"
          alt=""
          className="hidden lg:block w-full max-w-sm"
        />
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center gap-6 lg:col-span-2 md:col-span-12 sm:col-span-12 col-span-12">
  

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ee219fb28d61ac836be8f876fe0e443a4eaedd20"
            alt="Profile"
            className="lg:w-[100%] md:w-[200px] sm:w-[150px] w-[100%] h-[100%] rounded-full"
          />

          
        </div>

        {/* Text + Buttons */}
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 space-y-8 flex items-center justify-center">
          <div className='pl-4'>
          <p className="text-base leading-relaxed text-gray-200 pb-12">
            Lorem ipsum dolor sit amet consectetur. Semper integer ipsum quis magna
            pulvinar adipiscing aliquet enim. Suspendisse blandit quis eget neque.
            Fringilla risus non consequat neque aliquet. Egestas volutpat quam ut
            dolor quis. Mattis rhoncus porta velit hac tristique.
          </p>
          <div className='relative'>
          <img src={Objicon} alt="obj icon" className='absolute -top-4 left-[170px]'/>
          <button className="flex relative items-center gap-2 rounded-full bg-amber-300 px-10 py-3 text-black font-semibold hover:bg-amber-400 transition">
            View Resume
          </button>
          </div>
         </div>
        </div>

        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12 lg:mt-0 md:mt-0 mt-[18%]  relative h-[100%] w-[100%] ">
            <img src={Imageicon} alt="image grop" className='absolute -bottom-3 right-[55%] -rotate-6 h-[180px]' />
             
                <div className="absolute -bottom-12 z-30 -rotate-6 right-[39%] rounded-full bg-sky-200 px-10 py-3 text-black font-semibold">
                FEATURED
                </div>

                <button className="absolute -bottom-20 rotate-6 right-5 flex items-center gap-2 rounded-full bg-pink-300 px-10 py-3 text-black font-semibold hover:bg-pink-400 transition">
                PROJECTS
                <span className="text-xl">↓</span>
                </button>
     
        </div>
      </div>


      
      













    </section>


    
    
  );
}
