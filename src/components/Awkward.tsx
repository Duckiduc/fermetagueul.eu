// 'use client';
import { Card, LineChart, List, ListItem } from "@tremor/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    date: "Jan 23",
    Genant: 100,
    TonSilence: 0,
  },
  {
    date: "Feb 23",
    Genant: 100,
    TonSilence: 0,
  },
  {
    date: "Mar 23",
    Genant: 0,
    TonSilence: 100,
  },
  {
    date: "Apr 23",
    Genant: 100,
    TonSilence: 0,
  },
  {
    date: "May 23",
    Genant: 100,
    TonSilence: 0,
  },
  {
    date: "Jun 23",
    Genant: 100,
    TonSilence: 0,
  },
  {
    date: "Jul 23",
    Genant: 100,
    TonSilence: 0,
  },
  {
    date: "Aug 23",
    Genant: 100,
    TonSilence: 0,
  },
  {
    date: "Sep 23",
    Genant: 0,
    TonSilence: 100,
  },
  {
    date: "Oct 23",
    Genant: 100,
    TonSilence: 0,
  },
  {
    date: "Nov 23",
    Genant: 100,
    TonSilence: 0,
  },
  {
    date: "Dec 23",
    Genant: 100,
    TonSilence: 0,
  },
];

const summary = [
  {
    color: "Genant",
    name: "Moments genants",
    value: 122,
  },
  {
    color: "TonSilence",
    name: "Quand tu la fermes",
    value: 122,
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const statusColor = {
  Genant: "bg-blue-500",
  TonSilence: "bg-violet-500",
};

export default function Awkward() {
  return (
    <>
      <Card className="">
        <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Correlation des moments genants et toi qui la fermes
        </h3>
        <LineChart
          data={data}
          index="date"
          categories={["Genant", "TonSilence"]}
          colors={["blue", "violet", "fuchsia"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          className="mt-6 h-32"
        />
        <List className="mt-2">
          {summary.map((item) => (
            <ListItem key={item.name}>
              <div className="flex items-center space-x-2">
                <span
                  className={classNames(statusColor[item.color], "h-0.5 w-3")}
                  aria-hidden={true}
                />
                <span>{item.name}</span>
              </div>
              <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {valueFormatter(item.value)}
              </span>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
}
