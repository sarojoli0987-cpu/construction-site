// The 5-step process. Edit here to change the "How We Work" section.

export type Step = {
  number: string;
  title: string;
  text: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Understand the Project",
    text: "We carefully understand the project requirements, scope, location, and objectives before beginning work.",
  },
  {
    number: "02",
    title: "Plan & Prepare",
    text: "We develop a practical plan covering resources, materials, workforce, timeline, and project requirements.",
  },
  {
    number: "03",
    title: "Build with Quality",
    text: "Our team carries out construction with attention to quality, safety, and proper project standards.",
  },
  {
    number: "04",
    title: "Monitor & Manage",
    text: "We continuously monitor progress and manage resources to keep the project on track.",
  },
  {
    number: "05",
    title: "Complete & Deliver",
    text: "We complete the work responsibly and deliver the finished project with a focus on client satisfaction and long-term value.",
  },
];