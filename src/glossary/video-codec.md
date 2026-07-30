---
layout: layouts/glossary.njk
title: "What Is a Video Codec? Formats Explained for Creators"
description: "Learn how video codecs encode and decode compressed footage, how codecs differ from containers, and what H.264, HEVC, VP9, AV1, and ProRes are used for."
permalink: /glossary/video-codec/
related_terms:
  - frame-rate-fps
  - aspect-ratio
  - dynamic-range
  - stream-bitrate
  - live-encoder
---

<h2>Video Codec</h2>
<p>A <strong>video codec</strong> is a method used to encode and decode digital video. Most codecs compress the enormous amount of data in uncompressed footage so it can be recorded, edited, stored, uploaded, streamed, and played on practical devices.</p>
<p>The word comes from <strong>coder-decoder</strong> or <strong>compressor-decompressor</strong>. An encoder turns source frames into a coded bitstream. A decoder reconstructs images from that bitstream for editing or playback.</p>
<p>Common video codecs include H.264/AVC, H.265/HEVC, VP9, AV1, Apple ProRes, Avid DNxHR, and various camera RAW formats.</p>
<h3>Codec vs. container vs. file extension</h3>
<p>These terms are related but not interchangeable.</p>
<table>
<thead>
<tr>
  <th>Term</th>
  <th>What it describes</th>
  <th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Codec</td>
  <td>How a video or audio track is encoded and decoded</td>
  <td>H.264, HEVC, VP9, AV1, ProRes, AAC, Opus</td>
</tr>
<tr>
  <td>Container</td>
  <td>Package that holds tracks and metadata</td>
  <td>MP4, MOV, MKV, WebM</td>
</tr>
<tr>
  <td>File extension</td>
  <td>Name suffix that often identifies the container</td>
  <td>.mp4, .mov, .mkv, .webm</td>
</tr>
<tr>
  <td>Format</td>
  <td>Broad term that may refer to codec, container, specification, or delivery system</td>
  <td>"MP4 format," "HDR format," "YouTube format"</td>
</tr>
</tbody>
</table>
<p>An <code>.mp4</code> file might contain H.264 video and AAC audio, but another MP4 can contain HEVC video. The extension alone does not reveal every encoding detail.</p>
<p>A container can also hold multiple audio tracks, captions, timecode, chapters, color metadata, thumbnails, and other information.</p>
<h3>Why video needs compression</h3>
<p>Uncompressed video produces extremely high data rates because every frame contains many pixels, channels, and brightness values. Resolution, <a href="/glossary/frame-rate-fps/">frame rate</a>, and bit depth multiply the amount of information.</p>
<p>Codecs reduce that data by exploiting patterns such as:</p>
<ul>
<li>Similar pixels within one frame.</li>
<li>Areas with little visible detail.</li>
<li>Similarities between consecutive frames.</li>
<li>Limits of human visual sensitivity.</li>
<li>Repeated colors and motion.</li>
<li>Information that can be represented more efficiently through mathematical transforms and prediction.</li>
</ul>
<p>The goal is to preserve acceptable visual quality while reducing storage and transmission needs.</p>
<h3>Lossy and lossless compression</h3>
<p><strong>Lossless compression</strong> reconstructs the encoded source exactly. It preserves all represented data but often produces larger files.</p>
<p><strong>Lossy compression</strong> discards or approximates selected information to achieve much smaller files. Most delivery video is lossy.</p>
<p>Lossy does not automatically mean bad. A well-encoded file can look visually indistinguishable from the source at normal viewing conditions. Problems appear when compression is too aggressive, repeated many times, or poorly matched to the footage.</p>
<p>Common lossy artifacts include:</p>
<ul>
<li>Blocking and smearing.</li>
<li>Banding in gradients.</li>
<li>Ringing around edges.</li>
<li>Loss of grain and texture.</li>
<li>Muddy motion.</li>
<li>Color breakup.</li>
<li>Flickering detail between frames.</li>
</ul>
<h3>Intraframe vs. interframe codecs</h3>
<table>
<thead>
<tr>
  <th>Compression type</th>
  <th>How it works</th>
  <th>Strength</th>
  <th>Limitation</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Intraframe</td>
  <td>Compresses each frame largely as an independent image</td>
  <td>Responsive editing and frame-accurate access</td>
  <td>Larger files at similar quality</td>
