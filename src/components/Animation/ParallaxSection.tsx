import { ReactNode, useEffect, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
}

const ParallaxSection = ({ children, offset = 50 }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * (offset / 100);
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div ref={sectionRef} className="relative">
      {children}
    </div>
  );
};

export default ParallaxSection;
export { ParallaxSection };

