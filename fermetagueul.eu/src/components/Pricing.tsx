// 'use client';
import { RiCheckboxCircleFill } from "@remixicon/react";
import { Divider, List, ListItem } from "@tremor/react";

const features = [
  {
    id: 1,
    name: "Ferme ta gueule en illimité",
  },
  {
    id: 2,
    name: "Evite les problemes",
  },
  {
    id: 3,
    name: "Soulage tout le monde",
  },
  {
    id: 4,
    name: "Economise ta salive",
  },
];

export default function Pricing() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="p-6">
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Accede a toutes les fonctionnalités
          </h3>
          <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Debloque ta nouvelle faculte de non communication avec les autres
          </p>
          <div className="mt-8 space-y-6">
            <div className="relative border-l-2 border-tremor-border pl-4 dark:border-dark-tremor-border">
              <h4 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  Aucune garantie &#8594;
                </a>
              </h4>
              <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Ni remboursement, ni echange
              </p>
            </div>
            <div className="relative border-l-2 border-tremor-border pl-4 dark:border-dark-tremor-border">
              <h4 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                <a
                  href="https://www.youtube.com/watch?v=pMOl0G9iyv4"
                  target="_blank"
                  className="focus:outline-none"
                >
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  Check le tuto &#8594;
                </a>
              </h4>
              <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Source solide WikiHow sur YouTube
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-tremor-default border border-tremor-border bg-tremor-background-muted p-6 dark:border-dark-tremor-border dark:bg-dark-tremor-background-muted">
          <div className="flex items-start justify-between space-x-6">
            <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Abonnement Silence Pro
            </h3>
            <p className="flex items-baseline">
              <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                $0
              </span>
              <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                /mois
              </span>
            </p>
          </div>
          <List className="mt-4 divide-y-0 text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
            {features.map((item) => (
              <ListItem
                key={item.id}
                className="justify-start space-x-2 py-2.5"
              >
                <RiCheckboxCircleFill
                  className="h-5 w-5 shrink-0 text-tremor-brand dark:text-dark-tremor-brand"
                  aria-hidden={true}
                />
                <span>{item.name}</span>
              </ListItem>
            ))}
          </List>
          <Divider />
          <a
            href="#"
            className="block w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand py-2.5 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
          >
            Ferme ta gueule gratuitement
          </a>
        </div>
      </div>
    </>
  );
}
