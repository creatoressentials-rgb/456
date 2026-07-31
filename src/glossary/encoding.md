---
layout: layouts/glossary.njk
title: "What Is Video Encoding? Codecs, Bitrate, and Export"
description: "Learn what video encoding is, how codecs compress raw frames and audio, and how bitrate, resolution, frame rate, containers, and YouTube exports interact."
permalink: /glossary/encoding/
related_terms:
  - video-codec
  - video-bitrate
  - video-resolution
  - frame-rate-fps
  - live-encoder
---

<h2>Encoding</h2>
<p><strong>Encoding</strong> is the process of converting video, audio, images, or other media into a coded digital stream using a codec. In creator workflows, encoding usually compresses edited frames and audio into a file or live stream that can be stored, uploaded, transmitted, decoded, and played on other devices.</p>
<p>When a creator clicks <strong>Export</strong>, <strong>Render</strong>, <strong>Record</strong>, or <strong>Start Streaming</strong>, an encoder may be turning uncompressed or decoded media into H.264, HEVC, AV1, VP9, ProRes, AAC, Opus, or another coded format.</p>
<p>Encoding is not one isolated quality setting. The result depends on the <a href="/glossary/video-codec/">video codec</a>, <a href="/glossary/video-bitrate/">video bitrate</a>, <a href="/glossary/video-resolution/">video resolution</a>, <a href="/glossary/frame-rate-fps/">frame rate</a>, bit depth, chroma subsampling, keyframe structure, encoder implementation, and source quality.</p>
<h3>How video encoding works</h3>
<p>Raw video contains enormous amounts of data. An encoder reduces that data by finding patterns within individual frames and across sequences of frames.</p>
<p>Common compression methods include:</p>
<ul>
<li><strong>Spatial compression:</strong> Removes repeated or less-visible information within one frame.</li>
<li><strong>Temporal compression:</strong> Stores changes between frames instead of describing every frame completely.</li>
<li><strong>Chroma subsampling:</strong> Records color information at a lower spatial resolution than brightness information.</li>
<li><strong>Quantization:</strong> Represents image information with fewer possible values, discarding precision in lossy encoding.</li>
<li><strong>Entropy coding:</strong> Stores repeated symbols and patterns more efficiently without additional visual loss.</li>
</ul>
<p>The decoder reverses the coded instructions well enough to reconstruct playable frames. With lossy codecs, the reconstruction is an approximation rather than a perfect copy of the original data.</p>
<h3>Encoding, codec, and container</h3>
<p>These terms are related but not interchangeable.</p>
<table>
<thead>
<tr>
  <th>Term</th>
  <th>Meaning</th>
  <th>Example</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Encoding</td>
  <td>The process of creating a coded stream</td>
  <td>Exporting a <a href="/glossary/timeline/">timeline</a> as H.264</td>
</tr>
<tr>
  <td>Encoder</td>
  <td>The software or hardware performing the process</td>
  <td>Premiere exporter, OBS encoder, camera chip, GPU encoder</td>
</tr>
<tr>
  <td>Codec</td>
  <td>The rules used to encode and decode media</td>
  <td>H.264, HEVC, AV1, VP9, ProRes</td>
</tr>
<tr>
  <td>Container</td>
  <td>The package holding video, audio, captions, and metadata</td>
  <td>MP4, MOV, MKV, WebM</td>
</tr>
<tr>
  <td>Decoding</td>
  <td>Turning the coded stream into playable frames or samples</td>
  <td>A browser playing an H.264 video</td>
</tr>
<tr>
  <td><a href="/glossary/transcoding/">Transcoding</a></td>
  <td>Decoding one encoded format and encoding it again</td>
  <td>YouTube creating multiple playback versions</td>
