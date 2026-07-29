---
layout: layouts/glossary.njk
title: "What Is ISO? Camera Sensitivity and Noise Explained"
description: "Learn what ISO means on a digital camera, how it changes image brightness, noise, and dynamic range, and how video creators should choose ISO settings."
permalink: /glossary/iso/
related_terms:
  - aperture
  - depth-of-field
  - color-temperature
  - exposure-triangle
  - dynamic-range
  - frame-rate-fps
---

<h2>ISO</h2>
<p><strong>ISO</strong> is a camera setting that controls how strongly a digital camera amplifies or maps the signal produced by the light captured on its sensor. Raising ISO makes the recorded image brighter, while lowering ISO makes it darker when <a href="/glossary/aperture">aperture</a>, shutter speed, and lighting remain unchanged.</p>
<p>ISO is often described as the sensor's sensitivity to light. That is a useful shortcut, but a digital sensor does not physically become more light-sensitive each time the number changes. The amount of captured light is controlled primarily by the scene illumination, lens aperture, and shutter duration. ISO changes what the camera does with the resulting signal.</p>
<h3>How ISO numbers work</h3>
<p>Common full-stop ISO values include:</p>
<p>100, 200, 400, 800, 1600, 3200, 6400, and 12800.</p>
<p>Doubling the number normally increases recorded brightness by one stop. Halving it reduces recorded brightness by one stop.</p>
<table>
<thead>
<tr>
  <th>Change</th>
  <th>Brightness response</th>
  <th>Example</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Increase one stop</td>
  <td>Approximately twice as bright</td>
  <td>ISO 400 to 800</td>
</tr>
<tr>
  <td>Decrease one stop</td>
  <td>Approximately half as bright</td>
  <td>ISO 800 to 400</td>
</tr>
<tr>
  <td>Increase two stops</td>
  <td>Approximately four times as bright</td>
  <td>ISO 400 to 1600</td>
</tr>
<tr>
  <td>Increase one-third stop</td>
  <td>Small incremental increase</td>
  <td>ISO 400 to 500 on many cameras</td>
</tr>
</tbody>
</table>
<p>Changing ISO can help maintain exposure when the creator cannot add light, widen the aperture, or use a longer shutter duration. It does not increase the number of photons the sensor captured.</p>
<h3>ISO in the exposure triangle</h3>
<p>ISO is one side of the <a href="/glossary/exposure-triangle">exposure triangle</a>, along with aperture and shutter speed.</p>
<ul>
<li>Aperture changes the lens opening and the amount of light reaching the sensor.</li>
<li>Shutter speed changes how long each frame gathers light.</li>
<li>ISO changes the signal amplification or brightness mapping.</li>
</ul>
<p>The distinction matters because ISO cannot replace good lighting. A higher ISO can make a dim subject visible, but it also amplifies the imperfect signal produced when little light was captured.</p>
<h3>Why high ISO can look noisy</h3>
<p>Digital noise appears as random brightness or color variation. It becomes more visible when the useful image signal is weak and the camera or editor raises that signal substantially.</p>
<p>Several sources contribute to the result:</p>
<ul>
<li><strong>Photon or shot noise:</strong> Natural statistical variation in the small number of photons captured in low light.</li>
<li><strong>Read noise:</strong> Electronic uncertainty introduced when the camera reads the sensor.</li>
<li><strong>Thermal noise:</strong> Noise affected by sensor temperature and long recording or exposure times.</li>
<li><strong>Processing and compression:</strong> Sharpening, noise reduction, chroma subsampling, and heavy compression can alter the noise pattern.</li>
</ul>
<p>High ISO is associated with noise because it is often used in dark conditions and because stronger amplification makes noise easier to see. The root problem is frequently insufficient captured light rather than the ISO number by itself.</p>
<p>A properly exposed ISO 3200 image can look cleaner than an ISO 400 image that was underexposed by several stops and brightened aggressively in editing.</p>
<h3>ISO and dynamic range</h3>
<p><a href="/glossary/dynamic-range">Dynamic range</a> is the span between usable shadows and highlights. Raising ISO often reduces highlight headroom because the amplified signal reaches the recording maximum sooner.</p>
<p>At a lower base setting, a camera may preserve more bright detail before clipping. At very low or extended settings, however, the camera may simply digitally pull the image down without gaining extra highlight information.</p>
<p>The relationship varies by camera and recording mode. Log profiles may require a higher minimum ISO because of how the gamma curve allocates highlight and shadow information. That higher number does not necessarily mean the camera suddenly became worse; it reflects a different signal and exposure design.</p>
<h3>Base ISO, native ISO, and dual-base ISO</h3>
<p>These terms are often used loosely.</p>
<table>
<thead>
<tr>
  <th>Term</th>
  <th>Practical meaning</th>
  <th>Important caution</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Base ISO</td>
  <td>A camera or mode's reference setting, often associated with its widest usable dynamic range or cleanest response</td>
  <td>The value can change with picture profile or recording mode</td>
