export const services = [
  {
    id: "tarot-readings",
    title: "Tarot Readings",
    mode: "Online",
    status: "available",
    description:
      "Clarity-forward readings that translate symbols into practical, grounded guidance you can use right away.",
    detail:
      "Insightful, compassionate tarot sessions that balance intuition with real-world steps. Expect honesty, warmth, and a focus on what you can influence next.",
    options: [
      { label: "15 minutes", duration: 15, price: "$45" },
      { label: "30 minutes", duration: 30, price: "$75" },
      { label: "60 minutes", duration: 60, price: "$120" },
      { label: "90 minutes", duration: 90, price: "$160" },
    ],
  },
  {
    id: "spell-work",
    title: "Spell Work",
    mode: "Online",
    status: "available",
    description:
      "Intentional workings tailored to your situation, focused on alignment and sustainable momentum.",
    detail:
      "We co-design the working with clear intention, ethical boundaries, and practical follow-through. Each working includes a brief consultation and integration notes.",
    options: [
      { label: "One-day working", duration: 1, price: "$140" },
      { label: "Three-day working", duration: 3, price: "$260" },
      { label: "Seven-day working", duration: 7, price: "$480" },
    ],
  },
  {
    id: "sound-healing",
    title: "Sound Healing",
    mode: "In Person",
    status: "coming-soon",
    availableFrom: "mid-February",
    description:
      "Immersive sound baths with chimes, bowls, and gentle instruments to help your system soften.",
    detail:
      "A calming in-person session designed to settle the nervous system. Offered with gentle breathwork and grounding practices.",
    options: [{ label: "45 minutes", duration: 45, price: "$95" }],
  },
  {
    id: "energetic-alignment-massage",
    title: "Energetic Alignment Massage",
    mode: "In Person",
    status: "coming-soon",
    availableFrom: "mid-February",
    description:
      "Hands-on bodywork blended with subtle energy alignment for full-body reset.",
    detail:
      "A soothing massage that layers in subtle energy balancing. Optionally paired with sound healing for deeper relaxation.",
    options: [
      { label: "60 minutes", duration: 60, price: "$140" },
      { label: "60 + 30 minute sound add-on", duration: 90, price: "$185" },
    ],
  },
];

export const getServiceById = (id) =>
  services.find((service) => service.id === id);

