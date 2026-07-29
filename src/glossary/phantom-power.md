---
layout: layouts/glossary.njk
title: "What Is Phantom Power? 48V Microphone Power Explained"
description: "Learn what 48V phantom power does, which condenser, dynamic, and ribbon microphones need it, and how creators can connect XLR audio equipment safely."
permalink: /glossary/phantom-power/
related_terms:
  - audio-interface
  - shotgun-microphone
  - condenser-microphones
  - dynamic-microphones
  - microphone-preamp
---

<h2>Phantom Power</h2>
<p><strong>Phantom power</strong> is DC electricity delivered through a balanced microphone cable to operate compatible microphone electronics. It is most commonly supplied by a mixer, recorder, preamp, or <a href="/glossary/audio-interface">audio interface</a> and is usually activated with a button labeled <strong>48V</strong>, <strong>P48</strong>, or <strong>phantom</strong>.</p>
<p>The power travels through the same XLR cable that carries the audio signal, so no separate power wire is required. This is the "phantom" part: the voltage is present on the balanced line without becoming the recorded audio.</p>
<h3>What phantom power does</h3>
<p>Many condenser microphones contain active electronics that require power. Phantom power can operate components such as:</p>
<ul>
<li>The microphone's internal impedance converter.</li>
<li>A built-in preamplifier.</li>
<li>Active capsule electronics.</li>
<li>An active ribbon circuit.</li>
<li>An inline microphone booster or active DI box.</li>
</ul>
<p>Phantom power does <strong>not</strong> replace microphone preamp gain. It powers the electronics, while the preamp raises the microphone's low-level audio signal to a usable recording level.</p>
<h3>Why it is usually called 48V</h3>
<p>The most familiar system is <strong>48-volt phantom power</strong>, often called P48. Some standards and devices support lower voltages, and compatible microphones may accept a range rather than exactly 48 volts.</p>
<p>A balanced XLR phantom circuit normally places equal DC voltage on pins 2 and 3 relative to pin 1. Because the voltage is equal on both signal conductors, a properly balanced input rejects it from the differential audio signal while the microphone can draw power from it.</p>
<table>
<thead>
<tr>
  <th>XLR pin</th>
  <th>Typical role</th>
  <th>Phantom-power relationship</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Pin 1</td>
  <td>Ground and shield</td>
  <td>Reference return</td>
</tr>
<tr>
  <td>Pin 2</td>
  <td>Audio signal conductor</td>
  <td>Receives the same DC voltage as pin 3</td>
</tr>
<tr>
  <td>Pin 3</td>
  <td>Audio signal conductor</td>
  <td>Receives the same DC voltage as pin 2</td>
</tr>
</tbody>
</table>
<p>This balanced arrangement is why normal XLR-to-XLR cabling matters.</p>
<h3>Which microphones need phantom power?</h3>
<table>
<thead>
<tr>
  <th>Microphone or device type</th>
  <th>Usually needs phantom power?</th>
  <th>Important exception</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Studio condenser microphone</td>
  <td>Often</td>
  <td>Some use batteries, tubes, USB, or dedicated supplies</td>
</tr>
<tr>
  <td>XLR shotgun condenser</td>
  <td>Often</td>
  <td>Some use internal batteries or rechargeable power</td>
</tr>
<tr>
  <td>Standard moving-coil dynamic mic</td>
  <td>No</td>
  <td>A model with built-in active electronics may require it</td>
</tr>
<tr>
  <td>Passive ribbon microphone</td>
  <td>No</td>
  <td>Some vintage or damaged units can be vulnerable to phantom faults</td>
</tr>
<tr>
  <td>Active ribbon microphone</td>
  <td>Often</td>
  <td>Follow the manufacturer's specified voltage</td>
</tr>
<tr>
  <td>USB microphone</td>
  <td>No external phantom</td>
  <td>Powered through USB and contains its own interface electronics</td>
</tr>
<tr>
  <td>Lavalier with 3.5 mm connector</td>
  <td>Usually not 48V</td>
  <td>Often uses plug-in power or transmitter bias voltage</td>
