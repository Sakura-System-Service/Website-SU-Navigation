"use client";

import { useEffect, useRef, useState } from "react";

const vessels = [
  ["SUN ORION","2014 · JUL","8,720.58","112.02","10.00","16","9,052.334","PANAMA","SUS 316L","USUKI SHIPYARD"],
  ["SUN APOLLON","2014 · SEP","8,732.87","112.02","10.00","16","9,057.000","PANAMA","SUS 316L","USUKI SHIPYARD"],
  ["SUN SIRIUS","2021 · MAR","9,118.61","114.22","10.00","16","9,444.461","PANAMA","SUS 316L","USUKI SHIPYARD"],
  ["SUN NEPTUNE","2022 · JUL","12,619.00","127.02","11.30","16","13,571.186","PANAMA","SUS 32953L Duplex","USUKI SHIPYARD"],
  ["SUN MERCURY","2023 · JUN","12,555.93","127.02","11.30","16","13,568.728","SINGAPORE","SUS 329J3L Duplex","USUKI SHIPYARD"],
  ["SUN KRONOS","2024 · AUG","12,577.20","127.02","11.30","16","13,566.177","PANAMA","SUS 329J3L Duplex","USUKI SHIPYARD"],
  ["SUN DIANA","2025 · SEP","12,455.57","127.00","11.30","16","13,049.107","PANAMA","SUS 329J3L Duplex","FUKUOKA SHIPBUILDING · NAGASAKI YARD"],
  ["SUN GAIA","2026 · AUG","16,181.71","142.00","11.80","20","17,406.755","SINGAPORE","SUS 329J3L Duplex","USUKI SHIPYARD"],
];

function Tanker({ name, long }: { name: string; long: boolean }) { return <svg className={`tanker ${long ? "tanker-long" : ""}`} viewBox="0 0 280 92" role="img" aria-label={`Illustrative chemical tanker profile for ${name}`}><path d="M15 63h214l28-16h11l-10 26H45z" fill="currentColor"/><path d="M171 46h50l-11-23h-26z" fill="currentColor" opacity=".72"/><path d="M205 23v-12h5v12m-19 23V32h16v14m-86 17V45h39v18" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M75 60h107M53 52h104" fill="none" stroke="currentColor" strokeWidth="2" opacity=".8"/><circle cx="55" cy="70" r="3" fill="#9fe5fb"/><circle cx="230" cy="70" r="3" fill="#9fe5fb"/></svg>; }

export default function FleetPage() {
  const fleetRef = useRef<HTMLDivElement>(null);
  const [fleetVisible, setFleetVisible] = useState(false);

  useEffect(() => {
    const node = fleetRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFleetVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.14 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <main className="subpage"><header className="subpage-header"><a href="/Website-SU-Navigation/" className="subpage-brand">SU NAVIGATION</a><nav><a href="/Website-SU-Navigation/about">About</a><a href="/Website-SU-Navigation/services">Services &amp; safety</a><a href="/Website-SU-Navigation/fleet">Fleet</a><a href="/Website-SU-Navigation/contact">Contact</a></nav></header>
  <section className="subpage-hero"><p>Fleet list</p><h1>Designed for<br/><em>complex cargo.</em></h1><a href="https://www.sunavigation.com/info/index.html" target="_blank" rel="noreferrer">View the original SU Navigation fleet list ↗</a></section>
  <section className="subpage-section fleet-detail"><div className="fleet-detail-intro"><h2>Fleet specifications</h2><p>All vessels are double-hull chemical &amp; oil tankers, IMO II &amp; III, class NK, managed by Sun Technomarine. The vessel drawings are illustrative profiles, not photographs.</p></div><div ref={fleetRef} className="vessel-grid" data-fleet-visible={fleetVisible}>{vessels.map(([name,built,dwt,loa,depth,tanks,capacity,flag,tank,dockyard]) => <article className="vessel-card" key={name}><Tanker name={name} long={Number(loa)>127}/><div className="vessel-card-head"><h3>{name}</h3><span>{flag}</span></div><dl><div><dt>Built</dt><dd>{built}</dd></div><div><dt>DWT</dt><dd>{dwt} MT</dd></div><div><dt>LOA</dt><dd>{loa} m</dd></div><div><dt>Depth</dt><dd>{depth} m</dd></div><div><dt>Tank</dt><dd>{tanks}</dd></div><div><dt>Capacity</dt><dd>{capacity} m³</dd></div><div><dt>Tank material</dt><dd>{tank}</dd></div><div><dt>Dockyard</dt><dd>{dockyard}</dd></div></dl></article>)}</div><div className="fleet-links"><a href="https://www.shokuyu.com/en/info/outward.html" target="_blank" rel="noreferrer">Oceangoing fleet list of Shokuyu Tanker Group ↗</a><a href="https://www.shokuyu.com/en/info/index.html" target="_blank" rel="noreferrer">Domestic fleet list (Japan) of Shokuyu Tanker Group ↗</a></div></section>
</main>; }
