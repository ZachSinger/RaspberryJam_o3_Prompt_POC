# RaspberryJam_o3_Prompt_POC
This purpose of the Raspberry Jam is to use a Raspberry PI, a display and a USB Pedal to create a simple app that displays the current and next parts of a song that you're playing. 
With an HID compliant USB pedal, a keyboard or the touchscreen, you can switch between songs and parts of songs. For example, when the group will be playing Song A, the screen displays Song A - Intro -> Verse 1.
When the pedal is pressed once, the screen would change to say Song A - Verse 1 => Pre Chorus, or whatever you come up with for your 'parts' of a song. 

## Why make this at all? 
When practicing with a few people from work, we found that without anyone singing the song, it was actually easy to forget your place, or 'where to go next'. This is because with a lot of popular songs from the last century,
it's pretty common for differnt parts of a song to lead into one another interchangeably. We found without hearing the vocal tunes, we often didn't find the cues to move to different parts of the song. 
Sometimes when we speak out loud something like "I wish we had X" or "I wish a thing like Y existed", we can suggest ridiculous ideas, like "I wish I food could just be teleported to me". Something funny though - 
if you pay attention, people often make X or Y a quite practical or at least layman-level plausible. 

Bearing that in mind, on one such occasion with the group I was practicing with, we kept missing the cue for
the song to advance, and were trapped in an eternal loop of verse->pre chorus-> chorus. I said out loud, "If only we had some sort of screen that we could advance with a pedal, and it would display just the name of a part, like Verse or Bridge,
so we knew were to go next". Well in 2025, with the Internet, Amazon, Raspberry Pi 4/5 and AI... as I looked around the room at my jam-mates nodding, I realized if I had a good idea, I could literally do it myself. 

## Initial POC
With about an hour of prompts to o3, I had a nice iterative experience that was truly Agile on fast-forward. I refined the POC as it developed, and while currently the HTML/CSS/JS being put out is quite poorly formed and hardly updateable, 
that isn't the point of this POC. The POC here is to see if this truly feels useful on it's own, or if it needs something different or more to reach the solution to my jam groups issues keeping our place in songs. What's nice about 
using AI for this is I don't have to really do much work, to get a POC to the level it would be at for something I can consider useful normally would take a while, from writing down requirements, to separating concerns, to scaffolding some code, etc.
All to really just 'get a good look' at your idea, to see if it's worth actually truly executing upon. With AI, the entire process from spitballing an idea out loud with someone (in this case, o30 to having a fully working prototype that can be tested
witha  mouse, keyboard, touchscreen or USB pedal was 1 hour. 

Again, I would never really use this as production code, or really even as development code. The state it's in really doesn't lend itself to clarity or structure, and as such is not going to be easily editable or updateable. 
Structure is critical to the iterative process, and adding features in the future is definitely something we should forsee with a DIY project meant to help or increase convenience. Humans tend to see improvement and quickly wish to improve upon it. 
Still, as a programmer, AI helped me do a lot of things that weren't programming that I as a programmer would have had to do on my own. There's no denying the benefit of a sybmiotic workflow with AI. 
