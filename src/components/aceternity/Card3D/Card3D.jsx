/* eslint-disable react-refresh/only-export-components */
import { cn } from "../../../utils/cn";
import {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

// <[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>
const MouseEnterContext = createContext(undefined);

/**
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 * @param {string} props.className
 * @param {string} props.containerClassName
 * @returns {Element}
 */
export const CardContainer = ({
  children,
  className,
  containerClassName,
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  /**
   * @param {MouseEvent<HTMLDivElement>} e
  */
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

/**
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 * @param {string} props.className
 * @returns {Element}
*/
export const CardBody = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "h-fit w-fit [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * @param {object} props
 * @param {import("react").ElementType} props.as
 * @param {import("react").ReactNode} props.children
 * @param {string} props.className
 * @param {string | number} props.translateX
 * @param {string | number} props.translateY
 * @param {string | number} props.translateZ
 * @param {string | number} props.rotateX
 * @param {string | number} props.rotateY
 * @param {string | number} props.rotateZ
 * @param {object} props.rest
 * @returns {Element}
*/
export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
      handleAnimations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMouseEntered]);
    
    const handleAnimations = () => {
      if (!ref.current) return;
      if (isMouseEntered) {
        ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
        ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      }
    };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
