import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import * as React from "react";
import Home from "../components/Gsap/home";

const App = () => {
  const onEnter = (node) => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      }
    );
  };
  const onExit = (node) => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2,
        },
      }
    );
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cityBackground = React.useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const dallas = "hello";
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const austin = "hello";
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const newyork = "hello";
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const sanfrancisco = "hello";
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const beijing = "hello";

  const cities = [
    { name: "Dallas", image: dallas },
    { name: "Austin", image: austin },
    { name: "New York", image: newyork },
    { name: "San Francisco", image: sanfrancisco },
    { name: "Beijing", image: beijing },
  ];

  const test = (city, target) => {
    console.log("ko");
    gsap.to(target, {
      duration: 0,
      background: `url(${city}) center center`,
    });
    gsap.to(target, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.from(target, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };
  return (
    <>
      <div className="container">
        <CSSTransition
          in={true}
          timeout={1200}
          classNames="page"
          onExit={onExit}
          onEntering={onEnter}
          unmountOnExit
        >
          <div className="page">
            <Home />
          </div>
        </CSSTransition>
      </div>
      <div className="locations">
        Locations:
        {/* Returning the list of cities */}
        {cities.map((el) => (
          <span
            key={el.name}
            onMouseEnter={() => test(el.image, cityBackground)}
          >
            {el.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default App;