</tr>
<tr>
  <td>Interframe</td>
  <td>Stores some complete frames and predicts changes across nearby frames</td>
  <td>Efficient storage and delivery</td>
  <td>More decoding work and less responsive editing</td>
</tr>
</tbody>
</table>
<p>ProRes and DNxHR are commonly used as intraframe editing or intermediate codecs. H.264, HEVC, VP9, and AV1 commonly use interframe compression for recording or delivery, although their specifications can support varied structures.</p>
<p>An interframe sequence may include:</p>
<ul>
<li><strong>I-frames or keyframes:</strong> Independently decodable reference frames.</li>
<li><strong>P-frames:</strong> Predict from earlier frames.</li>
<li><strong>B-frames:</strong> Can use information from frames before and after.</li>
<li><strong>GOP:</strong> Group of pictures between keyframe structures.</li>
</ul>
<p>Longer prediction structures can improve efficiency but increase decoding complexity and make damaged or incomplete streams harder to recover.</p>
<h3>Common video codecs for creators</h3>
<table>
<thead>
<tr>
  <th>Codec</th>
  <th>Typical use</th>
  <th>Main advantage</th>
  <th>Main tradeoff</th>
</tr>
</thead>
<tbody>
<tr>
  <td>H.264 / AVC</td>
  <td>Cameras, uploads, streaming, social video</td>
  <td>Broad hardware and software compatibility</td>
  <td>Less efficient than newer codecs</td>
</tr>
<tr>
  <td>H.265 / HEVC</td>
  <td>4K, HDR, cameras, efficient delivery</td>
  <td>Better compression efficiency than H.264</td>
  <td>Licensing and device/software compatibility vary</td>
</tr>
<tr>
  <td>VP9</td>
  <td>Web video and platform delivery</td>
  <td>Efficient open web playback</td>
  <td>Slower encoding and less common camera capture</td>
</tr>
<tr>
  <td>AV1</td>
  <td>Modern web delivery and some recording/streaming</td>
  <td>High compression efficiency and royalty-free design</td>
  <td>Encoding and older-device support can be demanding</td>
</tr>
<tr>
  <td>ProRes</td>
  <td>Editing, acquisition, masters</td>
  <td>Smooth editing and strong quality</td>
  <td>Large files</td>
</tr>
<tr>
  <td>DNxHR / DNxHD</td>
  <td>Editing, interchange, masters</td>
  <td>Editing-focused performance and predictable variants</td>
  <td>Larger than delivery codecs</td>
</tr>
<tr>
  <td>Camera RAW</td>
  <td>High-end acquisition and grading</td>
  <td>Greater flexibility and sensor-level data</td>
  <td>Storage, processing, and workflow complexity</td>
