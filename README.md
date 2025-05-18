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