</tr>
<tr>
  <td>Native ISO</td>
  <td>A setting tied to the sensor and camera's designed gain behavior</td>
  <td>Manufacturers do not always use the term consistently</td>
</tr>
<tr>
  <td>Dual-base ISO</td>
  <td>A sensor or processing design with a second gain stage that improves noise performance at a higher setting</td>
  <td>It does not make every value between the two bases equally optimal</td>
</tr>
<tr>
  <td>Extended ISO</td>
  <td>A value produced partly or fully through digital scaling beyond the normal calibrated range</td>
  <td>May reduce highlight detail or image quality without adding true capture capability</td>
</tr>
</tbody>
</table>
<p>Creators should consult camera-specific documentation and tests. Applying one manufacturer's terminology to another model can produce incorrect advice.</p>
<h3>The lowest ISO is not always the best ISO</h3>
<p>"Use the lowest ISO possible" is incomplete advice.</p>
<p>A low ISO is useful when the scene provides enough light for the required shutter speed and aperture. It can preserve highlight headroom and reduce the need for amplification. But forcing ISO 100 in a dim scene may lead to severe underexposure, motion blur, or an aperture that does not provide enough depth of field.</p>
<p>The better rule is to capture enough light for the shot, protect important highlights, and use an ISO that places the signal correctly for the camera mode.</p>
<p>For video creators, this may mean:</p>
<ul>
<li>Adding a key light instead of raising ISO.</li>
<li>Using a wider aperture when shallow focus is acceptable.</li>
<li>Keeping shutter speed appropriate for <a href="/glossary/frame-rate-fps">frame rate</a> rather than slowing it randomly.</li>
<li>Selecting a camera's recommended base setting for Log.</li>
<li>Raising ISO when the alternative is an unusably dark recording.</li>
</ul>
<h3>ISO for common creator situations</h3>
<table>
<thead>
<tr>
  <th>Situation</th>
  <th>Practical ISO approach</th>
  <th>Why</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Controlled talking-head studio</td>
  <td>Use a clean base range and adjust the lights</td>
  <td>Consistency and highlight control matter more than automatic exposure</td>
</tr>
<tr>
  <td>Handheld indoor vlog</td>
  <td>Auto ISO with a sensible maximum can help</td>
  <td>Light changes faster than manual adjustments are practical</td>
</tr>
<tr>
  <td>Outdoor daylight</td>
  <td>Use a low or base setting and control excess light with ND filtration</td>
  <td>Preserves preferred shutter and aperture</td>
</tr>
<tr>
  <td>Event or wedding</td>
  <td>Allow higher ISO to protect shutter speed and capture the moment</td>
  <td>A noisy sharp shot is often better than a blurred missed shot</td>
</tr>
<tr>
  <td>Product video on a tripod</td>
  <td>Keep ISO low and add light</td>
  <td>Static setup allows careful control</td>
</tr>
<tr>
  <td>Log recording</td>
  <td>Use the profile's supported base or recommended range</td>
  <td>Avoids treating the higher minimum as an error</td>
</tr>
<tr>
  <td>Slow motion</td>
  <td>Expect a higher ISO or stronger lighting</td>
  <td>High <a href="/glossary/frame-rate-fps">frame rate</a> usually requires a shorter exposure per frame</td>
