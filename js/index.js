let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
  `“It's only after we've lost everything that we're free to do anything.”
  ― Chuck Palahniuk, Fight Club `,
  `“I don't want to die without any scars.”
  ― Chuck Palahniuk, Fight Club `,
  `“You are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world.”
  ― Chuck Palahniuk, Fight Club `,
  `“You know how they say you only hurt the ones you love? Well, it works both ways.”
  ― Chuck Palahniuk, Fight Club`,
  `“Only after disaster can we be resurrected. It's only after you've lost everything that you're free to do anything. Nothing is static, everything is evolving, everything is falling apart.”
  ― Chuck Palahniuk, Fight Club`,
  `“At the time, my life just seemed too complete, and maybe we have to break everything to make something better out of ourselves.”
  ― Chuck Palahniuk, Fight Club`,
  `“What I want is to be needed. What I need is to be indispensable to somebody. Who I need is somebody that will eat up all my free time, my ego, my attention. Somebody addicted to me. A mutual addiction.”
  ― Chuck Palahniuk, Choke`,
  `“The unreal is more powerful than the real. Because nothing is as perfect as you can imagine it. Because its only intangible ideas, concepts, beliefs, fantasies that last. Stone crumbles. Wood rots. People, well, they die. But things as fragile as a thought, a dream, a legend, they can go on and on. If you can change the way people think. The way they see themselves. The way they see the world. You can change the way people live their lives. That's the only lasting thing you can create.”
  ― Chuck Palahniuk, Choke`,
  `“We can spend our lives letting the world tell us who we are. Sane or insane. Saints or sex addicts. Heroes or victims. Letting history tell us how good or bad we are. Letting our past decide our future. Or we can decide for ourselves. And maybe it's our job to invent something better.”
  ― Chuck Palahniuk, Choke`,
  `“Without access to true chaos, we'll never have true peace. Unless everything can get worse, it won't get any better.”
  ― Chuck Palahniuk, Choke`,
  `“For the first time in longer than I can remember, I feel peaceful. Not happy. Not sad. Not anxious. Not horny. Just all the higher parts of my brain closing up shop. The cerebral cortex. The cerebellum. That's where my problem is. I'm now simplifying myself. Somewhere balanced in the perfect middle between happiness and sadness. Because sponges never have a bad day.”
  ― Chuck Palahniuk, Choke`,
  `“We are each our own best effort. And we’re satisfied until we see a photograph or hear a recording of our voice. All the worse is the torture of video, to witness the squawking, gawky monster we’ve created. The you that you’ve chosen from all possible yous to create. The one life you’ve been given, and you’ve dedicated it to perfecting this staggering yammering artificial Frankenstein’s monster stitched together from the traits of other people. Anything original, anything innately you, it’s long ago been discarded.”
  ― Chuck Palahniuk, The Invention of Sound`,
  `“Our greatest creation is our selves. The way we cultivate our appearance and behavior. And nowhere is our artwork more apparent than in our own minds. They way we each have an idea of self. The one perfect self we've chosen by rejecting all other options.”
  ― Chuck Palahniuk, The Invention of Sound`,
  `“Brainless wasn't bad. Today, brainless was right up her alley. This world of grunts and clanking iron, the same tasks repeated mindlessly until failure, Mitzi loved it the moment she'd stepped through the door of the weight room. The Sisyphean repetition of lifting and lowering. Nothing represented life better than this endless losing battle against gravity. The grunts and cries that conveyed so much more than words ever could.”
  ― Chuck Palahniuk, The Invention of Sound `
  // 14 quotes in total^^
];

btn.addEventListener('click', getQuote)

function getQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerText = randomQuote
}