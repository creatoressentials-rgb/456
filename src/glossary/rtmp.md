---
layout: layouts/glossary.njk
title: "What Is RTMP in YouTube Live Streaming? [Explained]"
description: "Learn what RTMP does in YouTube live streaming, how an encoder uses a server URL and stream key, and why secure RTMPS is usually the better option."
permalink: /glossary/rtmp/
related_terms:
  - live-encoder
  - live-control-room
  - dropped-frames
  - low-latency
  - normal-latency
---

<h2>RTMP</h2>
<p><strong>RTMP</strong> stands for <strong>Real-Time Messaging Protocol</strong>. In a YouTube live-streaming workflow, it is commonly used to send encoded video, audio, and control data from a creator's encoder to YouTube's ingest server.</p>
<p>RTMP is part of the connection between the creator and YouTube. It should not be confused with the full delivery path YouTube uses to process the stream and play it for viewers on different devices.</p>

<h3>How RTMP works with YouTube Live</h3>
<ol>
<li>A camera, microphone, screen capture, or other source feeds a <a href="/glossary/live-encoder/">Live Encoder</a>.</li>
<li>The encoder compresses the production into a supported video and audio stream.</li>
<li>The creator enters YouTube's stream server URL and a stream key into the encoder.</li>
<li>The encoder sends the feed to YouTube through RTMP or a supported alternative.</li>
<li>YouTube processes and distributes the live stream to viewers.</li>
</ol>
<p>In many encoders, selecting a built-in YouTube service preset fills in the server details automatically. The creator may still need to connect the YouTube account or enter the stream key.</p>

<h3>RTMP server URL vs. stream key</h3>
<table>
<thead><tr><th>Item</th><th>Purpose</th><th>Security</th></tr></thead>
<tbody>
<tr><td>Server URL</td><td>Tells the encoder which YouTube ingest endpoint to contact</td><td>Usually not treated as the private credential</td></tr>
<tr><td>Stream key</td><td>Identifies and authorizes the creator's stream destination</td><td>Must be kept private and reset if exposed</td></tr>
</tbody>
</table>
<p>The encoder needs both pieces unless it connects directly through an authenticated YouTube integration.</p>

<h3>RTMP vs. RTMPS</h3>
<p><strong>RTMPS</strong> is secure RTMP. YouTube describes it as RTMP sent through a Transport Layer Security connection, which encrypts the live data between the encoder and YouTube's servers.</p>
<table>
<thead><tr><th>Protocol</th><th>Encrypted ingest</th><th>Current YouTube codec listing</th><th>Latency modes</th></tr></thead>
<tbody>
<tr><td>RTMP</td><td>No</td><td>H.264</td><td>Normal, Low, and Ultra-low</td></tr>
<tr><td>RTMPS</td><td>Yes</td><td>H.264</td><td>Normal, Low, and Ultra-low</td></tr>
</tbody>
</table>
<p>When an encoder supports YouTube RTMPS, the secure option is generally preferable because it protects the ingest connection from interception or tampering.</p>

<h3>RTMP vs. HLS and DASH ingest</h3>
<table>
<thead><tr><th>Protocol</th><th>Strength</th><th>Trade-off</th></tr></thead>
<tbody>
<tr><td>RTMP/RTMPS</td><td>Broad encoder support and compatibility with all three YouTube latency modes</td><td>Current YouTube comparison limits these ingest options to H.264</td></tr>
<tr><td>HLS</td><td>Encrypted ingest, HEVC support, HDR, and strong 4K suitability</td><td>Segment-based delivery generally creates more latency and does not support Ultra-low Latency</td></tr>
<tr><td>DASH</td><td>Encrypted ingest and VP9 support for high-resolution streaming</td><td>Generally higher latency and no Ultra-low Latency support</td></tr>
</tbody>
</table>
<p>The best protocol depends on the encoder, codec, resolution, latency needs, and production requirements.</p>

<h3>How to connect an encoder with RTMP</h3>
<ol>
<li>Open YouTube Studio and choose <strong>Create → Go live</strong>.</li>
<li>Create or select the event in <a href="/glossary/live-control-room/">Live Control Room</a>.</li>
<li>Copy the stream URL and stream key from Stream Settings.</li>
<li>Paste them into the server and stream-key fields in the encoder.</li>
<li>Configure the recommended resolution, frame rate, bitrate, keyframe interval, video codec, and audio settings.</li>
<li>Start the encoder and confirm that YouTube receives a healthy preview before going live.</li>
</ol>

<h3>How to use RTMPS on YouTube</h3>
<p>First check whether the encoder includes a YouTube RTMPS preset. If not, YouTube says creators can reveal the RTMPS URL by selecting the lock icon next to the Stream URL in Live Control Room, then copy the secure URL and stream key into the encoder.</p>
<p>If an RTMPS connection produces an SSL error, verify that both the protocol and server use <strong>rtmps</strong>. YouTube's troubleshooting guidance also identifies port 443 as an option when the encoder requires an explicit secure port.</p>

<h3>Common RTMP problems</h3>
<ul>
<li><strong>Invalid stream key:</strong> The key is mistyped, expired, reset, or connected to the wrong event.</li>
<li><strong>Cannot connect:</strong> The server URL, protocol, port, firewall, or network route is incorrect.</li>
<li><strong>Unstable stream:</strong> Upload capacity is insufficient or inconsistent, causing <a href="/glossary/dropped-frames/">Dropped Frames</a>.</li>
<li><strong>No preview:</strong> The encoder has not started, the event is using another key, or the feed does not match supported settings.</li>
<li><strong>Unexpected delay:</strong> The selected <a href="/glossary/low-latency/">Low Latency</a> or <a href="/glossary/normal-latency/">Normal Latency</a> mode, protocol, buffering, and viewer conditions affect end-to-end delay.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>What does RTMP mean on YouTube?</h4>
<p>It is a protocol an encoder can use to send a live feed to YouTube's ingest server.</p>
<h4>Should I use RTMP or RTMPS?</h4>
<p>Use RTMPS when the encoder supports it. It provides an encrypted connection while retaining the familiar RTMP workflow.</p>
<h4>Is my YouTube RTMP URL the same as my stream key?</h4>
<p>No. The URL identifies the ingest server. The stream key is the private credential that directs and authorizes the feed for the channel or event.</p>
<h4>Does YouTube only support RTMP?</h4>
<p>No. YouTube's current developer documentation lists RTMP, RTMPS, HLS, and DASH as supported ingest protocols for third-party clients.</p>
