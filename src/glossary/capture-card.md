---
layout: layouts/glossary.njk
title: "What Is a Capture Card? Streaming and Recording Guide"
description: "Learn what a capture card does, how HDMI passthrough differs from capture, and which resolution, frame-rate, latency, and compatibility specs matter."
permalink: /glossary/capture-card/
related_terms:
  - clean-hdmi
  - video-switcher
  - dual-pc-streaming
  - frame-rate-fps
  - video-resolution
---

<h2>Capture Card</h2>
<p>A <strong>capture card</strong> is a device that receives a video signal from a camera, game console, computer, or other source and converts it into video that recording or streaming software can use.</p>
<p>Despite the name, a capture card is not always an internal computer card. Some models install in a desktop computer through PCIe, while external capture devices connect through USB or Thunderbolt. Both types serve the same basic purpose: bringing an external video source into a computer or production workflow.</p>

<h3>What Does a Capture Card Do?</h3>
<p>Most creator capture setups follow this signal path:</p>
<ol>
  <li>A camera, console, or gaming PC sends video through HDMI.</li>
  <li>The capture card receives and processes that signal.</li>
  <li>The card sends a captured video feed to the recording or streaming computer.</li>
  <li>Software such as OBS Studio treats the feed as a video source.</li>
  <li>If the device has HDMI passthrough, it can also send the source to a separate monitor or television.</li>
</ol>
<p>A capture card does not normally create the original image. The camera, console, or computer generates the video; the capture device converts and transports it into the production system.</p>

<h3>Capture Resolution vs. Passthrough Resolution</h3>
<p><strong>Capture resolution</strong> and <strong>passthrough resolution</strong> are different specifications.</p>
<table>
  <thead>
    <tr><th>Specification</th><th>What It Describes</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td>Input</td><td>The signal the capture device can accept</td><td>4K at 60 frames per second</td></tr>
    <tr><td>Capture</td><td>The signal sent to the recording or streaming software</td><td>1080p60</td></tr>
    <tr><td>Passthrough</td><td>The signal forwarded to a monitor or television</td><td>4K60 HDR</td></tr>
  </tbody>
</table>
<p>A device advertised with "4K passthrough" may still record or stream only at 1080p. For example, current creator-focused products can pass a 4K60 HDR signal to a display while capturing a lower-resolution 1080p60 feed. Always read the separate input, capture, and passthrough tables.</p>

<h3>Internal vs. External Capture Cards</h3>
<table>
  <thead>
    <tr><th>Type</th><th>Connection</th><th>Advantages</th><th>Common Limitations</th></tr>
  </thead>
  <tbody>
    <tr><td>External capture device</td><td>USB or Thunderbolt</td><td>Portable, laptop-friendly, easy to move between systems</td><td>Depends on the computer port, cable, driver, and shared bus bandwidth</td></tr>
    <tr><td>Internal capture card</td><td>PCIe slot</td><td>Permanent installation, potentially higher bandwidth, fewer desk cables</td><td>Requires a compatible desktop slot, available PCIe lanes, and physical installation</td></tr>
    <tr><td>Standalone recorder</td><td>Records without a computer</td><td>Useful in the field or as a backup recording path</td><td>May offer fewer live-production controls and require removable storage</td></tr>
  </tbody>
</table>

<h3>When Do You Need a Capture Card?</h3>
<ul>
  <li><strong>Console streaming:</strong> Bring gameplay from a console into a computer running streaming software.</li>
  <li><strong>Camera streaming:</strong> Use a mirrorless camera, DSLR, or camcorder as a higher-quality live camera through HDMI.</li>
  <li><strong>Dual-PC streaming:</strong> Send the gaming computer's video and audio to a separate streaming computer.</li>
  <li><strong>Recording presentations:</strong> Capture the HDMI output of another computer or supported presentation device.</li>
  <li><strong>Multi-camera production:</strong> Bring a camera or a switcher's program output into a computer.</li>
  <li><strong>Archiving external sources:</strong> Record compatible, non-protected video from another device.</li>
