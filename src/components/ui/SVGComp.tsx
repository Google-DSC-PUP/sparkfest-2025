import * as React from "react";
import { useState, useEffect } from "react";

interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  bdLight?: string;
  bdDark?: string;
  bgMain?: string;
  title: string;
  description: string;
}

const SVGComponent: React.FC<SVGComponentProps> = ({
  bdLight = "#57CAFF",
  bdDark = "#333333",
  bgMain = "#AAAAAA",
  title = "Title",
  description = "Description",
  ...props
}) => {
  type ScreenSize = "small" | "medium" | "large";

  const getScreenSize = (): ScreenSize => {
    if (window.innerWidth <= 768) return "small";
    if (window.innerWidth <= 1024) return "medium";
    return "large";
  };

  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const svgProps: Record<
    ScreenSize,
    { width: number; height: number; viewBox: string }
  > = {
    small: { width: 300, height: 300, viewBox: "0 0 300 300" },
    medium: { width: 500, height: 250, viewBox: "0 0 500 250" },
    large: { width: 760, height: 300, viewBox: "0 0 760 300" },
  };
  return (
    <div className="relative flex ">
      <div className="absolute left-10 right-10 top-19 md:left-13 lg:left-16">
        <p className="font-mono text-lg text-white text-center md:text-left md:text-2xl ">
          {title}
        </p>
        <p className="font-mono text-sm text-white text-center px-4 pt-5 leading-tight md:pt-6 md:pr-3 md:px-0 md:text-left md:text-lg lg:pr-6">
          {description}
        </p>
      </div>

      {screenSize === "small" && (
        <svg
          width="310"
          height="300"
          viewBox="0 0 350 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 10H330V20H20V10Z" fill={bdLight} />
          <path d="M180 50H250V55V60H180V50Z" fill={bdLight} />
          <path d="M290.208 50H270.208V60H290.208V50Z" fill={bdLight} />
          <path d="M20 20H30V30H20V20Z" fill={bdLight} />
          <path d="M20 310H30V320H20V310Z" fill={bdLight} />
          <path d="M320.25 310H330V320H320.25V310Z" fill={bdLight} />
          <path d="M320.25 20H330V30L320.25 30V20Z" fill={bdLight} />
          <path d="M330 20H340.312L340 320H330V20Z" fill={bdLight} />
          <path d="M20 320H330V330H20V320Z" fill={bdLight} />
          <path d="M10 20H20V320H10V20Z" fill={bdLight} />
          <path d="M290.208 50H310.5V60H290.208V50Z" fill={bgMain} />
          <path d="M250 50H270.208V60H250V55V50Z" fill={bgMain} />
          <path d="M40 50H180V60H40V50Z" fill={bgMain} />
          <path d="M50 40H300V50H50V40Z" fill={bgMain} />
          <path d="M50 290H301V300H50V290Z" fill={bgMain} />
          <path d="M40 60H310.5L310 290H40V60Z" fill={bgMain} />
          <path d="M300 40H310.5V50H300V40Z" fill={bdDark} />
          <path d="M301 290H310L310.5 300H301V290Z" fill={bdDark} />
          <path d="M40 40H50V50H40V40Z" fill={bdDark} />
          <path d="M40 290H50V300H40V290Z" fill={bdDark} />
          <path d="M20 30H30V310H20V30Z" fill={bdDark} />
          <path d="M30 30H40V300H30V30Z" fill={bdDark} />
          <path d="M320.25 30L330 30V310H320.25V30Z" fill={bdDark} />
          <path d="M310.5 40L320.25 40.2375V310H310.5V40Z" fill={bdDark} />
          <path d="M30 20H320.25V30H30V20Z" fill={bdDark} />
          <path d="M40 30H320.25V40.2375L40 40V30Z" fill={bdDark} />
          <path d="M30 300H310.5V310H30V300Z" fill={bdDark} />
          <path d="M30 310H320.25V320H30V310Z" fill={bdDark} />
          <path d="M10 320H20V330H10V320Z" fill={bdDark} />
          <path d="M330 320H340V330H330V320Z" fill={bdDark} />
          <path d="M330 10H340L340.312 20H330V10Z" fill={bdDark} />
          <path d="M10 330H340V340H10V330Z" fill={bdDark} />
          <path d="M340 10H350V330H340V10Z" fill={bdDark} />
          <path d="M10 10H20V20H10V10Z" fill={bdDark} />
          <path d="M0 10H10V330H0V10Z" fill={bdDark} />
          <path d="M10 0H340V10H10V0Z" fill={bdDark} />
        </svg>
      )}

      {/* Medium SVG */}
      {screenSize === "medium" && (
        <svg
          width="569"
          height="300"
          viewBox="0 0 569 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.9737 10H554.026V20H14.9737V10Z" fill={bdLight} />
          <path d="M419.263 50H494.132V60H419.263V50Z" fill={bdLight} />
          <path d="M524.079 50H509.105V60H524.079V50Z" fill={bdLight} />
          <path d="M14.9737 20H22.4605V30H14.9737V20Z" fill={bdLight} />
          <path d="M14.9737 270H22.4605V280H14.9737V270Z" fill={bdLight} />
          <path d="M546.571 270H554.026V280H546.571V270Z" fill={bdLight} />
          <path d="M546.539 20H554.026V30H546.539V20Z" fill={bdLight} />
          <path d="M554.026 20H561.54L562.262 280H554.026V20Z" fill={bdLight} />
          <path d="M14.9737 280H554.026V290H14.9737V280Z" fill={bdLight} />
          <path d="M7.48684 20H14.9737V280H7.48684V20Z" fill={bdLight} />
          <path d="M524.079 50H539.053V60H524.079V50Z" fill={bgMain} />
          <path d="M494.132 50H509.105V60H494.132V50Z" fill={bgMain} />
          <path d="M29.9474 50H419.263V60H29.9474V50Z" fill={bgMain} />
          <path d="M37.4342 40H531.566V50H37.4342V40Z" fill={bgMain} />
          <path d="M37.4342 250H531.566V260H37.4342V250Z" fill={bgMain} />
          <path d="M29.9474 60H539.053V250H29.9474V60Z" fill={bgMain} />
          <path d="M531.566 40H539.053V50H531.566V40Z" fill={bdDark} />
          <path d="M531.566 250H539.053V260H531.566V250Z" fill={bdDark} />
          <path d="M29.9474 40H37.4342V50H29.9474V40Z" fill={bdDark} />
          <path d="M29.9474 250H37.4342V260H29.9474V250Z" fill={bdDark} />
          <path d="M14.9737 30H22.4605V270H14.9737V30Z" fill={bdDark} />
          <path d="M22.4605 30H29.9474V260H22.4605V30Z" fill={bdDark} />
          <path d="M546.539 30H554.026V270H546.571L546.539 30Z" fill={bdDark} />
          <path d="M539.053 40H546.571V270H539.053V155V40Z" fill={bdDark} />
          <path d="M22.4605 20H546.539V30H22.4605V20Z" fill={bdDark} />
          <path d="M29.9474 30H546.539L546.571 40H29.9474V30Z" fill={bdDark} />
          <path d="M22.4605 260H539.053V270H22.4605V260Z" fill={bdDark} />
          <path d="M22.4605 270H546.571V280H22.4605V270Z" fill={bdDark} />
          <path d="M7.48684 280H14.9737V290H7.48684V280Z" fill={bdDark} />
          <path d="M554.026 280H562.262V290H554.026V280Z" fill={bdDark} />
          <path d="M554.026 10H561.513L561.54 20H554.026V10Z" fill={bdDark} />
          <path d="M7.48684 290H562.262V300H7.48684V290Z" fill={bdDark} />
          <path d="M561.513 10H569V290H562.262L561.513 10Z" fill={bdDark} />
          <path d="M7.48684 10H14.9737V20H7.48684V10Z" fill={bdDark} />
          <path d="M0 10H7.48684V290H0V10Z" fill={bdDark} />
          <path d="M7.48684 0H561.513V10H7.48684V0Z" fill={bdDark} />
        </svg>
      )}

      {/* Large SVG */}
      {screenSize === "large" && (
        <svg
          width="760"
          height="300"
          viewBox="0 0 760 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 10H740V20H20V10Z" fill={bdLight} />
          <path d="M560 50H660V60H560V50Z" fill={bdLight} />
          <path d="M700 50H680V60H700V50Z" fill={bdLight} />
          <path d="M20 20H30V30H20V20Z" fill={bdLight} />
          <path d="M20 270H30V280H20V270Z" fill={bdLight} />
          <path d="M730.042 270H740V280H730.042V270Z" fill={bdLight} />
          <path d="M730 20H740V30H730V20Z" fill={bdLight} />
          <path d="M740 20H750.036L751 280H740V20Z" fill={bdLight} />
          <path d="M20 280H740V290H20V280Z" fill={bdLight} />
          <path d="M10 20H20V280H10V20Z" fill={bdLight} />

          <path d="M700 50H720V60H700V50Z" fill={bgMain} />
          <path d="M660 50H680V60H660V50Z" fill={bgMain} />
          <path d="M40 50H560V60H40V50Z" fill={bgMain} />
          <path d="M50 40H710V50H50V40Z" fill={bgMain} />
          <path d="M50 250H710V260H50V250Z" fill={bgMain} />
          <path d="M40 60H720V250H40V60Z" fill={bgMain} />

          <path d="M710 40H720V50H710V40Z" fill={bdDark} />
          <path d="M710 250H720V260H710V250Z" fill={bdDark} />
          <path d="M40 40H50V50H40V40Z" fill={bdDark} />
          <path d="M40 250H50V260H40V250Z" fill={bdDark} />
          <path d="M20 30H30V270H20V30Z" fill={bdDark} />
          <path d="M30 30H40V260H30V30Z" fill={bdDark} />
          <path d="M730 30H740V270H730.042L730 30Z" fill={bdDark} />
          <path d="M720 40H730.042V270H720V155V40Z" fill={bdDark} />
          <path d="M30 20H730V30H30V20Z" fill={bdDark} />
          <path d="M40 30H730L730.042 40H40V30Z" fill={bdDark} />
          <path d="M30 260H720V270H30V260Z" fill={bdDark} />
          <path d="M30 270H730.042V280H30V270Z" fill={bdDark} />
          <path d="M10 280H20V290H10V280Z" fill={bdDark} />
          <path d="M740 280H751V290H740V280Z" fill={bdDark} />
          <path d="M740 10H750L750.036 20H740V10Z" fill={bdDark} />
          <path d="M10 290H751V300H10V290Z" fill={bdDark} />
          <path d="M750 10H760V290H751L750 10Z" fill={bdDark} />
          <path d="M10 10H20V20H10V10Z" fill={bdDark} />
          <path d="M0 10H10V290H0V10Z" fill={bdDark} />
          <path d="M10 0H750V10H10V0Z" fill={bdDark} />
        </svg>
      )}
    </div>
  );
};

export default SVGComponent;
