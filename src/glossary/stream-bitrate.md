---
layout: layouts/glossary.njk
title: "What Is YouTube Live Stream Bitrate? Complete Guide"
description: "Learn what stream bitrate means on YouTube Live, how it affects quality and stability, and how to choose the right setting for your resolution."
permalink: /glossary/stream-bitrate/
related_terms:
  - live-encoder
  - dropped-frames
  - live-control-room
  - stream-latency
  - ultra-low-latency
  - rtmp
---

<h2>Stream Bitrate</h2>
<p><strong>Stream bitrate</strong> is the amount of encoded video and audio data a live encoder sends to YouTube each second. It is usually measured in kilobits per second (Kbps) or megabits per second (Mbps).</p>
<p>A higher bitrate gives the encoder more data to describe each frame, which can preserve detail during motion. However, the bitrate must also fit the creator's upload connection, codec, resolution, frame rate, and hardware. A bitrate that is too aggressive can make a stream less reliable rather than more professional.</p>

<h3>How stream bitrate works</h3>
<p>A <a href="/glossary/live-encoder/">live encoder</a> compresses camera, screen, and audio sources into a stream that can be sent to YouTube. The bitrate controls roughly how much data that encoded feed uses over time.</p>
<p>For example, a video bitrate of 6 Mbps means the encoder is trying to send about six megabits of video data each second. Audio uses an additional, much smaller bitrate. Protocol overhead and normal bitrate variation can add more network demand.</p>
<p>YouTube receives this contribution feed and transcodes it into multiple playback versions. A viewer on a strong connection may receive a high-resolution version, while another viewer may receive a lower-resolution version. The creator's ingest bitrate is therefore not necessarily the bitrate every viewer receives.</p>

<h3>Stream bitrate versus related settings</h3>
<table>
<thead>
<tr>
  <th>Setting</th>
  <th>What it controls</th>
  <th>Why it matters</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Bitrate</td>
  <td>Data sent per second</td>
  <td>Influences detail, compression artifacts, and upload demand</td>
</tr>
<tr>
  <td>Resolution</td>
  <td>Number of pixels in each frame</td>
  <td>Higher resolutions normally need more bitrate</td>
</tr>
<tr>
  <td>Frame rate</td>
  <td>Frames sent per second</td>
  <td>60 fps usually needs more bitrate than 30 fps</td>
</tr>
<tr>
  <td>Codec</td>
  <td>How efficiently video is compressed</td>
  <td>AV1 and H.265 can preserve more quality at a given bitrate than H.264</td>
</tr>
<tr>
  <td>Upload speed</td>
  <td>Capacity of the internet connection</td>
  <td>Must reliably exceed the stream's actual data rate</td>
</tr>
</tbody>
</table>
<p>A speed test showing 20 Mbps upload does not mean a creator should automatically stream at 20 Mbps. Connections fluctuate, other devices use bandwidth, and the encoder needs room to deliver the feed without sustained congestion or <a href="/glossary/dropped-frames/">dropped frames</a>.</p>

<h3>YouTube's current recommended live bitrates</h3>
<p>YouTube bases its recommendations on the ingest codec, resolution, and frame rate. The following values reflect its current live encoder guidance:</p>
<table>
<thead>
<tr>
  <th>Resolution and frame rate</th>
  <th style="text-align:right">AV1 or H.265 range</th>
  <th style="text-align:right">H.264 recommendation</th>
</tr>
</thead>
<tbody>
<tr>
  <td>2160p at 60 fps</td>
  <td style="text-align:right">10–40 Mbps</td>
  <td style="text-align:right">35 Mbps</td>
</tr>
<tr>
  <td>2160p at 30 fps</td>
  <td style="text-align:right">8–35 Mbps</td>
  <td style="text-align:right">30 Mbps</td>
</tr>
<tr>
  <td>1440p at 60 fps</td>
  <td style="text-align:right">6–30 Mbps</td>
  <td style="text-align:right">24 Mbps</td>
</tr>
<tr>
  <td>1440p at 30 fps</td>
  <td style="text-align:right">5–25 Mbps</td>
  <td style="text-align:right">15 Mbps</td>
</tr>
<tr>
  <td>1080p at 60 fps</td>
  <td style="text-align:right">4–10 Mbps</td>
  <td style="text-align:right">12 Mbps</td>
</tr>
<tr>
  <td>1080p at 30 fps</td>
  <td style="text-align:right">3–8 Mbps</td>
  <td style="text-align:right">10 Mbps</td>
</tr>
<tr>
  <td>720p at 60 fps</td>
  <td style="text-align:right">3–8 Mbps</td>
  <td style="text-align:right">6 Mbps</td>
</tr>
<tr>
  <td>240p–720p at 30 fps</td>
  <td style="text-align:right">3–8 Mbps</td>
  <td style="text-align:right">4 Mbps</td>
</tr>
</tbody>
</table>
<p>These are platform recommendations, not guarantees that every connection or encoder can sustain the listed value. YouTube also updates its technical guidance, so creators should check the current encoder settings page before a major production.</p>

