import Graph from "./Chart/Graph";

export default function WeeklyActivity() {
  return (
    <section className="w-[66%]">
      <h2 className="text-primary_2 font-semibold text-lg xl:text-xl pb-2">
        Weekly Activity
      </h2>
      <Graph />
    </section>
  );
}
