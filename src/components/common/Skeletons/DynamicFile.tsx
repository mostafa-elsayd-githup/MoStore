export default function ProductSkeleton() {
  return (
    <section className="relative isolate overflow-hidden bg-(--bg-main) text-(--text-h) animate-pulse">
      <div className="container mx-auto px-4 py-8 pb-28 lg:pb-12">
                <div className="mb-6 h-4 w-48 rounded bg-(--border_card)" />
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-start">
                    <div className="flex flex-col-reverse sm:flex-row gap-4">
            <div className="flex sm:flex-col gap-3 sm:w-20 shrink-0">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square w-20 sm:w-full rounded-2xl bg-(--border_card)" />
              ))}
            </div>
            <div className="flex-1 aspect-square sm:aspect-4/5 rounded-4xl bg-(--border_card)" />
          </div>
          <div className="flex flex-col gap-6 lg:sticky lg:top-24 text-start">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-16 rounded-full bg-(--border_card)" />
                <div className="h-6 w-20 rounded-full bg-(--border_card)" />
              </div>
              <div className="h-10 w-3/4 rounded-xl bg-(--border_card)" />
              <div className="h-5 w-32 rounded bg-(--border_card)" />
            </div>
            <div className="h-24 rounded-3xl bg-(--border_card) p-5" />
            <div className="space-y-3">
              <div className="h-4 w-20 rounded bg-(--border_card)" />
              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-9 w-9 rounded-full bg-(--border_card)" />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="h-4 w-24 rounded bg-(--border_card)" />
                <div className="h-4 w-16 rounded bg-(--border_card)" />
              </div>
              <div className="flex gap-2.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-12 w-14 rounded-2xl bg-(--border_card)" />
                ))}
              </div>
            </div>
            <div className="flex items-stretch gap-3">
              <div className="h-14 w-28 rounded-2xl bg-(--border_card)" />
              <div className="h-14 flex-1 rounded-2xl bg-(--border_card)" />
              <div className="h-14 w-14 rounded-2xl bg-(--border_card)" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 rounded-2xl bg-(--border_card)" />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}