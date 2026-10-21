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
      >
        <source
          src="/src/assets/8533450-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <span className="absolute inset-0 bg-black/50 -z-10" />
      
      <Outlet />
    </section>
  );
}