---
layout: layouts/glossary.njk
title: "What Is Video Bitrate? YouTube Quality & Export Guide"
description: "Learn what video bitrate measures, how CBR and VBR affect quality and file size, and how to choose practical YouTube upload settings for each resolution."
permalink: /glossary/video-bitrate/
related_terms:
  - stream-bitrate
  - frame-rate-fps
  - aspect-ratio
  - dynamic-range
  - live-encoder
---

<h2>Video Bitrate</h2>
<p><strong>Video bitrate</strong> is the amount of encoded video data used over time. It is commonly measured in <strong>megabits per second</strong>, written as Mbps.</p>
<p>A video encoded at 10 Mbps uses an average of about 10 million bits of video data for each second of playback. Higher bitrate gives the encoder more data to describe detail and motion, but it also increases file size and bandwidth requirements.</p>
<p>Bitrate is only one part of video quality. The result also depends on the codec, resolution, frame rate, bit depth, color sampling, source footage, noise, motion complexity, and encoder quality.</p>
<h3>What bitrate measures</h3>
<p>Bitrate describes a rate of data, not a count of pixels and not a direct quality score.</p>
<p>Common units include:</p>
<ul>
<li><strong>bps:</strong> Bits per second.</li>
<li><strong>kbps or Kbps:</strong> Thousands of bits per second.</li>
<li><strong>Mbps:</strong> Millions of bits per second.</li>
<li><strong>Gbps:</strong> Billions of bits per second, more common for high-bandwidth production signals than compressed uploads.</li>
</ul>
<p>Video bitrate normally refers to the video track only. A file can also contain audio, captions, metadata, and container overhead, so its total bitrate may be slightly higher.</p>
<h3>Bitrate and approximate file size</h3>
<p>A simple estimate is:</p>
<p><strong>File size in megabytes ≈ bitrate in Mbps × duration in seconds ÷ 8</strong></p>
<p>This uses decimal megabytes and does not include audio or container overhead.</p>
<table>
<thead>
<tr>
  <th style="text-align:right">Video bitrate</th>
  <th style="text-align:right">1 minute</th>
  <th style="text-align:right">10 minutes</th>
  <th style="text-align:right">1 hour</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="text-align:right">5 Mbps</td>
  <td style="text-align:right">About 37.5 MB</td>
  <td style="text-align:right">About 375 MB</td>
  <td style="text-align:right">About 2.25 GB</td>
</tr>
<tr>
  <td style="text-align:right">10 Mbps</td>
  <td style="text-align:right">About 75 MB</td>
  <td style="text-align:right">About 750 MB</td>
  <td style="text-align:right">About 4.5 GB</td>
</tr>
<tr>
  <td style="text-align:right">20 Mbps</td>
  <td style="text-align:right">About 150 MB</td>
  <td style="text-align:right">About 1.5 GB</td>
  <td style="text-align:right">About 9 GB</td>
</tr>
<tr>
  <td style="text-align:right">50 Mbps</td>
  <td style="text-align:right">About 375 MB</td>
  <td style="text-align:right">About 3.75 GB</td>
  <td style="text-align:right">About 22.5 GB</td>
</tr>
<tr>
  <td style="text-align:right">100 Mbps</td>
  <td style="text-align:right">About 750 MB</td>
  <td style="text-align:right">About 7.5 GB</td>
  <td style="text-align:right">About 45 GB</td>
