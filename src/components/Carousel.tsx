import React, { useState, ReactNode, useEffect, useCallback } from "react";
import { Transition } from "@headlessui/react";

export default function Carousel() {
  const INTERVAL_LENGTH = 6000;
  const AUTOPLAY = true;

  const items = [
    <h1 key="item1" className="my-8 text-2xl font-bold tracking-tighter">
      Les études montrent que <span className="text-pink-600">60%</span> des
      personnes qui se taisent n&apos;ont jamais insulté accidentellement leur
      patron.
    </h1>,
    <h1 key="item2" className="my-8 text-2xl font-bold tracking-tighter">
      Selon la recherche, <span className="text-blue-600">85%</span> des
      silencieux n&apos;ont jamais eu à revenir sur une opinion. Les{" "}
      <span className="text-blue-600">15%</span> restants sont probablement des{" "}
      <span className="text-blue-600">politiciens</span>.
    </h1>,
    <h1 key="item3" className="my-8 text-2xl font-bold tracking-tighter">
      <span className="text-green-600">100%</span> des personnes qui restent
      silencieuses pendant les silences gênants ne les rendent jamais plus
      gênants. Ce sont les{" "}
      <span className="text-green-600">véritables MVP</span>.
    </h1>,
    <h1 key="item4" className="my-8 text-2xl font-bold tracking-tighter">
      <span className="text-yellow-600">87%</span> de ceux qui
      s&apos;abstiennent de parler évitent les situations gênantes. Les{" "}
      <span className="text-yellow-600">13%</span> restants essaient
      généralement juste d&apos;
      <span className="text-yellow-600">impressionner</span> leur{" "}
      <span className="text-yellow-600">crush</span>.
    </h1>,
    <h1 key="item4" className="my-8 text-2xl font-bold tracking-tighter">
      <span className="text-red-600">Tu fermes pas ta gueule.</span>
    </h1>,
  ] as ReactNode[];

  const [currentItem, setCurrentItem] = useState(0);

  const prev = () =>
    setCurrentItem((curr) => (curr === 0 ? items.length - 1 : curr - 1));
  const next = useCallback(
    () => setCurrentItem((curr) => (curr === items.length - 1 ? 0 : curr + 1)),
    [items.length]
  );

  useEffect(() => {
    if (!AUTOPLAY) return;
    const interval = setInterval(next, INTERVAL_LENGTH);
    return () => clearInterval(interval);
  }, [AUTOPLAY, INTERVAL_LENGTH, next]);

  return (
    <section className="relative h-[250px] w-full overflow-hidden text-center mb-24">
      {items.map((item, index) => (
        <Transition
          key={index}
          show={currentItem === index}
          enter="transition ease-out duration-500"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-500"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="absolute w-full px-6">{item}</div>
        </Transition>
      ))}
      {/* Controls */}
      <div className="absolute w-full h-full items-center flex justify-between">
        <button className="m-4 h-8 w-8 rounded-full" onClick={prev}>
          {"<"}
        </button>
        <button className="m-4 h-8 w-8 rounded-full" onClick={next}>
          {">"}
        </button>
      </div>
      {/* Indicator */}
      <div className="absolute top-[200px] flex w-full justify-center gap-4">
        {items.map((_, index) => (
          <div
            key={index}
            className={`h-[4px] w-1/12 duration-1000 ${
              index !== currentItem ? "bg-slate-300" : "bg-slate-800"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
