---
layout: layouts/glossary.njk
title: "What Are Dropped Frames in Live Streaming? [Guide]"
description: "Learn what dropped frames mean in YouTube live streaming, how network loss differs from rendering or encoding lag, and how to troubleshoot it."
permalink: /glossary/dropped-frames/
related_terms:
  - live-encoder
  - live-control-room
  - concurrent-viewers
  - engaged-views
---

<h2>Dropped Frames</h2>
<p><strong>Dropped frames</strong> are video frames that a live-streaming encoder cannot successfully send to the platform's ingest server. In OBS Studio, the "Dropped Frames (Network)" counter usually indicates that the connection is unstable or cannot consistently support the selected <a href="/glossary/video-bitrate/">video bitrate</a>.</p>
<p>When enough frames are dropped, viewers may see stuttering, freezes, missing motion, quality changes, buffering, or a disconnected stream.</p>

<h3>What happens when a frame is dropped?</h3>
<p>A <a href="/glossary/live-encoder/">live encoder</a> captures, renders, compresses, and transmits a continuous sequence of video frames. If the connection cannot send data quickly enough, the encoder may discard some already encoded frames so it can continue trying to deliver the live feed without falling increasingly behind.</p>
<p>A small isolated network interruption may be difficult for viewers to notice. Sustained or rapidly increasing dropped-frame counts can make the stream visibly choppy or cause the encoder to disconnect from YouTube.</p>

<h3>Dropped frames vs. <a href="/glossary/rendering/">rendering</a> and <a href="/glossary/encoding/">encoding</a> lag</h3>
<p>"Dropped frames" is often used loosely, but OBS separates three different kinds of frame loss:</p>
<table>
<thead><tr><th>OBS diagnostic</th><th>Typical cause</th><th>What failed</th></tr></thead>
<tbody>
<tr><td>Dropped frames (network)</td><td>Unstable connection, insufficient sustained upload capacity, routing, firewall, or ingest-server path issues</td><td>Encoded frames could not be transmitted reliably</td></tr>
<tr><td>Frames missed due to rendering lag</td><td>GPU overload or scene-compositing bottleneck</td><td>The frame was not rendered on time</td></tr>
<tr><td>Skipped frames due to encoding lag</td><td>CPU or hardware-encoder overload</td><td>The rendered frame was not encoded on time</td></tr>
</tbody>
</table>
<p>The distinction matters because the fixes are different. Lowering bitrate may help network-dropped frames, but it will not necessarily fix a GPU that cannot render a complex scene. Simplifying scenes may fix rendering lag without improving an unstable internet route.</p>

<h3>Are dropped frames a YouTube Analytics metric?</h3>
<p>No. Dropped frames are primarily an encoder or broadcast-health diagnostic, not a standard audience metric like <a href="/glossary/concurrent-viewers/">Concurrent Viewers</a> or watch time.</p>
<p>In <a href="/glossary/live-control-room/">Live Control Room</a>, YouTube monitors the feed it receives and displays stream-health warnings. Those warnings can identify problems such as unsupported codecs, incorrect bitrate, mismatched resolution, excessive <a href="/glossary/frame-rate-fps/">frame rate</a>, or improper keyframe frequency. The encoder may separately show its own dropped-frame counter.</p>

<h3>Common causes of network-dropped frames</h3>
<ul>
<li>A bitrate that is too high for the connection's stable upload capacity.</li>
<li>Wi-Fi interference, weak signal, or congestion.</li>
<li>Other devices, cloud backups, uploads, or applications consuming upstream bandwidth.</li>
<li>Packet loss, high jitter, or short connection stalls even when a speed test looks fast.</li>
<li>A router, modem, network adapter, cable, firewall, VPN, or security tool disrupting the connection.</li>
<li>An unstable route between the creator's network and YouTube's ingest infrastructure.</li>
<li>Sending primary, backup, or simultaneous streams without enough combined upload headroom.</li>
</ul>

<h3>Why a fast speed test does not rule out dropped frames</h3>
<p>A speed test usually measures short-term throughput to a nearby test server. Live streaming requires a stable, continuous connection to a specific ingest server. A connection can report high upload speed while still experiencing packet loss, jitter, route instability, or brief stalls that force the encoder to drop frames.</p>
<p>Use the stable upload result—not the best momentary result—when selecting bitrate. Leave room for normal network variation and any other upload activity.</p>