</tr>
<tr>
  <td>Inline mic booster</td>
  <td>Often</td>
  <td>Some pass phantom to the microphone and some block it</td>
</tr>
<tr>
  <td>Active DI box</td>
  <td>Sometimes</td>
  <td>Confirm the device's supported power options</td>
</tr>
</tbody>
</table>
<p>The correct rule is not "all condensers need 48V." Check the microphone manual and connector type.</p>
<h3>Phantom power vs. microphone gain</h3>
<p>Phantom power and gain solve different problems.</p>
<ul>
<li><strong>Phantom power</strong> supplies electricity to compatible active circuitry.</li>
<li><strong>Preamp gain</strong> amplifies the audio voltage produced by the microphone.</li>
<li><strong>Digital level</strong> changes the signal after conversion or inside software.</li>
<li><strong>Fader level</strong> changes the mix level after the input gain stage.</li>
</ul>
<p>Turning on 48V does not provide a clean 20 or 30 dB gain boost to a normal dynamic microphone. A low-output dynamic may need more preamp gain or an inline booster, not phantom applied directly as "volume."</p>
<p>Some inline boosters use phantom power to run their own electronics while preventing that voltage from reaching the connected passive microphone. Confirm the specific product design.</p>
<h3>Phantom power vs. plug-in power</h3>
<p><strong>Plug-in power</strong> is a lower-voltage system commonly used by 3.5 mm camera microphones, lavaliers, and portable recorders. It is not the same as balanced 48V phantom power.</p>
<table>
<thead>
<tr>
  <th>Feature</th>
  <th>48V phantom power</th>
  <th>Plug-in power</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Common connector</td>
  <td>Balanced XLR</td>
  <td>3.5 mm TRS or TRRS</td>
</tr>
<tr>
  <td>Typical use</td>
  <td>Professional condenser microphones and active devices</td>
  <td>Small electret camera or lavalier microphones</td>
</tr>
<tr>
  <td>Voltage</td>
  <td>Commonly 48V, with supported standards and ranges</td>
  <td>Usually a few volts, device-dependent</td>
</tr>
<tr>
  <td>Wiring</td>
  <td>Equal DC on balanced signal conductors</td>
  <td>Bias voltage on a miniature unbalanced connection</td>
</tr>
<tr>
  <td>Interchangeable?</td>
  <td>No</td>
  <td>No</td>