</tr>
</tbody>
</table>
<p>Actual files differ because variable bitrate changes over time and audio, metadata, and the container add data.</p>
<h3>Does higher bitrate always mean better quality?</h3>
<p>Higher bitrate can reduce compression damage when the codec and other settings remain the same, but it does not guarantee a better image.</p>
<p>A higher bitrate cannot restore:</p>
<ul>
<li>Detail that was never captured.</li>
<li>Missed focus.</li>
<li>Motion blur from the original <a href="/glossary/shutter-speed/">shutter speed</a>.</li>
<li>Clipped highlights or crushed shadows.</li>
<li>Heavy noise reduction or sharpening artifacts.</li>
<li>Color information removed earlier in the workflow.</li>
<li>Quality lost through repeated low-quality exports.</li>
</ul>
<p>At some point, increasing bitrate produces little visible improvement because the codec already has enough data for the content. The extra bits mainly increase storage, export time, upload time, and processing time.</p>
<h3>Why codec efficiency matters</h3>
<p>Two videos at the same bitrate can look different if they use different compression systems or encoder implementations. A more efficient codec may preserve similar visual quality with fewer bits, although it may require more processing power or have less editing and device compatibility.</p>
<p>Bitrate comparisons are most meaningful when the following are also similar:</p>
<ul>
<li>Codec and profile.</li>
<li>Resolution.</li>
<li>Frame rate.</li>
<li>Bit depth.</li>
<li>Chroma subsampling.</li>
<li>Keyframe structure.</li>
<li><a href="/glossary/encoding/">Encoding</a> preset and quality mode.</li>
<li>Source content.</li>
</ul>
<p>A 12 Mbps H.264 file and a 12 Mbps AV1 file are not equivalent simply because the number matches.</p>
<h3>Resolution and bitrate</h3>
<p>Higher resolution usually needs more data because each frame contains more pixels. A 4K frame has four times as many pixels as a 1920×1080 frame, although compression efficiency and image complexity mean it does not always require exactly four times the bitrate.</p>
<p>Insufficient bitrate at a high resolution can create a file that has more pixels but less clean detail than a well-encoded lower-resolution version.</p>
<p>Creators should match bitrate to the real resolution and <a href="/glossary/aspect-ratio/">aspect ratio</a> rather than upscaling only to display a larger number.</p>
<h3>Frame rate and bitrate</h3>
<p>Higher <a href="/glossary/frame-rate-fps/">frame rate</a> means the encoder must describe more frames each second. A 60 fps video often needs more bitrate than a 30 fps video at the same resolution and codec, especially when it contains fast movement.</p>
<p>YouTube's current upload guidance therefore provides separate recommendations for standard frame rates—24, 25, and 30 fps—and high frame rates—48, 50, and 60 fps.</p>
<h3>Content complexity</h3>
<p>Some images compress more easily than others.</p>
<p>Lower-demand content includes:</p>
<ul>
<li>A presenter against a clean, static background.</li>
<li>Slides with limited movement.</li>
<li>Large flat shapes.</li>
<li>Locked-off shots with low sensor noise.</li>
</ul>
<p>Higher-demand content includes:</p>
<ul>
<li>Grass, leaves, hair, glitter, smoke, water, or confetti.</li>
<li>Fast games or sports.</li>
<li>Handheld camera movement.</li>
<li>Film grain or high-<a href="/glossary/iso/">ISO</a> noise.</li>
<li>Rapid lighting changes.</li>
<li>Detailed screen captures with scrolling text.</li>
</ul>
<p>Noise and grain are difficult to predict and compress because they change across frames. A noisy image may require more bitrate than a clean image at the same resolution.</p>
<h3>Constant bitrate vs. variable bitrate</h3>
<table>
<thead>
<tr>
  <th>Mode</th>
  <th>How it allocates data</th>
  <th>Main advantage</th>
  <th>Main limitation</th>
</tr>
</thead>
<tbody>
<tr>
  <td>CBR</td>
  <td>Targets a relatively constant output rate</td>
  <td>Predictable bandwidth for live delivery</td>
  <td>Can waste bits on simple scenes or starve complex scenes</td>
</tr>
<tr>
  <td>VBR</td>
  <td>Uses more data for complex sections and less for simple sections</td>
  <td>Better file efficiency for uploads and stored video</td>
  <td>File size and peak rate are less predictable</td>
</tr>
<tr>
  <td>Average bitrate</td>
  <td>Varies while targeting a chosen average</td>
  <td>Balances quality and expected size</td>
  <td>May require analysis or multiple passes for accuracy</td>
</tr>
<tr>
  <td>Constant quality</td>
  <td>Targets a visual-quality level and lets bitrate vary</td>
  <td>Efficient archival or local export</td>
  <td>Final size can vary substantially</td>
