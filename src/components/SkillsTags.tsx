import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SkillsTags() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const rows = sectionRef.current.children;

    // Row 1 → left
    gsap.fromTo(
      rows[0],
      { x: "15vw" },
      {
        x: "-15vw",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Row 2 → right
    gsap.fromTo(
      rows[1],
      { x: "-15vw" },
      {
        x: "15vw",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center self-stretch px-4 mt-20 w-full max-md:mt-10 max-md:max-w-full overflow-hidden"
    >
      {/* ROW 1 */}
      <div className="flex gap-5 justify-between items-center self-stretch w-[100%] text-sm font-medium text-black max-md:max-w-[100%]">
        <div className="flex flex-auto gap-2.5 self-stretch py-1 my-auto border border-solid bg-neutral-700 border-zinc-600 min-h-[27px] rounded-[58px]" />
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto bg-amber-300 rounded-[58px]">
          <span className="self-stretch my-auto">Creative Design</span>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/7d5914f23ec5cbe3eb01a668ef9fe31e4d3c8dde?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
          alt=""
          className="object-contain shrink-0 self-stretch aspect-[1.08] w-[39px]"
        />
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto whitespace-nowrap bg-pink-300 rounded-[58px]">
          <span className="self-stretch my-auto">Strategy</span>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/2fb1ab9428762e9beabb399b9b9cb8f0de418a01?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
          alt=""
          className="object-contain shrink-0 self-start w-8 rounded-md aspect-[0.97]"
        />
        <div className="flex flex-auto gap-2.5 self-stretch py-1 my-auto border border-solid bg-neutral-700 border-zinc-600 min-h-[27px] rounded-[58px]" />
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto whitespace-nowrap bg-sky-200 rounded-[58px]">
          <span className="self-stretch my-auto">Strategy</span>
        </div>
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto bg-amber-300 rounded-[58px]">
          <span className="self-stretch my-auto">Creative Design</span>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/7d5914f23ec5cbe3eb01a668ef9fe31e4d3c8dde?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
          alt=""
          className="object-contain shrink-0 self-stretch aspect-[1.08] w-[39px]"
        />
        <div className="flex flex-auto gap-2.5 self-stretch py-1 my-auto border border-solid bg-neutral-700 border-zinc-600 min-h-[27px] rounded-[58px]" />
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto whitespace-nowrap bg-pink-300 rounded-[58px]">
          <span className="self-stretch my-auto">Strategy</span>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6e9d14a0363b8614a4b88f9f19cfde431a7bbb76?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
          alt=""
          className="object-contain shrink-0 self-start w-8 rounded-md aspect-[0.97]"
        />
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto whitespace-nowrap bg-sky-200 rounded-[58px]">
          <span className="self-stretch my-auto">Strategy</span>
        </div>
      </div>

      {/* ROW 2 */}
    <div className="flex gap-5 justify-between items-center self-start mt-3 w-[100%] text-sm font-medium text-black max-w-[100%] max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/7d5914f23ec5cbe3eb01a668ef9fe31e4d3c8dde?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
          alt=""
          className="object-contain shrink-0 self-start aspect-[1.08] w-[39px]"
        />
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto whitespace-nowrap bg-pink-300 rounded-[58px]">
          <span className="self-stretch my-auto">Strategy</span>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0bbd4949720b2c6ed6390843f40d5921764604a0?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
          alt=""
          className="object-contain shrink-0 self-start w-8 rounded-md aspect-[0.97]"
        />
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto whitespace-nowrap bg-sky-200 rounded-[58px]">
          <span className="self-stretch my-auto">Strategy</span>
        </div>
        <div className="flex gap-2.5 self-stretch py-1 my-auto border border-solid bg-neutral-700 border-zinc-600 min-h-[27px] rounded-[58px]" />
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto bg-amber-300 rounded-[58px]">
          <span className="self-stretch my-auto">Creative Design</span>
        </div>
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto whitespace-nowrap bg-pink-300 rounded-[58px]">
          <span className="self-stretch my-auto">Strategy</span>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/7d5914f23ec5cbe3eb01a668ef9fe31e4d3c8dde?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
          alt=""
          className="object-contain shrink-0 self-start aspect-[1.08] w-[39px]"
        />
        <div className="flex gap-2.5 self-stretch py-1 my-auto border border-solid bg-neutral-700 border-zinc-600 min-h-[27px] rounded-[58px]" />
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto whitespace-nowrap bg-sky-200 rounded-[58px]">
          <span className="self-stretch my-auto">Strategy</span>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6e9d14a0363b8614a4b88f9f19cfde431a7bbb76?placeholderIfAbsent=true&apiKey=f2d3014bc7054ec3aa77eed737369b56"
          alt=""
          className="object-contain shrink-0 self-start mt-1.5 w-8 rounded-md aspect-[0.97]"
        />
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto bg-amber-300 rounded-[58px]">
          <span className="self-stretch my-auto">Creative Design</span>
        </div>
        <div className="flex gap-2.5 self-start pt-1 mt-2.5 border border-solid bg-neutral-700 border-zinc-600 min-h-[27px] rounded-[58px]" />
      </div>
    </section>
  );
}
