
interface ProjectCardProps {
  className?: string;
}

export function ProjectCard({ className = "" }: ProjectCardProps) {
  return (
    <article className={`px-7 pt-9 pb-16 w-full border border-solid border-neutral-400 max-w-[1314px] rounded-[36px] max-md:px-5 max-md:max-w-full ${className}`}>
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="mt-4 w-full text-xl font-medium max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col pl-7 w-full text-white max-md:pl-5 max-md:max-w-full">
              <div className="flex gap-2.5 justify-center items-center self-start px-8 py-2 ml-3.5 bg-zinc-400 rotate-[0.0055885326477145905rad] rounded-[46px] max-md:px-5 max-md:ml-2.5">
                <span className="self-stretch my-auto">WORDS WORTH</span>
              </div>
              <h3 className="self-start mt-16 font-bold max-md:mt-10 max-md:ml-0.5">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="mt-8 text-base max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Semper integer ipsum
                quis magna pulvinar adipiscing aliquet enim. Suspendisse blandit
                quis eget neque. Fringilla risus non consequat neque aliquet.
                Egestas volutpat quam ut dolor quis. Mattis rhoncus porta velit
                hac tristique. Mi dolor lobortis enim lorem elit amet nulla
                vel.i nunc cras pretium integer.
              </p>
              <button className="flex gap-2.5 justify-center items-center self-end px-4 py-0.5 mt-8 text-base font-semibold text-black whitespace-nowrap bg-amber-300 rounded-[51px] max-md:mr-1.5">
                <span className="self-stretch my-auto rotate-[-0.0004952981438573766rad]">
                  VIEW
                </span>
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-32 max-w-full text-black w-[532px] max-md:mt-10">
              <div className="flex gap-2.5 justify-center items-center px-5 py-2 whitespace-nowrap bg-pink-300 rotate-[0.0055885326477145905rad] rounded-[46px]">
                <span className="self-stretch my-auto">Strategy</span>
              </div>
              <div className="flex gap-2.5 justify-center items-center px-8 py-2 bg-amber-300 rotate-[0.0055885326477145905rad] rounded-[46px] max-md:px-5">
                <span className="self-stretch my-auto">EDtech Product</span>
              </div>
              <div className="flex gap-2.5 justify-center items-center px-8 py-2 whitespace-nowrap bg-sky-200 rotate-[0.0055885326477145905rad] rounded-[46px] max-md:px-5">
                <span className="self-stretch my-auto">Prototyping</span>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex shrink-0 mx-auto max-w-full bg-zinc-300 h-[528px] rounded-[31px] w-[574px] max-md:mt-10" />
        </div>
      </div>
    </article>
  );
}
