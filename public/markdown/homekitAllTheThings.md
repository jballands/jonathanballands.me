![Siri, open the garage door.](https://i.imgur.com/6wot7mN.gif)

(If you just want to learn how to make all your "smart" crap work with Apple's HomeKit, just click [here](#setting-up-your-smart-devices)).

One of the first things I wanted to do after buying my house was to put a bunch of smart things in it.
I already owned a few smart stuff, but I had to end up purchasing a few things as well:

- Some [Nest thermostats](https://nest.com/thermostats/nest-learning-thermostat/overview/)
- A smart deadbolt lock
- A smart plug
- A [LiftMaster garage door opener](https://www.liftmaster.com/for-homes/garage-door-openers/premium-series)

You'd think all of this is cool, but one of the core issues behinds smart stuff is that you usually wind up with an app
folder that looks like this:

![Too many smart apps.](https://i.imgur.com/iF0uUPw.jpg)

- To control my thermostat, I have to go into the Nest app.
- To control my garage door, I have to use the LiftMaster app.
- To control my lights, I have to go into the [Kasa](https://www.tp-link.com/us/home-networking/smart-home/kasa.html) app.
- To control my locks, I have to access the [SmartThings](https://www.smartthings.com) app.

And this list will most certainly grow.

There are way too many protocols out there (SmartThings, myQ, Wink, and Nest are a few), and a lot of smart devices
are siloed into a specfic protocol. This means if you really like a particular "smart" thing but it isn't compatible with your
prefered app, then sucks to suck, you can't have it.

In my case, I really wanted to use [Apple's HomeKit](https://www.apple.com/ios/home/) app to control all of my smart objects,
so I had to make sure I buy HomeKit compatible devices. [I do not care for most of them.](https://www.apple.com/us/shop/accessories/all-accessories/homekit)

Why HomeKit?

1. I have mostly Apple devices so this is the native solution.
2. HomeKit intergrates into Siri nicely.
3. HomeKit works with many kinds of devices ([it's not mainly for garage doors](https://www.liftmaster.com/for-homes/myq-connected-home)).
4. It's not ugly:

![The Home app just looks nice.](https://i.imgur.com/gb2eQcc.jpg)

If you're like me and use a lot of "smart" crap that isn't compatible with one another, there's this natty GitHub project called
[Homebridge](https://github.com/nfarina/homebridge) to help you out. It was definitely an adventure to get it all set up correctly, though...

# Understanding the Problem

You can think of smart devices as part of one of two groups: devices that have a built-in wifi receiver, and devices that require an external hub.
A **hub** is a device that coordinates your smart devices with your phone or computer so you can control them.

Some smart devices, like Nest and TP-Link devices, have a built-in wifi receiver that allows them to directly connect to the Internet, and the
manufacturer provides some sort of gateway that allows that manufacturer's app (like the Nest app or Kasa) to communicate with these devices:

![How wifi enabled devices work.](https://i.imgur.com/Dd0cpOM.png)

Some smart devices, however, do not have a built-in wifi receiver, and only know how to communicate via a short-range protocol; the most
common are [Z-Wave](https://en.wikipedia.org/wiki/Z-Wave) and [Zigbee](https://en.wikipedia.org/wiki/Zigbee). This means you need some
sort of **hub** that can turn the Z-Wave/Zigbee signals into wifi signals so that you can control the device:

![How hub-based devices work.](https://i.imgur.com/aMtOHBX.png)

Notice how the bit between the cloud service and the iOS device is the same in both diagrams. This issue here is that some of the cloud
services our smart devices communicate with don't know how to talk to Apple Homekit. Instead, they only know how to talk with their
proprietary apps.

Our goal here is to insert a hub between the cloud service and the iOS device that knows how to turn wifi signals into something Homekit can
understand. In other words, we need to create a **bridge** between all the different cloud services our devices are using and Apple Homekit.

# Setting Up Your Smart Devices

Some of my devices, like my Nest thermostat and garage door opener, have wifi receivers built-in, so setting them up is pretty straight
forward if you follow the instructions.

The trickier devices are the ones that require a hub. Usually these devices are cheaper than their wifi-enabled counterparts, but they require
that you purchase a hub in order to use them. In a way, this adds greater flexability, because one hub can talk with hundreds of devices. 

Some people choose to stick with a specific protocol in order to ensure compatibility, but the fact is that if you buy a hub that can interface
with Z-Wave and Zigbee devices, you've accounted for more tha 90% of all smart devices on the market. Also, since we'll be using Homebridge
to bridge the gap between our devices and Homekit, having a device that talks with a slightly different protocol won't make that much difference.

In my case, I bought [Samsung's SmartThings Hub](https://www.amazon.com/Samsung-SmartThings-Smart-Home-Hub/dp/B010NZV0GE) since it can interface
with both Z-Wave and Zigbee, and there's [a Homebridge plugin available](https://www.npmjs.com/package/homebridge-smartthings) for SmartThings
(more on plugins in a bit).

# Bridging the Gap

![SmartThings Hub and Raspberry Pi](https://i.imgur.com/XirYnTR.jpg)

