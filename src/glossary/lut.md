---
layout: layouts/glossary.njk
title: "What Is a LUT? Color Grading Guide for Video Creators"
description: "Learn what a LUT is, how technical and creative LUTs map color values, and why exposure, white balance, color space, and manual grading still matter."
permalink: /glossary/lut/
related_terms:
  - color-correction
  - color-grading
  - white-balance
  - color-temperature
  - dynamic-range
---

<h2>LUT</h2>
<p>A <strong>LUT</strong>, short for <strong>look-up table</strong>, is a predefined mapping that converts input color or brightness values into output values. In video editing, a LUT can transform footage into a different color space, normalize a flat camera profile, create a stylized look, or provide a consistent preview.</p>
<p>A LUT does not analyze the image or decide what needs correction. It applies the same mapping to every pixel value it receives. That makes LUTs fast and repeatable, but also means the result depends heavily on the footage, color space, exposure, <a href="/glossary/white-balance/">white balance</a>, and point in the workflow where the LUT is applied.</p>
<h3>How a LUT works</h3>
<p>A simplified LUT instruction is: "When the input value is this, output that value." The software repeats that process across the image.</p>
<p>A LUT may change:</p>
<ul>
<li>Brightness and contrast</li>
<li>Red, green, and blue channel relationships</li>
<li>Hue and saturation</li>
<li>Shadow, midtone, and highlight response</li>
<li>The appearance of a log-encoded or wide-gamut image on a standard display</li>
</ul>
<p>The LUT does not recognize a face, sky, product, or brand color. It cannot know that a shot is underexposed, that the wrong <a href="/glossary/color-temperature/">color temperature</a> was used, or that a skin tone needs protection.</p>
<h3>Technical LUT vs. creative LUT</h3>
<table>
<thead>
<tr>
  <th>Type</th>
  <th>Main purpose</th>
  <th>Example</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Technical or input LUT</td>
  <td>Converts known source <a href="/glossary/encoding/">encoding</a> into another expected space or display appearance</td>
  <td>Camera Log to Rec. 709</td>
</tr>
<tr>
  <td>Creative LUT</td>
  <td>Applies a designed color style or mood</td>
  <td>Warm highlights with cooler shadows</td>
</tr>
<tr>
  <td>Monitoring LUT</td>
  <td>Provides a viewable preview during recording or editing</td>
  <td>Flat Log recording displayed with normal contrast</td>
</tr>
<tr>
  <td>Output or display LUT</td>
  <td>Adapts a graded image for a particular display or delivery condition</td>
  <td>A finishing transform for a target display</td>
</tr>
</tbody>
</table>
<p>A technical LUT aims for a predictable transformation. A creative LUT aims for an aesthetic result. Some files combine both functions, which makes it important to read the creator's instructions and know what input the LUT expects.</p>
<h3>LUT vs. preset vs. manual grade</h3>
<table>
<thead>
<tr>
  <th>Tool</th>
  <th>What it stores or does</th>
  <th>How adaptive is it?</th>
</tr>
</thead>
<tbody>
<tr>
  <td>LUT</td>
  <td>Maps color values to predetermined outputs</td>
  <td>Not adaptive</td>
</tr>
<tr>
  <td>Editing preset</td>
  <td>Saves a collection of effect settings and controls</td>
  <td>Depends on the effects, but usually not scene-aware</td>
</tr>
<tr>
  <td>Manual correction</td>
  <td>Adjusts exposure, balance, contrast, and color for the actual shot</td>
  <td>Fully directed by the editor</td>
</tr>
<tr>
  <td>Manual grade</td>
  <td>Builds an intentional visual style for the project</td>
  <td>Fully directed by the editor</td>
