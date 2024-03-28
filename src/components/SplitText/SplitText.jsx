import React, { useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

import { useIsomorphicLayoutEffect } from "@/hook";

const SplitTextComponent = () => {
  const textRef = useRef(null);
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const split = new SplitText(textRef.current, {
      type: "words",
      linesClass: "split-line",
    });

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%",
        end: "bottom 75%",
        scrub: true,
      },
    });

    split.words.forEach((line, index) => {
      animation.from(
        line,
        {
          opacity: 0.3,
          duration: 10,
          stagger: 0.1,
        },
        0.8 * index
      );
    });
  });

  return (
    <div>
      <h3 ref={textRef}>
        Welcome to Project CAP (Collaborative Approach for Preventing Plastic
        Leakages in Rivers), a beacon of hope amid the global crisis of plastic
        pollution. At the heart of our endeavor lies a commitment to engage and
        uplift marginalized women and waste workers, empowering them to play
        pivotal roles in our collaborative model. By fostering inclusivity and
        participation among key stakeholders, we strive to develop a sustainable
        and community-driven solution to plastic pollution. Project CAP operates
        across six municipalities in Nepal, strategically positioned along four
        major river basins, where the impact of plastic leakage is most keenly
        felt.
      </h3>
    </div>
  );
};

export default SplitTextComponent;
