"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Well, I reckon this fella with his data and software is like a catfish in a rain barrel – slippery and hard to pin down! His wizardry with numbers is like watching a frog on a hot plate, jumping from one calculation to the next quicker than a hound on a rabbit trail. But let me tell ya, when it comes to making sense out of a mess of numbers, this fella is sharper than a porcupine's quill. I declare, if data were gold, he'd be richer than a king!",
    name: "Mark Twain",
    title: "Data Delights: Reviews from History's Finest",
  },
  {
    quote:
      "Let them analyze data! This gentleman is like the royal pastry chef of information – whipping up insights so delectable, it's like tasting the finest macarons at Versailles. His software skills are as polished as the Hall of Mirrors, reflecting patterns and trends with such clarity, one might mistake them for diamonds. But beware, lest you lose your head in the labyrinth of his data maze!",
    name: "Marie Antoinette",
    title: "Let Them Analyze Data Cake: A Queen's Review",
  },
  {
    quote:
      "In the realm of data and software, this chap is the epitome of relativity! His algorithms dance like particles in a quantum field, unpredictably yet elegantly shaping the landscape of information. With each line of code, he unravels the mysteries of the universe, leaving us mere mortals in awe of his computational prowess. E=mc^2? More like E=mc^fun when he's around!",
    name: "Albert Einstein",
    title: "Einstein's Equation for Excellence: A Relativistic Review",
  },
  {
    quote:
      "To data or not to data, that is the question! This modern-day bard of algorithms weaves tales more intricate than any Shakespearean drama. His software, a stage whereupon the players of data perform their intricate dance, is a spectacle to behold. With each query, he plucks the strings of information like a virtuoso musician, composing symphonies of insight that would make even the most hardened critic swoon. O brave new world, that has such data in it!",
    name: "Shakespeare",
    title: "Much Ado About Data: A Shakespearean Saga",
  },
  {
    quote:
      "Hark! This master of data and software is as essential to modernity as a key to a kite in a thunderstorm. His analytical prowess shines brighter than a penny in the sun, illuminating the path to progress with each byte of information processed. Like a wise old owl perched atop a database, he surveys the landscape of knowledge with a keen eye, ever ready to unlock the secrets hidden within. In data we trust, for it is the currency of the future, and this gentleman is its most ardent treasurer!",
    name: "Benjamin Franklin",
    title: "Franklin's Founding Insights: An Electric Review of Data",
  },
];