</tr>
</tbody>
</table>
<p>Do not use a simple passive adapter and assume the voltage systems become compatible. Use the adapter, preamp, or power converter specified by the microphone manufacturer.</p>
<h3>Phantom power and audio interfaces</h3>
<p>On an <a href="/glossary/audio-interface">audio interface</a>, the 48V switch normally applies power only to the XLR microphone portion of a combo input—not the quarter-inch line or instrument connection.</p>
<p>Interfaces may switch phantom power:</p>
<ul>
<li>Per individual input.</li>
<li>In pairs.</li>
<li>In banks of four or more channels.</li>
<li>Globally across every microphone input.</li>
</ul>
<p>A grouped switch means all XLR devices in that bank must be compatible before phantom is enabled.</p>
<h3>Can phantom power damage a microphone?</h3>
<p>Properly wired modern balanced dynamic microphones usually tolerate phantom power, even though they do not need it. That does not make phantom universally harmless.</p>
<p>Risk increases with:</p>
<ul>
<li>Vintage or passive ribbon microphones not designed for it.</li>
<li>Unbalanced microphones or adapters.</li>
<li>Damaged or incorrectly wired XLR cables.</li>
<li>Patch bays that momentarily short conductors while plugging.</li>
<li>Line-level devices connected directly to powered mic inputs.</li>
<li>Equipment with an unknown or unsupported wiring scheme.</li>
</ul>
<p>Check the manual whenever compatibility is uncertain. "It worked once" is not proof that the connection is safe.</p>
<h3>Safe phantom-power procedure</h3>
<ol>
<li>Turn down monitor, headphone, and preamp levels.</li>
<li>Switch phantom power off.</li>
<li>Connect the microphone with a good balanced XLR cable.</li>
<li>Confirm that the microphone or active device supports the available voltage.</li>
<li>Turn phantom power on.</li>
<li>Allow a few seconds for the circuit to stabilize.</li>
<li>Raise gain while monitoring the signal.</li>
<li>Before disconnecting, lower levels and switch phantom off again.</li>
</ol>
<p>This procedure reduces loud pops and protects headphones, speakers, and connected equipment.</p>
<h3>Why plugging and unplugging can create pops</h3>
<p>When an XLR connection is made or broken, the contacts may not engage at exactly the same time. A temporary voltage imbalance can create a large transient. Even if the microphone survives, that pop can be unpleasant in headphones or dangerous to loudspeakers at high monitor levels.</p>
<p>Muting and disabling phantom before patching is good studio practice.</p>
<h3>Phantom power for shotgun microphones</h3>
<p>Many professional XLR <a href="/glossary/shotgun-microphone">shotgun microphones</a> are condenser designs that use 48V phantom power. Other models use internal batteries, rechargeable cells, USB, or low-voltage camera power.</p>
<p>Before a shoot, confirm:</p>
<ul>
<li>The mic's required voltage.</li>
<li>Whether the camera or recorder can supply it.</li>
<li>Battery runtime if the microphone is self-powered.</li>
<li>Whether phantom is available on every input being used.</li>
<li>Whether a wireless transmitter supplies compatible bias or phantom power.</li>
</ul>
<p>A 3.5 mm on-camera shotgun should not be assumed to accept 48V merely because an XLR version of the product does.</p>
<h3>Troubleshooting phantom-power problems</h3>
<p>If a condenser microphone produces no signal:</p>
<ul>
<li>Confirm that it actually requires phantom power.</li>
<li>Turn on 48V for the correct input or input bank.</li>
<li>Use XLR-to-XLR rather than entering through a quarter-inch jack.</li>
<li>Replace the cable with a known balanced cable.</li>
<li>Check that an adapter, patch bay, or wireless transmitter passes phantom correctly.</li>
<li>Wait several seconds after activation.</li>
<li>Verify the input is set to microphone level rather than line or instrument.</li>
<li>Raise preamp gain after power is established.</li>
</ul>
<p>If the signal is weak, phantom may be functioning while the preamp gain is too low. If the signal distorts, the input gain or pad may be wrong; increasing phantom voltage is not the solution.</p>
<h3>Common phantom-power mistakes</h3>
<ul>
<li>Calling 48V a microphone gain boost.</li>
<li>Turning phantom on for every channel by default.</li>
<li>Plugging or unplugging while monitors are loud.</li>
<li>Assuming every condenser uses phantom power.</li>
<li>Feeding 48V into a 3.5 mm microphone or unbalanced adapter.</li>
<li>Believing every dynamic or ribbon microphone is automatically safe.</li>
<li>Using the quarter-inch side of a combo input and expecting phantom power.</li>
<li>Forgetting that one switch may power several XLR inputs.</li>
<li>Confusing USB bus power with phantom power.</li>
<li>Ignoring cables and patch bays when troubleshooting.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>Should I turn on phantom power for a condenser microphone?</h4>
<p>Turn it on when the microphone's manual specifies phantom power and the connected XLR input supplies a supported voltage. Some condensers use batteries, USB, tubes, or dedicated supplies instead.</p>
<h4>Will 48V make a dynamic microphone louder?</h4>
<p>No. A normal passive dynamic microphone does not use phantom voltage as gain. Raise the microphone preamp gain or use a compatible inline booster if more clean amplification is needed.</p>
<h4>Can phantom power damage a ribbon microphone?</h4>
<p>Some modern balanced ribbons tolerate it, and active ribbons may require it. Vintage, passive, damaged, or incorrectly connected ribbon microphones can be vulnerable. Follow the manufacturer's guidance rather than applying one rule to every ribbon.</p>
<h4>Do USB microphones need phantom power?</h4>
<p>No external phantom supply is needed. A USB microphone receives electrical power through USB and contains its own preamp, converter, and digital interface.</p>