</ul>
<p>You may not need one when your webcam connects directly through USB, your camera supports a suitable USB webcam mode, or you are capturing software running on the same computer.</p>

<h3>What Should You Look for in a Capture Card?</h3>
<ul>
  <li><strong>Supported input formats:</strong> Match the source's resolution, frame rate, HDR mode, and color format.</li>
  <li><strong>Maximum capture format:</strong> Confirm what the computer actually receives, not only what the device can pass through.</li>
  <li><strong>Passthrough features:</strong> Gamers may need support for high refresh rates, HDR, variable refresh rate, ultrawide formats, or 4K.</li>
  <li><strong>Computer connection:</strong> Check the required USB generation, Thunderbolt version, or PCIe lane configuration.</li>
  <li><strong>Software support:</strong> Confirm compatibility with the operating system and recording application.</li>
  <li><strong>Audio support:</strong> Determine whether audio arrives through HDMI, analog line input, or a separate interface.</li>
  <li><strong>Latency:</strong> Preview latency and passthrough latency are not necessarily the same.</li>
  <li><strong>UVC support:</strong> Devices that follow USB Video Class standards may appear to software like a webcam, although supported controls still vary.</li>
</ul>

<h3>What Is HDMI Passthrough?</h3>
<p>HDMI passthrough lets the capture device forward the incoming signal to another display. This is especially useful for gaming because the software preview can have more delay than the direct display path.</p>
<p>"Lag-free passthrough" refers to the direct HDMI monitoring path, not a guarantee that the captured preview inside software has zero latency. It also does not guarantee support for every refresh rate, HDR mode, variable-refresh format, or color setting.</p>

<h3>Capture Cards and HDCP</h3>
<p>HDCP is copy protection used with some HDMI content. Capture cards generally cannot record an HDCP-protected signal. A console may capture normal gameplay while blocking protected movies or streaming-video apps.</p>
<p>Creators should not attempt to bypass content protection. If a valid source unexpectedly produces a black screen, check the device's output mode, cables, supported format, and official HDCP guidance.</p>

<h3>Common Capture-Card Problems</h3>
<ul>
  <li><strong>No signal:</strong> The source may be connected to HDMI Out instead of HDMI In, or it may be using an unsupported format.</li>
  <li><strong>Black screen:</strong> HDCP, incompatible HDR, cable problems, or an unsupported resolution may be responsible.</li>
  <li><strong>Choppy video:</strong> The USB port, PCIe slot, storage, computer load, or frame-rate configuration may be limiting performance.</li>
  <li><strong>Delayed audio:</strong> Video and audio may travel through different processing paths and need synchronization.</li>
  <li><strong>No game sound:</strong> The source may be sending audio to a headset or another output instead of HDMI.</li>
  <li><strong>Duplicate audio:</strong> The same captured audio may be added through both the capture source and a separate mixer.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently Asked Questions</h3>
<h4>Is a capture card required for streaming?</h4>
<p>No. It is generally needed when the video comes from an external HDMI source. A single computer can capture its own applications directly, and many webcams connect without a capture card.</p>

<h4>Does a capture card improve video quality?</h4>
<p>It can preserve a higher-quality external signal than some built-in webcam modes, but it cannot add detail that the source does not output. Quality depends on the camera or console, output format, capture format, processing, lighting, and encoding.</p>

<h4>Can a 4K capture card stream in 4K?</h4>
<p>Only when the specific model supports 4K capture—not merely 4K passthrough—and the computer, software, encoder, platform, and internet connection also support the workflow.</p>

<h4>Can a capture card record any HDMI source?</h4>
<p>No. The source must use a supported format and must not be protected by HDCP. Some devices also output resolutions, frame rates, color formats, or encrypted content that a particular card cannot accept.</p>