<h3>Video bitrate and audio bitrate</h3>
<p>Most streaming software lists video and audio bitrate separately.</p>
<ul>
<li><strong>Video bitrate</strong> carries the visual information and accounts for most of the upload demand.</li>
<li><strong>Audio bitrate</strong> carries the microphone, music, game audio, and other sound sources.</li>
</ul>
<p>YouTube currently recommends 128 Kbps for stereo audio and 384 Kbps for supported 5.1 surround sound. Setting a video bitrate to 6 Mbps and audio to 128 Kbps creates a feed slightly above 6 Mbps before protocol overhead and normal variation are considered.</p>

<h3>Why YouTube recommends CBR</h3>
<p>YouTube's current live encoder guidance recommends <strong>constant bitrate</strong>, commonly shown as CBR. CBR tells the encoder to target a relatively consistent data rate instead of allowing large long-term swings.</p>
<p>The encoded stream will not use the exact same number of bits for every frame. Complex motion still needs more data than a static image. The purpose of CBR is to keep the overall outgoing rate predictable enough for live delivery and platform ingestion.</p>

<h3>How to choose a stream bitrate</h3>
<ol>
<li>Choose the resolution and frame rate that the production actually needs.</li>
<li>Confirm which codec the encoder and YouTube ingest workflow support.</li>
<li>Start within YouTube's recommended range for that combination.</li>
<li>Leave meaningful upload headroom rather than using the connection's entire advertised capacity.</li>
<li>Test with the same movement, audio, overlays, and hardware planned for the real stream.</li>
<li>Watch stream health in <a href="/glossary/live-control-room/">Live Control Room</a> and the encoder during the test.</li>
<li>Lower the bitrate, frame rate, or resolution if the connection cannot sustain the feed reliably.</li>
</ol>
<p>Fast-moving games and sports expose compression artifacts more easily than a mostly static presentation. They may benefit from the upper part of a supported range, but only when the connection and encoder remain stable.</p>

<h3>What happens when bitrate is too high or too low?</h3>
<table>
<thead>
<tr>
  <th>Problem</th>
  <th>Common symptoms</th>
  <th>Likely response</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Bitrate is too high for the connection</td>
  <td>Network-dropped frames, unstable stream health, disconnects, delay growth</td>
  <td>Lower bitrate or improve the upload path</td>
</tr>
<tr>
  <td>Bitrate is too low for the video</td>
  <td>Blockiness, smearing, lost detail during motion</td>
  <td>Raise bitrate within YouTube's guidance or reduce resolution/frame rate</td>
</tr>
<tr>
  <td>Bitrate is high but encoder is overloaded</td>
  <td>Encoding lag, skipped frames, high CPU/GPU load</td>
  <td>Use a faster preset, hardware encoder, or lighter scene</td>
</tr>
<tr>
  <td>Bitrate fluctuates because the connection is unstable</td>
  <td>Intermittent warnings and viewer buffering</td>
  <td>Use wired networking, remove competing traffic, or reduce the target rate</td>
</tr>
</tbody>
</table>
<p>A high bitrate cannot repair a poor source image, bad lighting, an out-of-focus camera, or an overloaded encoder. It only gives the compression process more data to work with.</p>

<h3>Bitrate and stream latency</h3>
<p>Bitrate and <a href="/glossary/stream-latency/">stream latency</a> are separate settings, but they affect one another operationally. YouTube warns that network congestion can delay a stream even when the connection can sustain its average bitrate. Lower-latency modes also have less playback buffer available to hide short network problems.</p>
<p>For <a href="/glossary/ultra-low-latency/">ultra-low latency</a>, a stable bitrate is especially important because ingestion problems are more visible to viewers. Choosing a slightly lower, sustainable bitrate can produce a better experience than pushing for maximum image quality.</p>

<h3>Common stream bitrate mistakes</h3>
<ul>
<li>Copying another creator's bitrate without matching their resolution, codec, content, or connection.</li>
<li>Treating advertised upload speed as guaranteed usable capacity.</li>
<li>Raising bitrate to solve an encoder-performance problem.</li>
<li>Using a high resolution with too little bitrate for fast motion.</li>
<li>Changing settings immediately before a live event without a realistic test.</li>
<li>Assuming all viewers receive the same bitrate sent by the creator.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>What bitrate should I use for a 1080p YouTube live stream?</h4>
<p>YouTube's current H.264 guidance recommends 10 Mbps for 1080p30 and 12 Mbps for 1080p60. Its AV1/H.265 ranges are 3–8 Mbps for 1080p30 and 4–10 Mbps for 1080p60. The connection and encoder must be able to sustain the selected rate.</p>
<h4>Is a higher stream bitrate always better?</h4>
<p>No. More bitrate can reduce compression artifacts, but an unsustainable rate causes instability, dropped frames, or disconnects. It also cannot fix poor source quality or encoder overload.</p>
<h4>Is bitrate the same as upload speed?</h4>
<p>No. Bitrate is the rate the encoder sends. Upload speed is the connection's available capacity. The available upload speed should exceed the stream's combined video, audio, and overhead demand with room for normal fluctuations.</p>
<h4>Does YouTube change my stream bitrate for viewers?</h4>
<p>YouTube transcodes the incoming stream into multiple output formats. Viewers can therefore receive different resolutions and playback bitrates based on their device, selected quality, and connection.</p>
