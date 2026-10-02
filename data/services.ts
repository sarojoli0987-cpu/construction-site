// The four core services.
// Add or reorder services here — the UI updates automatically.

import {
  Buildings,
  RoadHorizon,
  Bridge,
  FileText,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export type Service = {
  number: string;
  icon: Icon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    icon: Buildings,
    title: "Building Construction",
    description:
      "Construction of residential, commercial, and institutional buildings with a focus on quality and durability.",
  },
  {
    number: "02",
    icon: RoadHorizon,
    title: "Road & Transportation Infrastructure",
    description:
      "Construction and development of roads and transportation infrastructure for reliable and accessible connectivity.",
  },
  {
    number: "03",
    icon: Bridge,
    title: "Bridge & Civil Infrastructure",
    description:
      "Construction of bridges and essential civil infrastructure designed for safety, strength, and long-term performance.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Government & Contract Projects",
    description:
      "Professional execution of government, tender, and contracted construction projects from planning through completion.",
  },
];