</tr>
</tbody>
</table>
<p>For normal YouTube uploads, the official recommended H.264 settings specify <strong>variable bitrate</strong> and say that no bitrate limit is required, while providing reference bitrates. For <a href="/glossary/youtube-live/">YouTube Live</a> over <a href="/glossary/rtmp/">RTMP</a>/RTMPS, the current encoder guidance specifies CBR because real-time ingest has different bandwidth needs.</p>
<h3>One-pass vs. two-pass VBR</h3>
<p>A one-pass encoder makes decisions while moving through the video. It is faster and may be appropriate for quick exports.</p>
<p>A two-pass encoder first analyzes the full video and then allocates data during a second pass. It can be more accurate when the creator needs a target average bitrate or predictable file size, although modern constant-quality and hardware encoders may use different strategies.</p>
<p>Two-pass encoding does not automatically beat every one-pass export. Codec implementation, preset, hardware acceleration, and target constraints matter.</p>
<h3>YouTube recommended upload bitrates</h3>
<p>YouTube currently publishes the following reference ranges for <strong>SDR uploads</strong>:</p>
<table>
<thead>
<tr>
  <th>Resolution</th>
  <th style="text-align:right">24, 25, or 30 fps</th>
  <th style="text-align:right">48, 50, or 60 fps</th>
</tr>
</thead>
<tbody>
<tr>
  <td>720p</td>
  <td style="text-align:right">5 Mbps</td>
  <td style="text-align:right">7.5 Mbps</td>
</tr>
<tr>
  <td>1080p</td>
  <td style="text-align:right">8 Mbps</td>
  <td style="text-align:right">12 Mbps</td>
</tr>
<tr>
  <td>1440p</td>
  <td style="text-align:right">16 Mbps</td>
  <td style="text-align:right">24 Mbps</td>
</tr>
<tr>
  <td>2160p / 4K</td>
  <td style="text-align:right">35–45 Mbps</td>
  <td style="text-align:right">53–68 Mbps</td>
</tr>
<tr>
  <td>4320p / 8K</td>
  <td style="text-align:right">80–160 Mbps</td>
  <td style="text-align:right">120–240 Mbps</td>
</tr>
</tbody>
</table>
<p>YouTube gives higher recommendations for HDR. For example, its current table lists 10 Mbps for standard-frame-rate 1080p HDR and 15 Mbps for high-frame-rate 1080p HDR.</p>
<p>These values are <strong>recommendations</strong>, not hard upload caps. YouTube also advises uploading material close to the original high-quality source and always re-encodes uploaded videos for playback.</p>
<h3>Upload bitrate vs. YouTube playback bitrate</h3>
<p>The bitrate of a creator's exported file is not the bitrate every viewer receives.</p>
<p>The general workflow is:</p>
<ol>
<li>The creator encodes an upload file.</li>
<li>YouTube processes and re-encodes that file.</li>
<li>YouTube creates multiple playback versions for different resolutions, devices, codecs, and network conditions.</li>
<li>The player selects an appropriate version and can switch during playback.</li>
</ol>
<p>Uploading a clean, high-quality source gives the platform better material to encode. Uploading an extremely large file cannot force YouTube to deliver that same source bitrate to viewers.</p>
<h3>Upload bitrate vs. stream bitrate</h3>
<p><strong>Upload video bitrate</strong> describes a completed file sent to YouTube for processing. <a href="/glossary/stream-bitrate/">Stream bitrate</a> describes a real-time feed sent by a <a href="/glossary/live-encoder/">live encoder</a>.</p>
<table>
<thead>
<tr>
  <th>Consideration</th>
  <th>Uploaded video</th>
  <th>Live stream</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Encoding time</td>
  <td>Can use slower, quality-focused processing</td>
  <td>Must encode in real time</td>
</tr>
<tr>
  <td>Bitrate mode</td>
  <td>VBR is commonly recommended</td>
  <td>CBR is commonly required for RTMP ingest</td>
</tr>
<tr>
  <td>Network</td>
  <td>Affects upload duration</td>
  <td>Must sustain the bitrate continuously</td>
</tr>
<tr>
  <td>Recovery</td>
  <td>File can be re-exported and uploaded again</td>
  <td>Lost data can create live artifacts or <a href="/glossary/dropped-frames/">dropped frames</a></td>
</tr>
<tr>
  <td>Platform processing</td>
  <td>Happens after upload</td>
  <td>Happens while the stream is live</td>
