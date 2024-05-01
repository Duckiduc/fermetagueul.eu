// 'use client';
import { Card, SparkAreaChart } from "@tremor/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    date: "Nov 24, 2023",
    ElonMusk: 0,
    MOI: 50,
    TOI: 71.8,
    LoganPaul: 149.1,
  },
  {
    date: "Nov 25, 2023",
    ElonMusk: 100,
    MOI: 45,
    TOI: 67.2,
    LoganPaul: 145.1,
  },
  {
    date: "Nov 26, 2023",
    ElonMusk: 200,
    MOI: 69,
    TOI: 61.5,
    LoganPaul: 146.1,
  },
  {
    date: "Nov 27, 2023",
    ElonMusk: 1000,
    MOI: 69,
    TOI: 30,
    LoganPaul: 147.1,
  },
];

const summary = [
  {
    ticker: "MOI",
    description: "En cours",
    value: "Oui",
    change: "tkt",
    changeType: "positive",
  },
  {
    ticker: "ElonMusk",
    description: "Il ecrit sur X",
    value: "Oui",
    change: "infinite",
    changeType: "positive",
  },
  {
    ticker: "LoganPaul",
    description: "Pas besoin il est riche",
    value: "$173.6",
    change: "+1.67%",
    changeType: "negative",
  },
  {
    ticker: "TOI",
    description: "Pense a la fermer",
    value: "MDR",
    change: "c'est chaud",
    changeType: "negative",
  },
];

export default function People() {
  return (
    <>
      <Card className="sm:mx-auto sm:max-w-md basis-1/2">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Fermage de gueule
        </p>
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          En hausse.
          <span className="text-xs"> (sans toi)</span>
        </p>
        <p className="mt-1 text-tremor-default font-medium">
          <span className="text-emerald-700 dark:text-emerald-500">
            +10.000 personnes
          </span>{" "}
          <span className="font-normal text-tremor-content dark:text-dark-tremor-content">
            Aujourd&apos;hui
          </span>
        </p>
        <ul role="list" className="mt-8 space-y-8">
          {summary.map((item) => (
            <li
              key={item.ticker}
              className="flex items-center justify-between space-x-6"
            >
              <div className="truncate">
                <p className="truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.ticker}
                </p>
                <p className="truncate text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <SparkAreaChart
                  data={data}
                  index="date"
                  categories={[item.ticker]}
                  showGradient={true}
                  colors={
                    item.changeType === "positive" ? ["emerald"] : ["red"]
                  }
                  className="h-10 w-32 flex-none sm:w-44"
                />
                <div className="w-14 text-right sm:w-16">
                  <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    {item.value}
                  </p>
                  <p
                    className={classNames(
                      item.changeType === "positive"
                        ? "text-emerald-700 dark:text-emerald-500 "
                        : "text-red-700 dark:text-red-500",
                      "text-tremor-label font-medium"
                    )}
                  >
                    {item.change}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
