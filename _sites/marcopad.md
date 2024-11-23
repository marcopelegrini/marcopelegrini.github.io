---
title: Marcopad
index: 1
description: A compact 3x3 keys macropad built with RP-2040 Zero
---

<div class="content-floating">
   <section style="margin: 50px 0;">
      <div class="round-number">1</div>
      <article class="indented">
         <h2>Introduction</h2>
         <div class="flex-container">
            <div class="flex-item-left">
               <p>The Marcopad - <i>a word play with my name, Marco</i> - is a compact 3x3 keys macropad built with RP-2040 Zero</p>
               <p>It's built using the <a href="https://www.waveshare.com/wiki/RP2040-Zero">RP-2040 Zero</a> as MCU, <a href="https://keebd.com/en-ca/collections/choc-switches">Choc</a> mechanical keyboard switches, <a href="https://www.adafruit.com/product/4960">SK6812 MINI-E RGB</a> LEDs for backliting (optional) and simple discrete electronic components.</p>
               <p>The original design is composed of a 3D printed base, a custom PCB, a laser-cut acrylic faceplate, and laser-cut acrylic keycaps.</p>
               <p>The excellent <a href="https://qmk.fm/">QMK Firmware</a> is used to control the function keys and the backlight.</p>
            </div>
            <div class="flex-item-right">
               <img src="{{ 'assets/img/marcopad/hardware/macropad.png' | relative_url }}" alt="Marcopad PCB Mounted" title="Marcopad PCB Mounted">
            </div>
         </div>
      </article>
   </section>
   <section style="margin: 50px 0;">
      <div class="round-number">2</div>
      <article class="indented">
         <h2>Hardware</h2>
         <h3>PCB</h3>
         <div class="flex-container">
            <div class="flex-item-left">
               <h4>Component list</h4>
               <ul>
                  <li>1x <a href="https://www.waveshare.com/wiki/RP2040-Zero">RP-2040 Zero</a></li>
                  <li>9x <a href="https://keebd.com/en-ca/collections/choc-switches">Choc</a></li>
                  <li>9x 1N4148 (DO-35 package) diodes</li>
               </ul>
               <h4>(Optional) Backlight component list</h4>
               <ul>
                  <li>1x 330Ω (SMD package 1206) resistor</li>
                  <li>9x <a href="https://www.adafruit.com/product/4960">SK6812 MINI-E RGB</a> (alternativelly WS2812B 6028 can also be used)</li>
               </ul>            
            </div>
            <div class="flex-item-right">
               <img src="{{ 'assets/img/marcopad/hardware/pcb-mounted.png' | relative_url }}" alt="Marcopad PCB Mounted" title="Marcopad PCB Mounted">
            </div>
         </div>
         <h3>Base</h3>
         <div class="flex-container">
            <div class="flex-item-left">
               <p>I've custom designed a base which can be 3D printed using PLA, Resin or other materials.</p>
               <p>Find the 3mf file <a href="">here</a>.</p>
            </div>
            <div class="flex-item-right">
               <img src="{{ 'assets/img/marcopad/hardware/3d-pla-base.png' | relative_url }}" alt="Marcopad PCB Mounted" title="Marcopad PCB Mounted">
            </div>
         </div>         
         <div class="flex-container">
            <div class="flex-item-left">
               <h3>Faceplate</h3>
               <p>I've custom designed a faceplate for laser cutting.</p>
               <p>Find the svg file <a href="">here</a>.</p>
            </div>
            <div class="flex-item-right">
               <img src="{{ 'assets/img/marcopad/hardware/faceplate.png' | relative_url }}" alt="Marcopad PCB Mounted" title="Marcopad PCB Mounted">
            </div>
         </div>
         <div class="flex-container">
            <div class="flex-item-left">
               <h3>Key caps</h3>
               <p>I use the cutouts of the faceplate as keys, but obviously you can design your own keys or adjust the faceplace to fit standard Choc keycaps which is widely available online.</p>
               <p>For the key illustrations, I've printed images on stickers.</p>
            </div>
            <div class="flex-item-right">
               <img src="{{ 'assets/img/marcopad/hardware/keys.png' | relative_url }}" alt="Marcopad PCB Mounted" title="Marcopad PCB Mounted">
            </div>
         </div>
      </article>
   </section>
   <section style="margin: 50px 0;">
      <div class="round-number">3</div>
      <article class="indented">
         <h2>Software</h2>
            <h3>Initial Setup</h3>
               <p>The Marcopad uses the <a href="https://qmk.fm/">QMK</a> as the firmware to control the function keys and the backlit.</p>
               <h5>Basic setup</h5>
                  <p>Follow <a href="https://docs.qmk.fm/newbs_getting_started">QMK's instructions</a> for Prerequisites, Preparing your environment and Setting up QMK.</p>
               <h5>Entering flashing mode</h5>
                  <p>The first time you connect the Marcopad to your computer, your should see a volume/drive named "RPI-RP2".</p>
                  <p>If it's not showing up, try pressing and holding the <kbd>BOOT</kbd> button, then short press the <kbd>RESET</kbd> button on the RP2040 Zero.</p>
                  <p>If the issue persists, you problem might be with the hardware itself, connections or soldering. Please check everything.</p>
               <h5>Flashing the firmware</h5>
                  <p>Once installed, go to QMK's home folder:</p>
                  <code>❯ qmk cd</code>
                  <p>Flash the firmware:</p>
                  <code>❯ make marcopad:default:flash</code>
                  <p>✅ Done, your Marcopad is ready for use.</p>
                  <p><i>By default, the keys are mapped to <kbd>1-9</kbd>, try them out to make sure everything works.</i></p>
            <h3>Keymap configuration</h3>
               <p>QMK is very flexible, extensible and configurable. You can explore the QMK's documentation for advanced setup.</p>
               <p>To start you'll want to at least assign a key/function to each key.</p>
               <h5>Create a new keymap without backlit</h5>
                  <code>❯ qmk new-keymap -kb marcopad -km [your keympap name]</code>
                  <p><i>The new keymap is based on the <b>default</b> keymap, without backlit enabled. If you opted for adding backlit, use the next option</i></p>
               <h5>Create a new keymap with backlit enabled</h5>
                  <code>❯ cp -r keyboards/marcopad/keymaps/backlit keyboards/marcopad/keymaps/[your keymap name]</code>
               <h5>Edit the layout</h5>
                  <p>Edit the <code>keyboards/marcopad/keymaps/[your keymap name]/keymap.c</code> file.</p>
                  <p>You'll now replace the key mappings in the following section of the file:</p>
                  <pre>
[0] = LAYOUT_ortho_3x3(
                        KC_P7,   KC_P8,   KC_P9,
                        KC_P4,   KC_P5,   KC_P6,
                        KC_P1,   KC_P2,   KC_P3
                     )</pre>
                  <p>For each entry in the "matrix", replace with one of the <a href="https://docs.qmk.fm/keycodes">available keycodes</a>.</p>
                  <p>You can also use <a href="https://docs.qmk.fm/feature_advanced_keycodes">modifier keys</a> and other QMK features to define the key's function.</p>
                  <p>For instance, if you want be bottom-left key (currenty KC_P1) to function as "copy", replace <kbd>KC_P1</kbd> for <kbd>LCMD(KC_C)</kbd> on macos or <kbd>LCTL(KC_C)</kbd> on Windows. The "paste" command would be <kbd>CMD(KC_V)</kbd> on macos or <kbd>LCTL(KC_V)</kbd> on Windows.</p>
               <h5>Flash your custom firmware:</h5>
                  <code>❯ make marcopad:[your keymap name]:flash</code>
                  <p>✅ Done, your Marcopad is ready for use.</p>
      </article>
   </section>   
</div>

