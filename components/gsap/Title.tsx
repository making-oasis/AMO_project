import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import styless from "../../styles/App.module.scss";

const Title = ({ lineContent, lineContent2, lineContent3 }) => {
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);
  const line3 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.from(".line", {
      duration: 0.8,
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2]);

  return (
    <h1 className="page-title">
      <div className={styless.linewrap}>
        <div ref={(el) => (line1.current = el)} className="line">
          {lineContent}
        </div>
      </div>
      <div className={styless.linewrap}>
        <div ref={(el) => (line2.current = el)} className="line">
          {lineContent2}
        </div>
      </div>
      <div className={styless.linewrap}>
        <div ref={(el) => (line3.current = el)} className="line">
          {lineContent3}
        </div>
      </div>
    </h1>
  );
};

export default Title;
