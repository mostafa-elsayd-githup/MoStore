import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/13437044_1280_720_25fps.mp4"
        poster="/poster.svg"
      ></video>
      <span className="absolute inset-0 bg-black/50 -z-10" />

      <Outlet />
    </section>
  );
}
