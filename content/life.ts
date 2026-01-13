export type LifeHobby = {
  title: string;
  description: string;
};

export const life = {
  intro:
    "Outside of work, I recharge with games, sports, and family time — still chasing tiny improvements, just with more laughter.",
  hobbies: [
    {
      title: "Video games",
      description:
        "From chill co-op nights to skill-based grinds. I love the mix of strategy, mechanics, and flow.",
    },
    {
      title: "Board games",
      description:
        "Full-on board game fanatic. If it has clever rules and great interaction, I’m in.",
    },
    {
      title: "Chess",
      description:
        "My favorite tiny universe: simple rules, infinite depth. Always learning (always blundering).",
    },
    {
      title: "Gym and soccer",
      description:
        "Fast feet, fast decisions. It's the perfect mental reset after a long day of problem-solving.",
    },
    {
      title: "Guitar",
      description:
        "Helping in developing musical and coordination skills makes the routine much more spicy.",
    },
  ] satisfies LifeHobby[],
} as const;
