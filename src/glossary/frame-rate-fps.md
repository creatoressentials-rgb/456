---
layout: layouts/glossary.njk
title: "What Is Frame Rate (FPS)? Video Settings Explained"
description: "Learn what frame rate and FPS mean, how 24, 30, 60, and 120 fps affect motion, and how video creators should choose recording and playback rates."
permalink: /glossary/frame-rate-fps/
related_terms:
  - aperture
  - aspect-ratio
  - dropped-frames
  - exposure-triangle
  - iso
  - dynamic-range
---

<h2>Frame Rate (FPS)</h2>
<p><strong>Frame rate</strong> is the number of individual images, called frames, that a camera captures or a video displays each second. It is measured in <strong>frames per second</strong>, abbreviated <strong>fps</strong>.</p>
<p>A video recorded at 30 fps contains approximately 30 distinct frames for every second of real time. A 60 fps recording captures twice as many temporal samples, which can make fast movement look smoother and provide more frames for slow motion.</p>
<p>Frame rate affects motion, shutter choices, light requirements, file size, editing, and the visual feel of a video. It is not simply a quality setting where the highest number is always best.</p>
<h3>Common video frame rates</h3>
<table>
<thead>
<tr>
  <th style="text-align:right">Frame rate</th>
  <th>Common use</th>
  <th>Typical motion character</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="text-align:right">23.976 or 24 fps</td>
  <td>Film-style narrative, interviews, cinematic online video</td>
  <td>Familiar cinematic cadence with more visible motion judder</td>
</tr>
<tr>
  <td style="text-align:right">25 fps</td>
  <td>Video in 50 Hz regions and PAL-derived workflows</td>
  <td>Similar feel to 24 fps with regional compatibility</td>
</tr>
<tr>
  <td style="text-align:right">29.97 or 30 fps</td>
  <td>YouTube, television-derived workflows, tutorials, general online video</td>
  <td>Slightly smoother and more immediate than 24 fps</td>
</tr>
<tr>
  <td style="text-align:right">50 fps</td>
  <td>Sports, live production, or slow motion in 25 fps projects</td>
  <td>Smooth motion and clean half-speed conversion to 25 fps</td>
</tr>
<tr>
  <td style="text-align:right">59.94 or 60 fps</td>
  <td>Gaming, sports, action, live video, and slow motion</td>
  <td>Smooth, detailed motion with greater light and data demands</td>
</tr>
<tr>
  <td style="text-align:right">100, 120 fps, or higher</td>
  <td>Dedicated slow motion and high-speed action</td>
  <td>Designed mainly for slowed playback rather than normal delivery</td>
</tr>
</tbody>
</table>
<p>There is no universal best frame rate for YouTube. The right choice depends on the content, desired motion, recording conditions, and final delivery.</p>
<h3>Capture frame rate versus playback frame rate</h3>
<p>The term frame rate can describe more than one stage.</p>
<ul>
<li><strong>Capture frame rate</strong> is how many frames the camera records per second of real time.</li>
<li><strong>Timeline or project frame rate</strong> is the rate used by the editing sequence.</li>
<li><strong>Playback frame rate</strong> is how many frames are presented per second in the final file.</li>
<li><strong>Display refresh rate</strong> is how often a screen can update each second and is measured in hertz.</li>
</ul>
<p>A creator can record and deliver at the same rate, such as 30 fps captured and 30 fps played. The motion occurs in real time.</p>
<p>A creator can also record at 60 fps and conform the footage to a 30 fps timeline. Each recorded second becomes two seconds of playback, producing smooth half-speed slow motion because all 60 captured frames are retained and displayed at 30 per second.</p>
<h3>Does 60 fps automatically create slow motion?</h3>
<p>No. Footage captured at 60 fps and played at 60 fps shows real-time motion. It may look smoother, but it is not slower.</p>
<p>Slow motion occurs when the capture rate is higher than the playback rate or when software changes the clip speed and has enough frames to distribute across the longer duration.</p>
<table>
<thead>
<tr>
  <th style="text-align:right">Capture</th>
  <th style="text-align:right">Playback</th>
  <th>Result</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="text-align:right">30 fps</td>
  <td style="text-align:right">30 fps</td>
  <td>Real time</td>
</tr>
<tr>
  <td style="text-align:right">60 fps</td>
  <td style="text-align:right">60 fps</td>
  <td>Real time with smoother temporal detail</td>
