import { Skeleton } from "@/shared/components/ui/skeleton";

export const SkeletonList = () => (
  <div className="w-full h-full flex flex-col gap-6">
    {[...Array(4)].map((_, i) => (
      <Skeleton key={i} className="h-26 w-full rounded-2xl bg-orange-100 dark:bg-orange-500" />
    ))}
  </div>
)