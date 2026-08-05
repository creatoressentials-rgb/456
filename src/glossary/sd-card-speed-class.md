---
layout: layouts/glossary.njk
title: "What Is SD Card Speed Class? Complete Creator Guide"
description: "Learn what C, U, V, and SD Express speed classes guarantee, how they differ from UHS bus and advertised speeds, and how to match a card to camera bitrate."
permalink: /glossary/sd-card-speed-class/
related_terms:
  - sd-card
  - frame-rate-fps
  - video-resolution
  - video-bitrate
  - video-codec
---

<h2>SD Card Speed Class</h2>
<p><strong>SD card speed class</strong> is a standardized rating that indicates a card's minimum sustained sequential write performance under the applicable SD specification.</p>
<p>This matters for video because a camera must write data continuously. A card may advertise a high maximum read speed yet still fail a recording mode if it cannot maintain the required write rate.</p>

<h3>What Do C, U, V, and E Ratings Mean?</h3>
<table><thead><tr><th>Class Family</th><th>Symbols</th><th>Minimum Sequential Write Speed</th></tr></thead>
<tbody>
<tr><td>Speed Class</td><td>C2, C4, C6, C10</td><td>2, 4, 6, or 10 MB/s</td></tr>
<tr><td>UHS Speed Class</td><td>U1, U3</td><td>10 or 30 MB/s</td></tr>
<tr><td>Video Speed Class</td><td>V6, V10, V30, V60, V90</td><td>6, 10, 30, 60, or 90 MB/s</td></tr>
<tr><td>SD Express Speed Class</td><td>E150, E300, E450, E600</td><td>150, 300, 450, or 600 MB/s</td></tr>
</tbody></table>
<p>The number in a V rating directly corresponds to the stated minimum megabytes per second. V30 therefore represents a 30 MB/s minimum sustained sequential write class.</p>

<h3>Speed Class vs. UHS-I and UHS-II</h3>
<p>These markings describe different things:</p>
<ul>
<li><strong>Speed class</strong> describes a minimum sustained-write performance level.</li>
<li><strong>UHS-I, UHS-II, and UHS-III</strong> describe bus interfaces used by compatible cards and host devices.</li>
<li><strong>Advertised MB/s</strong> usually describes a maximum measured read or write result under manufacturer test conditions.</li>
</ul>
<p>A UHS-II card may have a second row of contacts and a faster interface, but the camera must support that interface to receive the full benefit. The card can fall back to a slower compatible mode in some hosts.</p>

<h3>Minimum Speed vs. Maximum Speed</h3>
<table><thead><tr><th>Number</th><th>What It Means</th><th>Why Creators Care</th></tr></thead>
<tbody>
<tr><td>V60</td><td>Defined minimum sustained sequential write class of 60 MB/s</td><td>Relevant to continuous video recording</td></tr>
<tr><td>300 MB/s read</td><td>Claimed maximum read performance under specified conditions</td><td>Affects offload speed when the reader and computer support it</td></tr>
<tr><td>260 MB/s write</td><td>Claimed maximum write performance under specified conditions</td><td>Useful context, but not the same as the standardized minimum</td></tr>
</tbody></table>
<p>Do not choose a recording card from its large front-of-package read-speed number alone.</p>

<h3>Which Speed Class Do You Need?</h3>
<p>The camera manufacturer's card requirement is the best source. Resolution alone is not enough: 4K video can use a relatively modest bitrate or an extremely demanding intraframe, high-frame-rate, high-bit-depth format.</p>
<p>To compare a camera bitrate listed in megabits per second with a card class listed in megabytes per second, remember that eight bits equal one byte. A nominal 240 Mb/s stream is about 30 MB/s before allowing for overhead and manufacturer requirements. Use the camera's stated class recommendation rather than treating that conversion as the only safety margin.</p>

<h3>Why Can a Fast Card Still Stop Recording?</h3>
<ul>
<li>The card's sustained write performance may be below its advertised maximum.</li>
<li>The recording mode may require a higher official class than expected.</li>
<li>The camera slot may not support the card's faster bus mode.</li>
<li>The card may be counterfeit, damaged, overheating, fragmented, or nearly full.</li>
<li>The camera may write multiple files or metadata streams at once.</li>
<li>The card may not appear on the manufacturer's tested or approved list.</li>
</ul>

<h3>Video Speed Class Compatibility</h3>
<p>The SD Association ties higher Video Speed Classes to compatible bus families. V6 and V10 can be used with High Speed and UHS products, V30 applies to UHS products, and V60 and V90 apply to UHS-II or UHS-III product families.</p>
<p>A higher symbol is not useful when the camera cannot use the necessary interface or does not support the card capacity. Compatibility is a combination of class, bus, capacity standard, file system, and host implementation.</p>

<h3>Common SD Speed-Class Mistakes</h3>
<ul>
<li>Reading U3 as three megabytes per second; U3 represents a 30 MB/s minimum class.</li>
<li>Assuming UHS-III means U3; one is a bus generation and the other is a speed class.</li>
<li>Equating V30 with every possible 4K recording mode.</li>
<li>Buying based on maximum read speed when the problem is sustained writing.</li>
<li>Assuming a card reader will reach the card's advertised speed regardless of its own interface.</li>
<li>Using one successful short clip as proof that a card is reliable for a long recording.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently Asked Questions</h3>
<h4>Is V30 the same as U3?</h4>
<p>Both indicate a 30 MB/s minimum sustained sequential write class under their respective standards, but they are different class systems and may appear together on the same card.</p>
<h4>Does a V90 card make every camera faster?</h4>
<p>No. The camera must support the card's interface and have a workload that benefits from the additional performance.</p>
<h4>Is read speed or write speed more important for recording?</h4>
<p>Sustained write performance is the critical requirement while recording. Read performance mainly affects playback and file offloading.</p>
<h4>Does 4K always require V30?</h4>
<p>No. Card requirements depend on bitrate, codec, frame rate, bit depth, and camera design. Follow the recording-mode requirement in the camera manual.</p>