</tr>
<tr>
  <td style="text-align:right">60 fps</td>
  <td style="text-align:right">30 fps</td>
  <td>50% speed, or two-times slow motion</td>
</tr>
<tr>
  <td style="text-align:right">120 fps</td>
  <td style="text-align:right">30 fps</td>
  <td>25% speed, or four-times slow motion</td>
</tr>
<tr>
  <td style="text-align:right">24 fps</td>
  <td style="text-align:right">30 fps</td>
  <td>Requires cadence conversion, frame duplication, blending, or interpolation</td>
</tr>
</tbody>
</table>
<p>Some cameras have an S&amp;Q or high-frame-rate mode that records at one rate and creates a file already tagged for slower playback. Other cameras record normal 60 or 120 fps files that the editor must interpret.</p>
<h3>Frame rate versus shutter speed</h3>
<p>Frame rate determines how often the camera starts a new frame. Shutter speed determines how long each frame gathers light.</p>
<p>At 30 fps, each frame has no more than about 1/30 second available. A shutter speed of 1/60 exposes for roughly half that interval. A shutter speed of 1/500 exposes each frame for a much shorter period and creates crisper, more staccato motion.</p>
<p>A common starting guideline is a shutter speed near twice the frame rate:</p>
<ul>
<li>24 fps: 1/48 or 1/50</li>
<li>25 fps: 1/50</li>
<li>30 fps: 1/60</li>
<li>50 fps: 1/100</li>
<li>60 fps: 1/120 or 1/125</li>
<li>120 fps: 1/240 or 1/250</li>
</ul>
<p>This approximates a 180-degree shutter angle and often produces natural-looking motion blur. It is not mandatory. Action footage may use a faster shutter for sharper frames, while creative sequences may use more blur.</p>
<p>Higher frame rates usually require more light because each frame has less time available for exposure when a similar shutter angle is maintained. Creators may need a wider <a href="/glossary/aperture/">aperture</a>, higher <a href="/glossary/iso/">ISO</a>, or stronger lighting.</p>
<h3>Frame rate versus refresh rate</h3>
<p>Frame rate belongs to the video signal. Refresh rate belongs to the display.</p>
<p>A 60 Hz screen can refresh up to 60 times per second, but it may show a 24 fps video by repeating frames in a cadence. A 120 Hz display can repeat 24 fps frames evenly five times each. Playback quality also depends on the device, browser, app, selected resolution, and platform encoding.</p>
<p>A high-refresh-rate screen does not turn a 24 fps upload into true 120 fps capture. Motion-interpolation features may synthesize additional frames, but those frames were not recorded by the creator.</p>
<h3>24 fps versus 30 fps versus 60 fps</h3>
<h4>24 fps</h4>
<p>Twenty-four fps is associated with cinema and scripted storytelling. It uses less data and can work well for interviews, essays, and deliberate camera movement. Fast pans may show judder, especially on bright, sharp displays.</p>
<h4>30 fps</h4>
<p>Thirty fps is common for online tutorials, talking heads, events, and general video. It provides a little more motion sampling than 24 fps and often matches screen recordings or camera defaults.</p>
<h4>60 fps</h4>
<p>Sixty fps suits sports, gaming, action, demonstrations, and footage intended for half-speed slow motion. It requires more frames to encode and usually more light to maintain natural shutter behavior. Some viewers describe its real-time appearance as more immediate or less cinematic.</p>
<p>The choice is aesthetic and practical, not a hierarchy of professional versus amateur.</p>
<h3>Fractional frame rates: 23.976, 29.97, and 59.94</h3>
<p>Video menus and editing software may display both rounded and exact rates. The labels 24, 30, and 60 sometimes refer to true integer rates, but they often refer to broadcast-derived fractional rates:</p>
<ul>
<li>23.976 fps</li>
<li>29.97 fps</li>
<li>59.94 fps</li>
</ul>
<p>The difference is small but important for long recordings, synchronized audio, multicamera editing, live production, and delivery specifications. Creators should match exact rates across cameras and timelines rather than assuming 24 and 23.976 are identical.</p>
<h3>YouTube frame-rate guidance</h3>
<p>YouTube recommends uploading a video at the same frame rate at which it was recorded. Re-encoding a 30 fps recording as 60 fps does not create new motion detail. It usually duplicates or synthesizes frames and increases processing without improving the original capture.</p>
<p>YouTube supports common frame rates, including 24, 25, 30, 48, 50, and 60 fps. High-frame-rate playback may depend on the selected resolution and the viewer's device.</p>
<p>Creators should export a constant frame rate when possible, especially for long-form edited content. Phones and screen-recording software sometimes create variable-frame-rate files, which can cause audio drift or inconsistent editing behavior in certain applications.</p>
<h3>Choosing a frame rate for creator content</h3>
<table>
<thead>
<tr>
  <th>Content type</th>
  <th style="text-align:right">Practical starting point</th>
  <th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Talking head or video essay</td>
  <td style="text-align:right">24 or 30 fps</td>
  <td>Efficient and visually familiar</td>