</tr>
</tbody>
</table>
<p>An MP4 file is not automatically H.264, although that pairing is common. The container and codec must be compatible with the software, device, and platform.</p>
<h3>Lossy vs. lossless encoding</h3>
<p><strong>Lossy encoding</strong> permanently discards information to achieve smaller files or lower transmission rates. H.264, HEVC, VP9, AV1, AAC, and Opus are commonly used in lossy delivery workflows.</p>
<p><strong>Lossless encoding</strong> preserves the decoded information exactly, but produces much larger files. Lossless and uncompressed formats are useful in specialized capture, archiving, graphics, and intermediate workflows.</p>
<p>Some production codecs are called visually lossless because their changes are difficult to see under intended use, even though they may not be mathematically lossless.</p>
<h3>Important encoding settings</h3>
<h4>Codec</h4>
<p>The codec controls the available compression tools, compatibility, quality efficiency, and hardware requirements. Newer codecs can often achieve similar visual quality at lower bitrate than older codecs, but they may encode more slowly or lack universal support.</p>
<h4>Bitrate</h4>
<p>Bitrate is the amount of encoded data used per second. At the same codec and settings, higher bitrate generally preserves more detail and produces larger files.</p>
<p>There is no universal perfect bitrate. Fast motion, noise, grain, particles, foliage, screen recordings, high frame rates, and high resolutions can need more data than simple static footage.</p>
<h4>Resolution and frame rate</h4>
<p>More pixels and more frames create more information to encode. A 4K60 export normally needs more bitrate and processing than 1080p30 to preserve similar quality per pixel and frame.</p>
<p>Creators should normally upload YouTube videos at the native intended frame rate rather than converting 24 fps to 30 fps or 30 fps to 60 fps without a specific reason.</p>
<h4>Rate-control mode</h4>
<ul>
<li><strong>CBR:</strong> Attempts to maintain a constant bitrate. It is commonly used for livestreaming because network capacity is limited in real time.</li>
<li><strong>VBR:</strong> Allocates more data to complex sections and less to simple sections. It is commonly used for uploaded video exports.</li>
<li><strong>Constant quality or quality-target modes:</strong> Adjust bitrate as needed to maintain a chosen quality target, subject to encoder limits.</li>
</ul>
<p>The labels and behavior differ among encoders. A "CBR" implementation may still fluctuate around a target, and a VBR maximum may be as important as its average.</p>
<h4><a href="/glossary/keyframes/">Keyframes</a> and GOP</h4>
<p>Interframe codecs periodically store complete or independently decodable frames, then store predicted frames between them. The structure is called a group of pictures, or GOP.</p>
<p>More frequent keyframes can improve seeking, editing, stream recovery, and platform compatibility, but they reduce compression efficiency. Livestream platforms often specify a keyframe interval.</p>
<h4>Bit depth and chroma subsampling</h4>
<p>Bit depth affects how many tonal values each channel can represent. Chroma subsampling reduces color resolution relative to brightness detail.</p>
<p>A 10-bit 4:2:2 production file can preserve more grading and keying flexibility than an 8-bit 4:2:0 delivery file, but YouTube upload recommendations, hardware support, and codec/container compatibility still matter.</p>
<h3>Software vs. hardware encoding</h3>
<table>
<thead>
<tr>
  <th>Method</th>
  <th>Main advantage</th>
  <th>Main tradeoff</th>
</tr>
</thead>
<tbody>
<tr>
  <td>CPU software encoding</td>
  <td>Can offer strong efficiency and detailed controls</td>
  <td>Often slower and uses substantial CPU resources</td>
</tr>
<tr>
  <td>GPU or integrated hardware encoding</td>
  <td>Fast, power-efficient, and useful for live work</td>
  <td>Quality and options vary by hardware generation and mode</td>
</tr>
<tr>
  <td>Dedicated appliance encoding</td>
  <td>Reliable for production and broadcast workflows</td>
  <td>Added equipment cost and complexity</td>
</tr>
<tr>
  <td>Camera internal encoding</td>
  <td>Convenient and immediate</td>
  <td>Limited codec, bitrate, heat, storage, or recording-time options</td>