</tr>
</tbody>
</table>
<p>A creator should not copy an upload bitrate table into live software without checking the platform's live-ingest guidance.</p>
<h3>Common low-bitrate artifacts</h3>
<p>When an encoder does not have enough data for the content, viewers may see:</p>
<ul>
<li>Blocky or smeared motion.</li>
<li>Loss of texture in hair, grass, water, or games.</li>
<li>Banding in gradients, skies, and shadows.</li>
<li>Mosquito noise around text or high-contrast edges.</li>
<li>Muddy dark areas.</li>
<li>Pulsing detail as <a href="/glossary/keyframes/">keyframes</a> and predictions change.</li>
<li>Color breakup or posterization.</li>
<li>Softness during camera movement.</li>
</ul>
<p>Some artifacts come from bit depth, color sampling, scaling, or source noise rather than bitrate alone. Increasing bitrate is one possible fix, not a diagnosis by itself.</p>
<h3>Bitrate and repeated exports</h3>
<p>Lossy compression removes or approximates information. Re-encoding an already compressed file can compound artifacts, especially when each generation uses a low bitrate.</p>
<p>A stronger workflow is:</p>
<ul>
<li>Keep the highest-quality original recordings.</li>
<li>Edit in a suitable project or intermediate format.</li>
<li>Avoid downloading a platform copy as the next editing master.</li>
<li>Export once from the best available <a href="/glossary/timeline/">timeline</a> or master.</li>
<li>Use a bitrate appropriate to the chosen codec and delivery target.</li>
</ul>
<p>A high-bitrate final export cannot fully reverse damage from an earlier low-bitrate recording or render.</p>
<h3>Choosing a practical export bitrate</h3>
<p>Consider:</p>
<ol>
<li><strong>Destination:</strong> YouTube upload, live ingest, archive, client delivery, or social platform.</li>
<li><strong>Resolution:</strong> Export the actual intended frame dimensions.</li>
<li><strong>Frame rate:</strong> Preserve the recorded rate unless a deliberate conversion is needed.</li>
<li><strong>Codec:</strong> Use a supported codec with appropriate efficiency and compatibility.</li>
<li><strong>Content:</strong> Add headroom for high motion, fine detail, noise, and grain.</li>
<li><strong>Color:</strong> HDR, 10-bit, or high-fidelity masters may need different guidance.</li>
<li><strong>Upload speed and storage:</strong> Avoid unnecessary size without starving the image.</li>
<li><strong>Processing:</strong> Test a representative segment instead of judging only a still frame.</li>
</ol>
<p>For a straightforward SDR YouTube upload using H.264, YouTube's current table is a useful starting point. A visually complex project may justify more data, while a quality-based encoder may not map neatly to one average target.</p>
<h3>Common video bitrate mistakes</h3>
<ul>
<li>Treating bitrate as the same thing as resolution.</li>
<li>Comparing bitrates without comparing codecs.</li>
<li>Using one universal setting for 720p, 1080p, and 4K.</li>
<li>Ignoring the extra demand of high frame rates.</li>
<li>Exporting noisy footage at a low bitrate and blaming only YouTube.</li>
<li>Assuming YouTube's recommended figures are strict maximums.</li>
<li>Uploading at the platform's playback bitrate rather than preserving source quality.</li>
<li>Using VBR upload advice for a CBR live stream.</li>
<li>Increasing bitrate after detail was already lost in recording.</li>
<li>Confusing megabits with megabytes; eight bits equal one byte.</li>
<li>Forgetting that audio and container overhead add to total file size.</li>
<li>Judging quality before YouTube finishes HD or 4K processing.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>What bitrate should I use for 1080p YouTube video?</h4>
<p>YouTube currently recommends 8 Mbps for SDR 1080p at 24, 25, or 30 fps and 12 Mbps at 48, 50, or 60 fps. These are reference recommendations, not strict limits, and codec and content complexity still matter.</p>
<h4>Is 20 Mbps good for 1080p?</h4>
<p>It can be more than sufficient for many H.264 1080p uploads, but the result depends on frame rate, motion, noise, encoder quality, and source footage. A larger number does not guarantee that an earlier quality problem is fixed.</p>
<h4>Does YouTube reduce video bitrate?</h4>
<p>YouTube always re-encodes uploads and creates its own playback versions. The viewer normally receives one of those processed streams rather than the creator's original export file.</p>
<h4>Is VBR or CBR better for YouTube?</h4>
<p>For normal uploads, YouTube's recommended H.264 settings specify variable bitrate. For RTMP/RTMPS live streams, its live encoder guidance specifies CBR. The correct mode depends on whether the video is a completed file or a real-time feed.</p>