</tr>
<tr>
  <td>Tutorial with hands or tools</td>
  <td style="text-align:right">30 or 60 fps</td>
  <td>More motion clarity can help demonstrations</td>
</tr>
<tr>
  <td>Gameplay capture</td>
  <td style="text-align:right">60 fps when the system can sustain it</td>
  <td>Matches fast on-screen motion</td>
</tr>
<tr>
  <td>Sports or dance</td>
  <td style="text-align:right">60 fps</td>
  <td>Smoother motion and slow-motion flexibility</td>
</tr>
<tr>
  <td>Cinematic B-roll</td>
  <td style="text-align:right">24 fps delivery; 60 or 120 fps for selected slow-motion shots</td>
  <td>Keeps a consistent final cadence while allowing creative speed changes</td>
</tr>
<tr>
  <td>Screen recording</td>
  <td style="text-align:right">30 fps for mostly static content; 60 fps for fast cursor or animation</td>
  <td>Balances clarity and file size</td>
</tr>
<tr>
  <td>Live streaming</td>
  <td style="text-align:right">Match the encoder, camera, bandwidth, and platform configuration</td>
  <td>Stability matters more than choosing the highest rate</td>
</tr>
</tbody>
</table>
<p>A channel can use different capture rates for different shots, but the editor should decide on a consistent timeline and convert footage intentionally.</p>
<h3>Mixing frame rates in one project</h3>
<p>Mixed-frame-rate footage is common. A creator might use 24 fps for the main camera, 60 fps for B-roll, and a phone clip recorded at 30 fps.</p>
<p>The editing software must fit those clips into one timeline. Depending on the combination, it may:</p>
<ul>
<li>Drop frames.</li>
<li>Repeat frames.</li>
<li>Blend adjacent frames.</li>
<li>Generate interpolated frames.</li>
<li>Change playback speed through conforming.</li>
</ul>
<p>The cleanest slow motion comes from rates that divide evenly into the delivery rate, such as 60 to 30 or 120 to 30. Converting 30 fps real-time footage into a 24 fps timeline may show periodic cadence changes unless handled carefully.</p>
<h3>Common frame-rate mistakes</h3>
<ul>
<li>Assuming more fps always means better image quality.</li>
<li>Recording 60 fps in low light without accounting for the faster shutter and added light demand.</li>
<li>Exporting 30 fps footage at 60 fps and expecting smoother true motion.</li>
<li>Confusing fps with bitrate, resolution, shutter speed, or monitor refresh rate.</li>
<li>Mixing 23.976 and true 24 fps during long multicamera recordings.</li>
<li>Slowing 24 or 30 fps footage heavily and expecting clean motion without interpolation artifacts.</li>
<li>Shooting every clip at 120 fps and losing audio, autofocus features, resolution, or image quality because of camera-mode limitations.</li>
<li>Changing the timeline rate after editing has begun without understanding the consequences.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>Is 30 fps or 60 fps better for YouTube?</h4>
<p>Neither is universally better. Thirty fps is efficient and works well for most talking-head and tutorial content. Sixty fps is useful for action, gaming, sports, or slow-motion flexibility but requires more light, processing, and data.</p>
<h4>Should I upload at the same frame rate I recorded?</h4>
<p>Yes in most cases. YouTube recommends preserving the native recording rate. Changing the export number cannot create authentic frames that the camera did not capture.</p>
<h4>Why does 24 fps sometimes look choppy?</h4>
<p>Twenty-four fps samples motion less frequently than 30 or 60 fps. Fast pans, short shutter speeds, sharp backgrounds, or large bright displays can make the gaps between frames more visible. Slower camera movement and appropriate motion blur help.</p>
<h4>Is FPS the same as refresh rate?</h4>
<p>No. FPS describes frames in the video or generated by a system. Refresh rate describes how often a display updates. The two interact during playback but are not interchangeable.</p>