</tr>
</tbody>
</table>
<p>Modern hardware encoders can produce excellent results. "Software" does not automatically mean better, and "hardware" does not automatically mean low quality. Compare the specific encoder generation, preset, bitrate, and workload.</p>
<h3>Encoding for YouTube uploads</h3>
<p>YouTube currently recommends MP4 with H.264 for ordinary upload compatibility, progressive scan, native frame rate, and variable bitrate guidance. These are recommended settings rather than the only formats YouTube can process.</p>
<p>YouTube <strong>re-encodes every upload</strong> into multiple playback versions for different resolutions, devices, codecs, and connection speeds. Creators do not upload the exact final stream most viewers receive.</p>
<p>For the best source:</p>
<ul>
<li>Export once from the highest-quality practical timeline or master.</li>
<li>Avoid repeated lossy exports and re-uploads.</li>
<li>Preserve the intended resolution and frame rate.</li>
<li>Use enough bitrate for the codec and content complexity.</li>
<li>Do not bake in black bars merely to force an <a href="/glossary/aspect-ratio/">aspect ratio</a>.</li>
<li>Allow time for higher-resolution processing after upload.</li>
</ul>
<p>Uploading an oversized bitrate cannot add detail that was lost earlier, but uploading a severely compressed file gives YouTube less information for its own transcodes.</p>
<h3>Encoding for livestreaming</h3>
<p>A <a href="/glossary/live-encoder/">live encoder</a> must encode in real time and send data through the available upload connection. It cannot spend minutes analyzing future frames the way a two-pass file export can.</p>
<p>Livestream encoding priorities include:</p>
<ul>
<li>Stable <a href="/glossary/stream-bitrate/">stream bitrate</a> below sustainable upload capacity.</li>
<li>Platform-compatible codec, resolution, and frame rate.</li>
<li>The required keyframe interval.</li>
<li>CBR or the rate-control method specified by the platform.</li>
<li>Low enough CPU or GPU load to prevent skipped or <a href="/glossary/dropped-frames/">dropped frames</a>.</li>
<li>A latency mode appropriate for interaction and quality.</li>
</ul>
<p>A <a href="/glossary/stream-key/">stream key</a> and <a href="/glossary/rtmp/">RTMP</a> or RTMPS connection identify and transport the stream; they are not the encoding method themselves.</p>
<h3>Re-encoding and generation loss</h3>
<p>Each lossy encoding pass can discard additional information. Downloading a compressed upload, editing it, exporting it again, and re-uploading it can increase blocking, banding, mosquito noise, ringing, and smeared detail.</p>
<p>Whenever possible, return to the original camera files or a high-quality intermediate master rather than using a previous delivery file as the new source.</p>
<h3>Common encoding mistakes</h3>
<ul>
<li>Calling MP4 a video codec.</li>
<li>Assuming bitrate alone determines quality.</li>
<li>Exporting a different frame rate without a deliberate conversion method.</li>
<li>Using a codec or profile unsupported by the destination device.</li>
<li>Selecting an extremely slow preset for a livestreaming computer that cannot maintain real time.</li>
<li>Re-encoding a lossy file multiple times.</li>
<li>Exporting HDR or wide-gamut media without correct color metadata and transforms.</li>
<li>Confusing upload encoding recommendations with live-ingest requirements.</li>
<li>Assuming a larger file always contains more real detail.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>Is encoding the same as exporting?</h4>
<p>Exporting is the broader action of creating a deliverable. Encoding is usually the media-compression step inside that export. An export can also copy streams, render effects, mix audio, and write metadata.</p>
<h4>Does YouTube encode uploaded videos again?</h4>
<p>Yes. YouTube transcodes uploads into multiple resolutions, bitrates, and codecs for adaptive playback on different devices and connections.</p>
<h4>Is H.264 an encoder?</h4>
<p>H.264 is a codec standard. Specific software and hardware implementations encode video according to that standard.</p>
<h4>Does higher bitrate always improve encoded quality?</h4>
<p>It usually helps until the source, codec, settings, or visible detail becomes the limiting factor. Beyond that point, bitrate may increase file size with little visible benefit.</p>
<h4>What is two-pass encoding?</h4>
<p>A two-pass encoder analyzes the video first and then allocates bits during a second pass. It can improve bitrate distribution for file exports, but it is not available for real-time livestreaming because future frames have not happened yet.</p>
