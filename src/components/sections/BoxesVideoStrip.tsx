export function BoxesVideoStrip() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <video
        className="h-full w-full object-cover object-center"
        src="/videos/boxes-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
