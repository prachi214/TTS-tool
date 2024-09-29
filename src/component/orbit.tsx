import {OrbitingCircles} from "./magicui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative  flex h-[500px] w-[600px] flex-col items-center justify-center overflow-hidden   bg-background md:shadow-xl ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-yellow-300 bg-clip-text text-center sm:text-3xl lg:text-5xl md:text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-green">
 OCR
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="lg:size-[50px] md:size-[30px]  border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className="lg:size-[50px] md:size-[30px]  border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => (
    <img
      src="/textimag.png"
      alt="GitHub"
      width="50" // Adjust size if necessary
      height="50"
      className="size-[50px]" // Keep the class names for consistent sizing
    />
  ),
  notion: () => (
    <img
      src="/OCR-img.png"
      alt="GitHub"
      width="50" // Adjust size if necessary
      height="50"
      className="size-[50px]" // Keep the class names for consistent sizing
    />
  ),

  googleDrive: () => (
    <img
      src="/text.png"
      alt="GitHub"
      width="50" // Adjust size if necessary
      height="50"
      className="size-[50px]" // Keep the class names for consistent sizing
    />
  ),
  whatsapp: () => (
    <img
      src="/user.png"
      alt="GitHub"
      width="50" // Adjust size if necessary
      height="50"
      className="size-[50px]" // Keep the class names for consistent sizing
    />
  ),
};
