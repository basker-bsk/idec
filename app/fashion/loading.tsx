import { Skeleton } from "@/components/ui/skeleton";
export default function loading() {
  const loadingCount = [1, 2, 3, 4];
  return (
    <div className="flex flex-col  w-full">
      <h1 className="mb-4">Fashion</h1>
      <div className="justify-center items-center grid grid-cols-1 lg:grid-cols-3 gap-4">
        {loadingCount.map((i) => (
          <Skeleton
            className="h-[300px] w-[328px] rounded-xl flex justify-center items-center"
            key={i}
          >
            <span>Loadnig</span>
          </Skeleton>
        ))}
      </div>
    </div>
  );
}
