---
layout: layouts/glossary.njk
title: "What Is Color Grading? Video Looks and Mood Explained"
description: "Learn what color grading is, how creators build a consistent visual style and mood, and how grading differs from correction, LUTs, and color management."
permalink: /glossary/color-grading/
related_terms:
  - color-correction
  - white-balance
  - dynamic-range
  - video-codec
  - video-bitrate
---

<h2>Color Grading</h2>
<p><strong>Color grading</strong> is the creative process of shaping a video's color, contrast, brightness relationships, and tonal texture to create a deliberate visual style. A grade can make a scene feel warm, cold, nostalgic, tense, clean, muted, vibrant, soft, harsh, natural, or surreal.</p>
<p>Grading supports storytelling and brand identity. It usually follows <a href="/glossary/color-correction/">color correction</a>, which fixes technical inconsistencies such as exposure, <a href="/glossary/white-balance/">white balance</a>, and mismatched cameras.</p>
<p>The goal is not always to make footage look "cinematic." It is to make the appearance intentional and consistent with the subject, audience, platform, and emotional purpose of the video.</p>
<h3>What color grading changes</h3>
<p>A grade may adjust:</p>
<ul>
<li>Overall contrast and tonal curve.</li>
<li>Shadow, midtone, and highlight color balance.</li>
<li>Hue, saturation, and luminance of selected colors.</li>
<li>Skin, product, sky, foliage, wardrobe, or background colors.</li>
<li>Highlight roll-off and shadow softness.</li>
<li>Local contrast, texture, glow, grain, halation, and vignette.</li>
<li>The relationship between the subject and environment.</li>
<li>Consistency across a series, campaign, channel, or brand.</li>
</ul>
<p>The same control can serve correction or grading. Lowering saturation may fix an oversaturated camera profile, or it may create a deliberate subdued documentary look.</p>
<h3>Color grading vs. color correction</h3>
<table>
<thead>
<tr>
  <th>Color correction</th>
  <th>Color grading</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Makes footage technically balanced and consistent</td>
  <td>Creates an intentional style or emotional response</td>
</tr>
<tr>
  <td>Fixes exposure, white balance, and shot mismatch</td>
  <td>Shapes palette, contrast, texture, and mood</td>
</tr>
<tr>
  <td>Establishes a dependable starting point</td>
  <td>Develops the final visual identity</td>
</tr>
<tr>
  <td>Often evaluated against neutral or known references</td>
  <td>Evaluated against creative intent</td>
</tr>
<tr>
  <td>Usually completed first</td>
  <td>Usually built on top of correction</td>
</tr>
</tbody>
</table>
<p>Professional workflows may overlap the stages, but separating the goals prevents creators from hiding technical problems underneath a dramatic preset.</p>
<h3>A practical color-grading workflow</h3>
<h4>1. Decide the delivery target</h4>
<p>Before grading, confirm whether the project will be delivered as standard <a href="/glossary/dynamic-range/">dynamic range</a>, HDR, or another managed format. The <a href="/glossary/timeline/">timeline</a>, monitoring, and output transform must agree with that decision.</p>
<p>Most ordinary YouTube creator workflows still target Rec.709 SDR, while HDR projects require compatible recording, monitoring, metadata, codec, and export settings.</p>
<h4>2. Normalize and match the footage</h4>
<p>Confirm that Log, RAW, HDR, and standard clips are interpreted correctly. Correct major exposure and white-balance errors, then match cameras and shots.</p>
<p>A creative look behaves more consistently when the underlying clips have similar starting points.</p>
<h4>3. Establish the contrast structure</h4>
<p>Set black depth, highlight brightness, midtone placement, and curve shape. Contrast strongly affects perceived saturation and mood, so it is usually better to establish the tonal foundation before making extreme color moves.</p>
<p>A high-contrast grade can feel dramatic or energetic. A lower-contrast grade can feel soft, hazy, gentle, or vintage. Neither is automatically more professional.</p>
<h4>4. Build the palette</h4>
<p>Decide which colors should dominate, support, or recede. A creator may preserve natural skin while cooling the background, reduce distracting greens, warm highlights, mute secondary colors, or emphasize brand colors.</p>
<p>Complementary color relationships such as warm skin against cooler surroundings are common, but they are not mandatory formulas.</p>
<h4>5. Refine important regions</h4>
<p>Use qualifiers, masks, tracked windows, curves, and other secondary tools to protect faces, products, logos, or backgrounds. A global adjustment that helps the sky may harm skin tones, so local control is often necessary.</p>
<h4>6. Add texture carefully</h4>
<p>Film grain, glow, halation, diffusion, sharpening, denoising, and vignettes can support a look. These effects should be judged at the final <a href="/glossary/video-resolution/">video resolution</a>, because resizing and YouTube compression can change their appearance.</p>
<h4>7. Review the sequence and export</h4>
<p>Watch the complete edit for sudden shifts, not only favorite still frames. Check representative consumer displays when possible and export through the correct <a href="/glossary/video-codec/">video codec</a>, color space, bit depth, and metadata path.</p>
<h3>LUTs in color grading</h3>
<p>A <strong><a href="/glossary/lut/">LUT</a></strong>, or lookup table, converts input values into predetermined output values. LUTs are useful, but they are not intelligent filters.</p>
<p>Common categories include:</p>
<ul>
<li><strong>Technical LUTs:</strong> Transform a particular camera Log or color space into another working or display space.</li>
<li><strong>Monitoring LUTs:</strong> Provide a viewable preview while recording flat or wide-gamut footage.</li>
<li><strong>Creative LUTs:</strong> Apply a stylized color and contrast mapping.</li>
<li><strong>Show LUTs:</strong> Provide a shared look developed for a production.</li>
</ul>
<p>A LUT cannot detect that a clip is underexposed, has the wrong white balance, or comes from a different camera profile. A creative LUT may clip highlights or oversaturate skin if the input does not match what it expects.</p>
<p>For creators, a LUT is best treated as a transform or starting point. Adjust the footage before and after it as needed.</p>
<h3>Color grading tools</h3>
<table>
<thead>
<tr>
  <th>Tool</th>
  <th>Typical purpose</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Lift, gamma, gain or shadow, midtone, highlight controls</td>
  <td>Shape brightness and color in broad tonal regions</td>
