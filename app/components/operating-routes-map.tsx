"use client";

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import world from "world-atlas/countries-110m.json";

type Coordinates = [number, number];

const ports: Record<string, Coordinates> = {
  Singapore: [103.8198, 1.3521], Bangkok: [100.5018, 13.7563], Manila: [120.9842, 14.5995],
  Taipei: [121.5654, 25.033], Shanghai: [121.4737, 31.2304], Busan: [129.0756, 35.1796], Tokyo: [139.6917, 35.6895],
};

const configuration = {
  corridor: {
    title: "Southbound · Northbound", center: [119, 19] as Coordinates, scale: 600,
    labels: [["Singapore", ports.Singapore], ["Thailand", ports.Bangkok], ["Taiwan", ports.Taipei], ["South Korea", ports.Busan], ["Japan", ports.Tokyo]] as [string, Coordinates][],
    routes: [[ports.Singapore, ports.Bangkok, ports.Taipei, ports.Busan, ports.Tokyo], [ports.Singapore, ports.Manila, ports.Taipei, ports.Shanghai]] as Coordinates[][],
  },
  farEast: {
    title: "Far East area", center: [126, 28] as Coordinates, scale: 780,
    labels: [["Singapore", ports.Singapore], ["Taiwan", ports.Taipei], ["China", ports.Shanghai], ["South Korea", ports.Busan], ["Japan", ports.Tokyo]] as [string, Coordinates][],
    routes: [[ports.Shanghai, ports.Busan, ports.Tokyo, ports.Taipei, ports.Shanghai], [ports.Singapore, ports.Taipei, ports.Busan]] as Coordinates[][],
  },
};

function pathFor(projection: ReturnType<typeof geoMercator>, route: Coordinates[]) {
  return route.map((point, index) => `${index ? "L" : "M"}${projection(point)?.join(" ")}`).join(" ");
}

export function OperatingRoutesMap({ variant }: { variant: keyof typeof configuration }) {
  const config = configuration[variant];
  const projection = geoMercator().center(config.center).scale(config.scale).translate([360, 220]);
  const path = geoPath(projection);
  const countries = feature(world as never, (world as never).objects.countries) as GeoJSON.FeatureCollection;

  return <figure className="route-map-figure">
    <figcaption>{config.title}</figcaption>
    <svg viewBox="0 0 720 440" role="img" aria-label={`${config.title} operating-route map`}>
      <defs><filter id={`glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <rect width="720" height="440" fill="#0c344b"/>
      <g className="route-map-land">{countries.features.map((country, index) => <path key={index} d={path(country) ?? ""}/>)}</g>
      <g className="route-map-routes">{config.routes.map((route, index) => <path key={index} d={pathFor(projection, route)} className={`route-map-line route-map-line-${index + 1}`}/>)}</g>
      <g className="route-map-ports">{config.labels.map(([label, coordinates]) => { const point = projection(coordinates); return point && <g key={label} transform={`translate(${point[0]}, ${point[1]})`}><circle r="5" filter={`url(#glow-${variant})`}/><text x="10" y="-9">{label}</text></g>; })}</g>
      <text className="route-map-note" x="24" y="406">ILLUSTRATIVE ROUTE NETWORK · GEOGRAPHIC BASE: NATURAL EARTH</text>
    </svg>
  </figure>;
}
