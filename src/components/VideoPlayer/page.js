"use client";
export default function VideoPlayer() {
  return (
    <section id="hm-hero-section">
      <video
        style={{ width: "100%", height: "auto" }}
        loop={true}
        muted={true}
        autoPlay={true}
      >
        <source src={"/videos/thunder.mp4"} type="video/mp4" />
      </video>
      <div className="overlay"></div>
    </section>
  );
}
