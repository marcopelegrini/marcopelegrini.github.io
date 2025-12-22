---
layout: post
title:  "Baratza improvements"
summary: "Some improvements for the Baratza Encore"
author: marco
tags: [utilities, public]
categories: [ Utilities ]
image: assets/images/baratza-improvements/cta.jpg
comments: false
---

## Introduction

The [Baratza Encore](https://www.baratza.com/en-ca/product/encoretm-zcg485) is probably the best no-frills coffee grinder out there.

It lacks a few things though:

- It doesn't have a timer, so you need to time the grind yourself if you want to grind only the amount for one coffee.
- It has a container for the ground coffee, but I'd rather have a porta-filter fitting so I don't need to use the container.

Let's solve those issues:

## Timer

To create the timer, I've embedded an [Arduino Leonardo](https://store-usa.arduino.cc/products/arduino-leonardo-with-headers) which I had laying around (I know it's overkill and I'll replace it with an ATMega custom board soon) which I've powered through a USB power adapter stripped down.

The Arduino was programmed to keep a timer stored in the ROM. The timer is set by holding the push button on the Baratza (the one for the pulse grind which I disconnected).

When the button is short-pressed, the grinder is turned on for the period previously set. Perfect amount of coffee every time.

I don't have photos of this, but I'll take some when I replace the Arduino with my own board.

## Porta-filter adapter

I've found a [design](https://www.printables.com/model/296316-portafilter-holder-for-baratza-encore) online which was exactly what I was looking for, so I just made small adjustments and printed it. Easy.

Built with:

- Autodesk Fusion
- HAKKO FX-888D Soldering Iron
- X1 Carbon 3D Printer

![fivehundred]({{ site.baseurl }}/assets/images/baratza-improvements/1.jpg)
![fivehundred]({{ site.baseurl }}/assets/images/baratza-improvements/2.jpg)