</tr>
</tbody>
</table>
<p>A LUT can be part of <a href="/glossary/color-correction/">color correction</a> or <a href="/glossary/color-grading/">color grading</a>, but it is not a replacement for either process.</p>
<h3>1D LUTs and 3D LUTs</h3>
<p>A <strong>1D LUT</strong> generally maps each color channel independently. It is useful for tone curves, gamma changes, and channel-specific value adjustments, but it cannot fully describe complex relationships among colors.</p>
<p>A <strong>3D LUT</strong> maps combinations of red, green, and blue values through a three-dimensional color cube. It can create more complex hue, saturation, and cross-channel transformations.</p>
<p>For everyday creators, the most important point is not memorizing the mathematics. It is knowing that LUT files can have different capabilities, formats, grid sizes, expected inputs, and intended uses.</p>
<h3>Why the correct input matters</h3>
<p>A LUT is usually designed for a particular starting condition, such as:</p>
<ul>
<li>A specific camera and Log profile</li>
<li>A particular gamma curve and color gamut</li>
<li>Standard Rec. 709 footage</li>
<li>A scene-referred or display-referred workflow</li>
<li>A particular exposure convention</li>
</ul>
<p>Applying a camera-specific Log conversion LUT to ordinary Rec. 709 footage may create excessive contrast and saturation. Applying a generic creative LUT directly to unnormalized Log footage may produce a washed-out or unpredictable result.</p>
<p>"Log LUT" is not precise enough. Two cameras can use different Log curves, gamuts, sensor responses, and transforms.</p>
<h3>A practical LUT workflow</h3>
<p>A straightforward creator workflow may look like this:</p>
<ol>
<li>Confirm the footage's camera profile, gamma, and color space.</li>
<li>Set the project or clip color management correctly.</li>
<li>Correct major exposure and <a href="/glossary/white-balance/">white balance</a> problems at the appropriate stage.</li>
<li>Apply the intended technical transform when one is needed.</li>
<li>Match clips and cameras.</li>
<li>Apply or build the creative look.</li>
<li>Reduce LUT intensity or blend it when the full effect is too strong.</li>
<li>Make shot-level adjustments after viewing the result.</li>
<li>Check skin tones, highlights, shadows, saturation, and scopes.</li>
<li>Review the export on representative displays.</li>
</ol>
<p>The exact order can change with the software and color-managed workflow. The principle is to know what color values the LUT expects and what values it produces.</p>
<h3>Can a LUT fix bad footage?</h3>
<p>A LUT can make a useful transformation, but it cannot recover information that was never recorded. It cannot restore clipped highlights, repair severe underexposure without consequences, remove noise, correct missed focus, or understand which colors must remain accurate.</p>
<p>It may also make existing problems more obvious by increasing contrast or saturation.</p>
<p>Correct capture still matters: appropriate <a href="/glossary/iso/">ISO</a>, exposure, white balance, lighting, and a profile suited to the camera's <a href="/glossary/dynamic-range/">dynamic range</a> provide better material for any LUT or grade.</p>
<h3>Why a LUT looks different on different clips</h3>
<p>The mapping is fixed, but the input image changes. Differences in exposure, lighting color, wardrobe, skin tone, camera profile, and scene contrast all affect which values enter the table.</p>
<p>A LUT that looks balanced on a bright exterior may crush the shadows in a dark room. A look developed around one camera's Log profile may distort another camera's footage.</p>
<p>This is why professional results still require shot matching and manual adjustments.</p>
<h3>Common LUT mistakes</h3>
<ul>
<li><strong>Using the wrong input transform:</strong> The LUT expects a different Log curve or color space.</li>
<li><strong>Stacking conversions:</strong> Color management already normalized the clip, then a second conversion LUT is added.</li>
<li><strong>Treating a creative LUT as correction:</strong> Exposure and white balance remain inconsistent beneath the style.</li>
<li><strong>Applying full intensity by default:</strong> The designed effect overwhelms skin tones or product colors.</li>
<li><strong>Ignoring effect order:</strong> Corrections before and after a LUT can behave differently.</li>
<li><strong>Assuming "cinematic" is universal:</strong> A look that suits one story or brand may hurt another.</li>
<li><strong>Expecting recovered detail:</strong> LUTs cannot reconstruct clipped highlights or missing shadow information.</li>
<li><strong>Judging only by eye on one display:</strong> Scopes and multiple viewing conditions can reveal clipping or color problems.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>What does LUT stand for?</h4>
<p>LUT stands for look-up table. It maps input values to predetermined output values.</p>
<h4>Is a LUT the same as a filter?</h4>
<p>Not exactly. "Filter" is a broad creative term. A LUT is specifically a value-mapping table, although creative LUTs may produce a filter-like appearance.</p>
<h4>Do I need a LUT for Log footage?</h4>
<p>You need an appropriate transform or color-management process to display and grade Log footage correctly, but that transform does not have to be a manually applied LUT. Modern editors can use managed color-space conversions.</p>
<h4>Should a LUT be applied before color correction?</h4>
<p>It depends on the LUT and workflow. Input corrections may need to occur before a technical or creative LUT, while shot matching and finishing adjustments often continue afterward. Know what input the LUT expects.</p>
<h4>Can I use one LUT on every video?</h4>
<p>You can use a consistent look as a starting point, but each shot may need exposure, white-balance, contrast, and saturation adjustments. A fixed LUT does not guarantee consistent results from inconsistent footage.</p>