</tr>
</tbody>
</table>
<p>No codec is best for every stage. A creator may record in one codec, create proxies in another, export a high-quality master, upload H.264, and have the platform deliver several viewer-facing codecs.</p>
<h3>H.264 / AVC</h3>
<p>H.264, also called AVC, remains widely used because it balances quality, file size, encoding speed, and compatibility.</p>
<p>YouTube's current general upload recommendation specifies:</p>
<ul>
<li>MP4 container.</li>
<li>H.264 video.</li>
<li>Progressive scan.</li>
<li>High Profile.</li>
<li>Variable bitrate.</li>
<li>4:2:0 chroma subsampling.</li>
<li>A closed GOP with the recommended structure listed in its Help documentation.</li>
</ul>
<p>H.264 is often a safe creator export when reliable playback and straightforward uploading matter more than maximum compression efficiency.</p>
<h3>H.265 / HEVC</h3>
<p>HEVC was designed to compress video more efficiently than H.264, especially at high resolutions. Cameras often use it for 4K, 10-bit, and HDR recording.</p>
<p>Advantages can include:</p>
<ul>
<li>Smaller files at comparable visual quality.</li>
<li>Strong efficiency for 4K and HDR.</li>
<li>Support for modern bit depths and color formats.</li>
</ul>
<p>Limitations can include:</p>
<ul>
<li>Heavier decoding and editing load.</li>
<li>Inconsistent support on older devices and software.</li>
<li>Licensing considerations.</li>
<li>Hardware acceleration that depends on the exact profile, level, and bit depth.</li>
</ul>
<p>A computer may play one HEVC file smoothly but struggle with another because "HEVC" covers multiple configurations.</p>
<h3>VP9</h3>
<p>VP9 is an open video codec developed for efficient web delivery and is widely associated with online video platforms. It supports high resolutions and HDR profiles.</p>
<p>Creators do not usually need to export VP9 for a routine SDR YouTube upload because YouTube accepts and re-encodes common high-quality sources. VP9 is more relevant when understanding web playback, platform processing, or specialized export workflows.</p>
<p>YouTube's upload page notes that a browser or device needs VP9 support to view new 4K uploads in 4K, but that does not mean the creator can guarantee a particular playback codec merely by changing the upload resolution.</p>
<h3>AV1</h3>
<p>AV1 is a modern royalty-free codec designed for efficient internet video. It can deliver strong quality at lower bitrates than older codecs in many situations.</p>
<p>Potential benefits include:</p>
<ul>
<li>Efficient web delivery.</li>
<li>Growing hardware decode and encode support.</li>
<li>Use in high-resolution and bandwidth-sensitive playback.</li>
<li>Support in YouTube's current live-ingest options for suitable SDR configurations.</li>
</ul>
<p>Potential limitations include:</p>
<ul>
<li>Slow software encoding at high-quality settings.</li>
<li>Uneven support on older hardware.</li>
<li>Editing applications that may depend on hardware decoding.</li>
<li>Different feature support for SDR, HDR, live ingest, and upload workflows.</li>
</ul>
<p>The newest codec is not automatically the best export choice if the creator's editor, client, device, or deadline cannot support it efficiently.</p>
<h3>ProRes and DNxHR</h3>
<p>ProRes and DNxHR are families of high-quality codecs designed for production and post-production. Their intraframe structure generally makes timeline seeking and editing easier than highly compressed long-GOP delivery codecs.</p>
<p>They are useful for:</p>
<ul>
<li>Camera acquisition.</li>
<li>Intermediate renders.</li>
<li>Visual-effects handoffs.</li>
<li>Color-grading masters.</li>
<li>Archival mezzanine files.</li>
<li>Cross-application interchange.</li>
</ul>
<p>Their files can be much larger than H.264, HEVC, VP9, or AV1. A large editing codec is not inherently higher resolution; it preserves data with less aggressive compression and a workflow-friendly structure.</p>
<h3>Codec profiles, levels, and settings</h3>
<p>A codec name alone is incomplete. Important configuration details include:</p>
<ul>
<li><strong>Profile:</strong> Set of coding features, bit depth, and color capabilities.</li>
<li><strong>Level:</strong> Limits such as resolution, bitrate, and decoding complexity.</li>
<li><strong>Bit depth:</strong> Commonly 8-bit, 10-bit, or higher.</li>
<li><strong>Chroma subsampling:</strong> Such as 4:2:0, 4:2:2, or 4:4:4.</li>
<li><strong>GOP and keyframe interval:</strong> Prediction structure across time.</li>
<li><strong>Entropy and reference settings:</strong> Compression tools and complexity.</li>
<li><strong>Hardware or software encoder:</strong> Implementation used to create the stream.</li>
</ul>
<p>A device might support H.264 8-bit 4:2:0 but not a less common H.264 10-bit or 4:2:2 profile. "The codec is supported" does not guarantee every variation is supported.</p>
<h3>Codec and bitrate work together</h3>
<p>A codec determines how the data is compressed; video bitrate describes how much data is allocated over time. A more efficient codec may reach a similar quality at a lower bitrate, but results vary by content, encoder, preset, and metric.</p>
<p>High motion, film grain, foliage, confetti, and detailed game footage are harder to compress than a static presenter against a clean background.</p>
<p>Bitrate should therefore be evaluated together with:</p>
<ul>
<li>Resolution.</li>
<li>Frame rate.</li>
<li>Source noise.</li>
<li>Codec and profile.</li>
<li>Encoding speed or preset.</li>
<li>Intended viewing conditions.</li>
</ul>
<h3>Editing performance and proxy media</h3>
<p>Highly compressed interframe footage can be difficult to edit even when the file is small. The computer must decode frame relationships to display an arbitrary timeline position.</p>
<p>Creators can improve editing by:</p>
<ul>
<li>Using hardware-accelerated decoding.</li>
<li>Recording in an editing-friendly codec when practical.</li>
<li>Transcoding to ProRes or DNxHR.</li>
<li>Creating lower-resolution proxy files.</li>
<li>Reducing intensive effects during the edit.</li>
<li>Keeping source and cache files on fast storage.</li>
</ul>
<p>Proxy files do not replace the originals. The editor uses lightweight copies for performance and reconnects to full-quality media for export.</p>
<h3>YouTube upload codec guidance</h3>
<p>For routine uploads, YouTube currently recommends H.264 video in an MP4 container. It also accepts many other formats and re-encodes uploaded material.</p>
<p>YouTube's HDR guidance lists tested containers including MOV/QuickTime, MP4, and MKV, and recommends codecs such as VP9 Profile 2, AV1, and HEVC/H.265 for suitable 10-bit HDR files. It also lists high-quality production codecs that can work at much larger bitrates.</p>
<p>The best upload file is not simply the smallest file that YouTube accepts. YouTube encourages high-quality source material because every upload is processed again.</p>
<h3>Upload codec vs. playback codec</h3>
<p>YouTube always re-encodes uploads to optimize playback. It creates versions for different resolutions, network conditions, device capabilities, and delivery systems.</p>
<p>Therefore:</p>
<ul>
<li>Uploading H.264 does not mean every viewer receives H.264.</li>
<li>Uploading AV1 does not force AV1 playback on unsupported devices.</li>
<li>Renaming a file extension does not change the codec.</li>
<li>Upscaling solely to chase a rumored codec is not a guaranteed platform rule.</li>
<li>Playback information shown in diagnostic tools describes that viewing session, not necessarily every rendition of the video.</li>
</ul>
<p>Creators should optimize the upload source rather than trying to control an undocumented allocation decision.</p>
<h3>Codec vs. container errors</h3>
<p>Common compatibility problems include:</p>
<ul>
<li>A supported MP4 container holding an unsupported codec profile.</li>
<li>A file extension that was renamed without re-encoding.</li>
<li>Missing audio because the audio codec is unsupported.</li>
<li>10-bit or 4:2:2 footage that lacks hardware decoding.</li>
<li>Variable-frame-rate recordings causing sync or editing issues.</li>
<li>Corrupt metadata or incomplete file writing.</li>
<li>An editing application supporting playback but not export for the same codec.</li>
</ul>
<p>A media-inspection tool can reveal the actual container, codec, profile, frame rate, color metadata, and bitrate.</p>
<h3>Choosing a codec</h3>
<p>Ask:</p>
<ol>
<li>Is the file for recording, editing, mastering, upload, livestreaming, or long-term storage?</li>
<li>Which devices and applications must decode it?</li>
<li>Is small file size or fast editing more important?</li>
<li>Does the system support hardware encoding and decoding for the exact profile?</li>
<li>Is HDR or 10-bit color required?</li>
<li>How much quality loss is acceptable?</li>
<li>Are licensing or client-delivery requirements involved?</li>
<li>What bitrate and processing time are practical?</li>
</ol>
<p>A common creator workflow is to record the highest practical quality, edit with originals or proxies, archive a strong master, and export a compatible delivery file for YouTube.</p>
<h3>Common video codec mistakes</h3>
<ul>
<li>Calling MP4 a codec rather than a container.</li>
<li>Assuming all <code>.mp4</code> files contain H.264.</li>
<li>Renaming <code>.mov</code> to <code>.mp4</code> and expecting a conversion.</li>
<li>Choosing the newest codec without checking decode support.</li>
<li>Editing highly compressed long-GOP footage on underpowered hardware without proxies.</li>
<li>Comparing file sizes without comparing codec, bitrate, resolution, or frame rate.</li>
<li>Assuming 10-bit support means every profile and chroma format will work.</li>
<li>Using a delivery codec as the only long-term master.</li>
<li>Re-encoding several times at low quality.</li>
<li>Believing an upload codec forces YouTube to use the same viewer-facing codec.</li>
<li>Confusing an audio codec with the video codec inside the same container.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>Is MP4 a video codec?</h4>
<p>No. MP4 is a container. It can hold video encoded with codecs such as H.264 or HEVC, plus audio and metadata.</p>
<h4>Which codec is best for YouTube uploads?</h4>
<p>YouTube's current general recommendation is H.264 video in an MP4 container. Other high-quality supported sources can also work, and YouTube re-encodes every upload.</p>
<h4>Is H.265 better than H.264?</h4>
<p>HEVC can provide better compression efficiency, especially for 4K and HDR, but it may be harder to edit and less compatible with older systems. H.264 remains a strong choice when broad support matters.</p>
<h4>Does YouTube use the codec I upload?</h4>
<p>The upload codec becomes the source for processing. YouTube then creates its own playback versions, so viewers may receive different codecs depending on the video, device, and playback conditions.</p>
