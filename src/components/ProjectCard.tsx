
interface ProjectCardProps {
  className?: string;
}

export function ProjectCard({ className = "" }: ProjectCardProps) {
  return (
      <div className="project-card absolute inset-0 flex items-center justify-center px-4">
      <article className="w-full max-w-[1314px] bg-black border border-neutral-400 rounded-[36px] px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 items-center">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col text-white">
              
              {/* TAG */}
              <div className="inline-flex px-6 py-2 bg-zinc-400 rounded-full text-sm sm:text-base w-fit">
                WORDS WORTH
              </div>

              {/* TITLE */}
              <h3 className="mt-10 sm:mt-14 text-2xl sm:text-3xl font-bold leading-tight">
                Lorem ipsum dolor sit amet consectetur.
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-6 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Semper integer ipsum
                quis magna pulvinar adipiscing aliquet enim. Suspendisse blandit
                quis eget neque.
              </p>

              {/* BUTTON */}
              <button className="self-start sm:self-end mt-8 px-6 py-2 bg-amber-300 text-black rounded-full font-semibold text-sm sm:text-base">
                VIEW
              </button>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-10 sm:mt-16 text-black">
                <span className="px-4 py-2 bg-pink-300 rounded-full text-sm">
                  Strategy
                </span>
                <span className="px-4 py-2 bg-amber-300 rounded-full text-sm">
                  EDtech Product
                </span>
                <span className="px-4 py-2 bg-sky-200 rounded-full text-sm">
                  Prototyping
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[574px] h-[220px] sm:h-[320px] lg:h-[528px] bg-zinc-300 rounded-[24px]" />
          </div>

        </div>
      </article>
    </div>
  );
}
