import { LazyVideo } from "@/components/ui/LazyVideo";

export function BoxesVideoStrip() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <LazyVideo
        className="h-full w-full object-cover object-center"
        src="/videos/boxes-video.mp4"
        poster="/videos/boxes-poster.webp"
      />
    </section>
  );
}