</tr>
<tr>
  <td>Curves</td>
  <td>Refine contrast and selected hue, saturation, or luminance relationships</td>
</tr>
<tr>
  <td>Color wheels</td>
  <td>Push tonal ranges toward different colors</td>
</tr>
<tr>
  <td>Qualifiers</td>
  <td>Select a color or luminance range</td>
</tr>
<tr>
  <td>Masks or power windows</td>
  <td>Isolate a spatial area of the frame</td>
</tr>
<tr>
  <td>Tracking</td>
  <td>Keep a mask or correction attached to a moving subject</td>
</tr>
<tr>
  <td>Nodes or adjustment layers</td>
  <td>Organize the order and scope of operations</td>
</tr>
<tr>
  <td>Scopes</td>
  <td>Measure luminance, channels, hue, and saturation</td>
</tr>
<tr>
  <td>Color management</td>
  <td>Convert camera media through working and output spaces consistently</td>
</tr>
</tbody>
</table>
<p>Different software organizes these tools differently. The creative principles remain similar.</p>
<h3>Color management vs. color grading</h3>
<p>Color management is the technical system that interprets source footage, defines the working space, and converts the result to the output display space. Color grading is the creative work performed within that system.</p>
<p>A beautiful grade in the wrong color-management pipeline can appear washed out, over-contrasted, or incorrectly saturated after export. Creators should not compensate manually for a mistaken transform without first fixing the technical setup.</p>
<h3>Common color-grading mistakes</h3>
<ul>
<li>Applying a strong LUT before correcting exposure and white balance.</li>
<li>Grading every shot separately without checking sequence consistency.</li>
<li>Making skin, products, or logos inaccurate for the sake of a trend.</li>
<li>Crushing blacks and clipping highlights to imitate contrast.</li>
<li>Oversaturating footage viewed on a dull or uncalibrated monitor.</li>
<li>Adding heavy noise reduction and sharpening without checking motion.</li>
<li>Ignoring the final platform, screen size, codec, and <a href="/glossary/video-bitrate/">video bitrate</a>.</li>
<li>Assuming teal-and-orange color is the definition of cinematic grading.</li>
</ul>
<h3>Color grading for YouTube creators</h3>
<p>A useful creator grade often prioritizes:</p>
<ol>
<li>Natural, consistent skin tones.</li>
<li>Clear separation between presenter and background.</li>
<li>Accurate products and brand colors.</li>
<li>A repeatable look across uploads.</li>
<li>Contrast that survives mobile viewing and platform compression.</li>
<li>Restraint, so <a href="/glossary/youtube-thumbnails/">thumbnails</a>, graphics, and footage still belong together.</li>
</ol>
<p>Creators can save a reusable grade as a preset, node tree, or adjustment-layer template, but each recording should still be checked. Lighting, exposure, wardrobe, camera settings, and location change the input.</p>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>Is color grading the same as applying a filter?</h4>
<p>No. A filter or LUT applies a predefined mapping. Grading is the broader process of evaluating footage and making intentional global and local adjustments for the project.</p>
<h4>Do I need Log footage to color grade?</h4>
<p>No. Standard footage can be graded. Log and RAW formats may preserve more flexibility, but they also require correct interpretation and do not improve poor lighting or clipped exposure automatically.</p>
<h4>Should I grade before or after editing?</h4>
<p>A basic temporary look can help during editing, but final shot matching and grading are usually completed after the edit is mostly locked so time is not spent perfecting unused clips.</p>
<h4>Can a LUT fix bad footage?</h4>
<p>No. A LUT cannot restore clipped detail, remove severe noise, correct focus, or adapt intelligently to every exposure and white-balance error.</p>
<h4>Why does my grade look different after upload?</h4>
<p>Possible causes include color-space or gamma mismatches, incorrect metadata, display differences, platform <a href="/glossary/transcoding/">transcoding</a>, HDR-to-SDR conversion, and judging compressed playback before high-quality processing finishes.</p>
