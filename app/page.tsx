import Nav from "@/blocks/nav";

export default function Home() {
  return (
    <>
      {/*<Nav />*/}
      <main className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center font-[family-name:var(--font-inter)]">
        <p className="text-lg font-medium sm:text-2xl">
          Cirqit Labs — Premium Apple repairs. Wherever you are.
        </p>
        <p className="text-xs sm:text-sm">
          (site under development, email{" "}
          <a href="mailto:riv@cirqitlab.com" className="underline">
            riv@cirqitlab.com
          </a>{" "}
          for more)
        </p>
      </main>
    </>
  );
}
