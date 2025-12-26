---
layout: post
title:  "Glåüm Matrix"
summary: "Draw your dreams!"
author: marco
tags: [hardware, software, burningman, public]
categories: [Art, BurningMan]
image: assets/images/glaum-matrix/cta.jpg
---

The Glåüm Matrix was a concept of a LED matrix that would display images created via an editor one could access using their smartphone.

### Matrix

The LED matrix consited in 16x16 LEDs 1" apart, connected in a zig-zag pattern. The LEDS were secured to a frame made of 5mm birch with 3.5mm birch sheets seperators.

![fivehundred]({{ site.baseurl }}/assets/images/glaum-matrix/1.jpg)
![fivehundred]({{ site.baseurl }}/assets/images/glaum-matrix/2.jpg)
![fivehundred]({{ site.baseurl }}/assets/images/glaum-matrix/3.jpg)
![fivehundred]({{ site.baseurl }}/assets/images/glaum-matrix/4.jpg)
![fivehundred]({{ site.baseurl }}/assets/images/glaum-matrix/5.jpg)
![fivehundred]({{ site.baseurl }}/assets/images/glaum-matrix/6.jpg)

### Software

The sofware part consisted in a client/server [React / NodeJS API](https://github.com/chanteblais/glaum_matrix) running on a RaspberryPi 3:

- The client is a simple pixel image editor with 16x16 pixels, with support for multiple colours and frames (for gifs).
- The server would receive the bitmap in a JSON format from the client and draw on the matrix using the [rpi-ws281x](https://www.npmjs.com/package/rpi-ws281x) package.

The Pi was also a Wifi hotspot (not connected to the internet though). When users connected to the Pi they would see a link to the image editor, and they drew on the editor the matrix would display the image.

Users could also create, save and load gifs which would play in a loop.

### Status

I was building this with an ex-girlfriend... as our relationship ended, so did the project, unfortunatelly. I would say it sits at 80% conclusion.

Built with:

- Adobe Illustrator
- HAKKO FX-888D Soldering Iron
- Universal Laser Systems Laser Cutter
- XCarve CNC
- Rotary Sander
- Belt+Disc Sander