<h3>How to troubleshoot dropped frames</h3>
<ol>
<li><strong>Confirm the diagnostic.</strong> Check whether OBS reports network-dropped frames, rendering lag, or encoding lag. Do not assume every stutter is a network problem.</li>
<li><strong>Check YouTube stream health.</strong> Review warnings in Live Control Room and correct any bitrate, codec, resolution, frame-rate, or keyframe errors.</li>
<li><strong>Lower the video bitrate.</strong> Choose a bitrate the connection can sustain continuously, not just during a brief speed test.</li>
<li><strong>Use wired Ethernet.</strong> A direct wired connection is generally more stable than Wi-Fi for an important broadcast.</li>
<li><strong>Pause competing uploads.</strong> Stop cloud syncing, file uploads, backups, game downloads, and other upstream-heavy activity.</li>
<li><strong>Restart and inspect network equipment.</strong> Check the modem, router, Ethernet cable, adapter drivers, and firewall settings.</li>
<li><strong>Run a realistic private test.</strong> Include the same cameras, movement, overlays, audio, resolution, and duration planned for the real event.</li>
<li><strong>Contact the ISP when loss persists.</strong> Provide timestamps, logs, and evidence of packet loss or connection stalls rather than only a speed-test result.</li>
</ol>

<h3>When to lower resolution or frame rate</h3>
<p>Lowering resolution or frame rate reduces the bitrate and processing power normally required for a stable stream. A reliable 720p stream is better than an unstable 1080p or 4K stream.</p>
<p>If the issue is network-dropped frames, reduce bitrate first and select a matching resolution. If the issue is rendering or encoding lag, reducing resolution from 1080p to 720p or frame rate from 60 fps to 30 fps can also reduce the computer's workload.</p>

<h3>YouTube encoder settings that affect stream stability</h3>
<p>YouTube's current live-encoder guidance includes:</p>
<ul>
<li>Choose resolution, frame rate, and bitrate that the connection can reliably support.</li>
<li>Use a supported <a href="/glossary/video-codec/">video codec</a> such as H.264, H.265, or AV1 where applicable.</li>
<li>Use constant bitrate encoding.</li>
<li>Send <a href="/glossary/keyframes/">keyframes</a> every two seconds and do not exceed four seconds.</li>
<li>Test audio and movement before the event.</li>
<li>Monitor stream-health messages during the broadcast.</li>
</ul>
<p>The exact bitrate depends on resolution, frame rate, and codec. Copying another creator's bitrate without accounting for your own connection and production settings can create instability.</p>

<h3>Dropped frames vs. buffering and latency</h3>
<table>
<thead><tr><th>Problem</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Dropped frames</td><td>The encoder could not send some video frames successfully</td></tr>
<tr><td>Buffering</td><td>The viewer's player temporarily lacks enough data to continue smooth playback</td></tr>
<tr><td>Latency</td><td>The time delay between capture and viewer playback</td></tr>
</tbody>
</table>
<p>These problems can influence each other but are not identical. A stream can have high latency without dropping frames, or viewers on weak connections can buffer even when the creator's encoder reports zero dropped frames.</p>

<h3>What is an acceptable dropped-frame percentage?</h3>
<p>The practical target is <strong>zero network-dropped frames</strong>. An occasional tiny spike may not create a visible problem, but a percentage that continues climbing indicates that the stream is not being delivered reliably.</p>
<p>There is no single YouTube rule stating that a specific nonzero percentage is universally acceptable. Judge severity by whether loss is sustained, whether the count is increasing, and whether viewers or stream-health warnings show degraded playback.</p>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>Are dropped frames always caused by slow internet?</h4>
<p>They usually indicate a network-delivery problem in OBS, but the issue may be stability, packet loss, routing, Wi-Fi, hardware, or firewall behavior rather than simply a low advertised upload speed.</p>
<h4>Is encoding overload the same as dropped frames?</h4>
<p>No. OBS reports skipped frames due to encoding lag separately. Encoding overload means the encoder cannot compress frames on time; network-dropped frames means encoded frames cannot be transmitted reliably.</p>
<h4>Can viewers buffer when OBS shows zero dropped frames?</h4>
<p>Yes. Viewer buffering can be caused by the viewer's device, connection, playback quality, or delivery conditions even when the creator's outgoing feed is stable.</p>
<h4>Should I lower bitrate or resolution first?</h4>
<p>For network-dropped frames, lowering bitrate is the most direct first step. Keep the bitrate appropriate for the selected resolution; if needed, lower resolution or frame rate as well.</p>