</tr>
</tbody>
</table>
<p>These are principles rather than universal numeric presets. Modern cameras differ substantially in high-ISO performance.</p>
<h3>Auto ISO</h3>
<p>Auto ISO lets the camera change ISO as lighting changes. It is useful for run-and-gun shooting, events, wildlife, sports, and handheld vlogging.</p>
<p>Creators should configure it instead of accepting every default:</p>
<ul>
<li>Set a maximum ISO that matches the acceptable noise level.</li>
<li>Set or monitor the minimum shutter speed in photo modes.</li>
<li>Confirm whether exposure compensation works in manual mode with Auto ISO.</li>
<li>Watch for visible brightness steps during video.</li>
<li>Check whether the camera changes ISO smoothly or in abrupt increments.</li>
<li>Lock exposure when a shot must remain visually consistent.</li>
</ul>
<p>Auto ISO does not know whether a bright window, face, stage light, or product highlight is the priority. Use zebras, waveform, histogram, or exposure lock when the composition demands deliberate control.</p>
<h3>ISO invariance</h3>
<p>An <strong>ISO-invariant</strong> or near-invariant camera produces similar shadow quality whether the signal is amplified in the camera or recorded at a lower ISO and brightened later, within a certain range. This behavior can preserve highlight headroom in some RAW workflows.</p>
<p>It does not mean ISO never matters. The result depends on:</p>
<ul>
<li>The sensor and gain stage.</li>
<li>RAW versus processed video.</li>
<li>Codec and bit depth.</li>
<li>Picture profile.</li>
<li>Highlight requirements.</li>
<li>How far the image is pushed.</li>
</ul>
<p>Compressed video generally gives creators less freedom to underexpose and lift later than high-quality RAW stills. Expose for the actual recording format rather than relying on a broad internet claim about the camera being invariant.</p>
<h3>ISO and image brightness in editing</h3>
<p>Raising ISO in the camera and increasing exposure in post can sometimes produce similar brightness, but they are not always identical.</p>
<p>In-camera amplification may lift the signal before certain noise or quantization stages, while post-production works with the values already encoded in the file. A low-bit-depth or highly compressed file may break apart when shadows are raised, even if the sensor itself performed well.</p>
<p>The safest workflow is to record a strong signal without clipping important highlights. Use editing for refinement rather than as a substitute for capture.</p>
<h3>Common ISO mistakes</h3>
<ul>
<li>Believing a high ISO makes the sensor collect more light.</li>
<li>Keeping ISO at 100 while allowing severe underexposure.</li>
<li>Raising ISO instead of adding available light to a controlled set.</li>
<li>Comparing ISO numbers across cameras as though they produce identical brightness and noise.</li>
<li>Ignoring a Log profile's higher minimum ISO.</li>
<li>Using an extended low ISO and assuming it adds dynamic range.</li>
<li>Letting Auto ISO change visibly during a locked video shot.</li>
<li>Judging noise only on the small camera screen.</li>
<li>Applying heavy noise reduction that removes skin texture and fine detail.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>What ISO should I use for YouTube videos?</h4>
<p>Use the camera and profile's clean base range when lighting is controlled. Raise ISO as needed when adding light, changing aperture, or changing shutter is not practical. There is no universal number because cameras and recording modes differ.</p>
<h4>Does higher ISO always create more noise?</h4>
<p>Higher settings often make noise more visible and may reduce highlight headroom, but exposure matters. A well-exposed higher-ISO recording can be cleaner than a lower-ISO clip that was starved of light and aggressively brightened later.</p>
<h4>Why is the minimum ISO higher in Log mode?</h4>
<p>Log profiles allocate signal values differently to preserve a wide tonal range. Manufacturers may require a higher minimum setting so the profile has the intended highlight and shadow distribution. Follow the guidance for the specific camera.</p>
<h4>Is Auto ISO professional?</h4>
<p>It can be. Auto ISO is a practical tool when lighting changes quickly. Professional use means setting appropriate limits, understanding the camera's behavior, and locking exposure when consistency is more important than automatic adaptation.</p>
