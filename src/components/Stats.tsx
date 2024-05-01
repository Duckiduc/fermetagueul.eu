// 'use client';
import { BarList, Card } from "@tremor/react";

const pages = [
  {
    name: "75% des moments de silence menent a moins de drama",
    value: 75,
  },
  {
    name: "100% des gens qui la ferment disent 0 connerie",
    value: 100,
  },
  {
    name: "95% de la population mondiale aimerait que tu te la fermes",
    value: 95,
  },
  {
    name: "12% des gens silencieux sont silencieux",
    value: 12,
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export default function Stats() {
  return (
    <>
      <Card className="">
        <div className="flex items-center justify-between border-b border-tremor-border p-6 dark:border-dark-tremor-border">
          <p className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Des statistiques de fou
          </p>
          <p className="text-tremor-label font-medium uppercase text-tremor-content dark:text-dark-tremor-content">
            % des gens
          </p>
        </div>
        <div className="overflow-hidden p-6">
          <BarList data={pages} valueFormatter={valueFormatter} />
        </div>

        <div className="flex justify-center px-6 pb-6"></div>
      </Card>
    </>
  );
}
