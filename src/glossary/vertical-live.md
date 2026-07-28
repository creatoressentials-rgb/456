---
layout: layouts/glossary.njk
title: "What Is Vertical Live on YouTube? How It Works [Guide]"
description: "Learn how YouTube Vertical Live works in the Shorts feed, how dual-format streaming works, and which discovery, ad, link, and 4K features differ."
permalink: /glossary/vertical-live/
related_terms:
  - live-control-room
  - stream-key
  - live-encoder
  - rtmp
  - live-redirect
  - super-chat
  - channel-memberships
  - traffic-sources
---

<h2>Vertical Live</h2>
<p><strong>Vertical Live</strong> is a YouTube live-stream format designed for portrait viewing on mobile devices. The video is taller than it is wide—typically a 9:16 layout—and can appear in a full-screen, swipeable experience while viewers browse Shorts or other vertical live streams in the YouTube app.</p>
<p>Vertical Live is not a YouTube Short or a prerecorded vertical upload. It is a live broadcast with real-time chat, live audience metrics, and supported fan-funding features.</p>

<h3>How viewers find Vertical Live streams</h3>
<p>While browsing the YouTube mobile app, viewers may encounter a vertical live stream in the Shorts experience or open the vertical live feed. Inside that feed, they can swipe to move between live broadcasts.</p>
<p>YouTube currently says the vertical live feed is available in the YouTube app and not on tablets. A vertical stream can also be opened through its normal watch-page link, channel, notification, or other YouTube discovery surfaces.</p>
<p>Creating a vertical stream does not guarantee that YouTube will distribute it broadly in the Shorts feed. Eligibility for the viewing format and recommendation performance are separate issues.</p>

<h3>Vertical Live versus Shorts and horizontal Live</h3>
<table>
<thead>
<tr>
  <th>Format</th>
  <th>Live or prerecorded?</th>
  <th>Typical shape</th>
  <th>Main viewing behavior</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Vertical Live</td>
  <td>Live</td>
  <td>9:16 portrait</td>
  <td>Full-screen mobile viewing, live chat, swipeable live discovery</td>
</tr>
<tr>
  <td>YouTube Short</td>
  <td>Prerecorded or uploaded</td>
  <td>Usually vertical or square</td>
  <td>Swipeable short-form feed and replay viewing</td>
</tr>
<tr>
  <td>Horizontal Live</td>
  <td>Live</td>
  <td>Usually 16:9 landscape</td>
  <td>Standard watch page on mobile, computer, TV, and other devices</td>
</tr>
<tr>
  <td>Dual-format Live</td>
  <td>Live</td>
  <td>16:9 and 9:16 versions</td>
  <td>Vertical version in mobile feed; horizontal version elsewhere</td>
</tr>
</tbody>
</table>
<p>A creator can broadcast only a vertical layout or use YouTube's current dual-stream tools to provide vertical and horizontal versions of the same event.</p>

<h3>How dual-format live streaming works</h3>
<p>YouTube now supports simultaneous horizontal 16:9 and vertical 9:16 streaming. This gives mobile feed viewers a portrait layout while desktop, TV, and standard watch-page viewers can receive the horizontal version.</p>
<p>The formats share:</p>
<ul>
<li>One public stream URL.</li>
<li>One "go live" notification for subscribers.</li>
<li>The same live chat.</li>
<li>Combined real-time metrics in <a href="/glossary/live-control-room/">Live Control Room</a>.</li>
</ul>
<p>YouTube says vertical-only metrics become available 24 hours after the stream ends. Creators can isolate the <strong>Vertical live feed</strong> playback location in Advanced Mode after that processing period.</p>

<h3>YouTube's automatic vertical layout</h3>
<p>In the current first-party <strong>Auto</strong> workflow, YouTube can create a vertical version from the horizontal source. The default behavior uses a center crop.</p>
<p>YouTube has also documented an editing canvas with layout choices such as:</p>
<ul>
<li>Center crop.</li>
<li>Fit to phone width.</li>
<li>Stacked layout.</li>
</ul>
<p>The editing option is being rolled out to eligible creators, so it may not appear on every channel at the same time. Creators using the canvas can adjust the vertical framing while live.</p>
<p>Automatic conversion is convenient, but a center crop can remove important content near the left and right edges. Presenters, captions, gameplay interfaces, and graphics should be tested inside a 9:16 safe area.</p>

<h3>Using a separate vertical encoder feed</h3>
<p>Creators who want full control over both layouts can select the encoder option in YouTube's dual-stream setup. YouTube recommends RTMP(S) for this third-party workflow.</p>
<p>The creator supplies a second <a href="/glossary/stream-key/">stream key</a> for the vertical feed and sends the correct format to each key:</p>
<ul>
<li>Horizontal content to the horizontal stream key.</li>
<li>Vertical content to the vertical stream key.</li>
</ul>
<p>This allows the production team to reposition cameras, graphics, captions, and screen elements rather than relying on a crop. The two feeds should represent the same live event so the shared chat and watch page remain coherent.</p>
<p>YouTube says the vertical format cannot be removed after the stream has started. The production team should confirm both layouts before going public.</p>

<h3>Vertical Live feature differences</h3>
<p>YouTube's current documentation lists important differences between standard horizontal streams and the vertical live feed:</p>
<table>
<thead>
<tr>
  <th>Feature</th>
  <th>Horizontal live stream</th>
  <th>Vertical live feed</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Discoverable in Shorts feed</td>
  <td>No</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Swipe to more live streams</td>
  <td>No</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Clickable links in chat and channel description</td>
  <td>Yes</td>
  <td>No</td>
</tr>
<tr>
  <td>Live pre-roll and mid-roll ads</td>
  <td>Yes</td>
  <td>No</td>
</tr>
<tr>
  <td>4K bitrate playback in YouTube app</td>
  <td>Yes</td>
  <td>No</td>
</tr>
<tr>
  <td>Premieres</td>
  <td>Yes</td>
  <td>No</td>
</tr>
<tr>
  <td><a href="/glossary/live-redirect/">Live Redirect</a></td>
  <td>Yes</td>
  <td>No</td>
</tr>
<tr>
  <td>Channel memberships</td>
  <td>Yes</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Gifted memberships</td>
  <td>Yes</td>
  <td>Yes</td>
</tr>
</tbody>
</table>
<p>YouTube's viewer documentation also supports Super Chat interactions in vertical live streams when the creator and viewer are eligible.</p>

<h3>Monetization in Vertical Live</h3>
<p>Vertical-feed viewers do not receive the same live pre-roll and mid-roll ad formats listed for horizontal streams. That does not mean Vertical Live has no monetization options.</p>
<p>Depending on channel and viewer eligibility, creators can use:</p>
<ul>
<li><a href="/glossary/super-chat/">Super Chat</a>.</li>
<li><a href="/glossary/super-stickers/">Super Stickers</a>.</li>
<li><a href="/glossary/channel-memberships/">Channel memberships</a>.</li>
<li>Gifted memberships.</li>
</ul>
<p>Because monetization surfaces and eligibility can change by country, device, and program status, creators should confirm current options in YouTube Studio rather than relying on an old feature chart.</p>

<h3>Vertical Live analytics</h3>
<p>During a dual-format broadcast, YouTube combines the formats' metrics in Live Control Room. That combined view helps creators operate one event, but it does not immediately show how the vertical surface performed by itself.</p>
<p>After at least 24 hours, creators can use YouTube Analytics Advanced Mode, choose <strong>Playback location</strong>, and isolate <strong>Vertical live feed</strong>. This can help evaluate:</p>
<ul>
<li>Watch time from vertical discovery.</li>
<li>Views and audience retention.</li>
<li>Traffic from the vertical live surface.</li>
<li>How vertical viewers compare with the full event audience.</li>
</ul>
<p>Analytics data is processed and despammed, so finalized values can differ from the immediate Live Control Room numbers.</p>

<h3>Vertical Live design best practices</h3>
<h4>Keep the subject inside the portrait frame</h4>
<p>Place faces, products, demonstrations, and critical action near the center. Test the actual vertical preview instead of assuming a horizontal scene will crop cleanly.</p>
<h4>Make text readable on a phone</h4>
<p>Use larger labels and fewer words. Horizontal lower thirds and wide tickers may become unreadable or disappear in a center crop.</p>
<h4>Rebuild gameplay and screen layouts</h4>
<p>Many games and desktop demonstrations put important controls at the far edges. A dedicated vertical scene can stack gameplay, camera, and chat-friendly graphics more effectively than cropping.</p>
<h4>Plan calls to action without clickable links</h4>
<p>YouTube's current comparison says clickable links in chat and the channel description are not available in the vertical live feed. Use spoken directions, memorable channel destinations, pinned content on supported surfaces, or follow-up posts rather than depending on a tap-through link.</p>
<h4>Moderate one shared chat</h4>
<p>Horizontal and vertical viewers see the same live chat during a dual stream. Moderators should understand that comments come from audiences seeing different layouts but participating in one conversation.</p>

<h3>Common Vertical Live mistakes</h3>
<ul>
<li>Treating a 9:16 stream as guaranteed Shorts-feed traffic.</li>
<li>Center-cropping gameplay without checking edge-based interface elements.</li>
<li>Using tiny horizontal graphics that are unreadable on mobile.</li>
<li>Promoting a clickable link that vertical-feed viewers cannot open.</li>
<li>Assuming vertical-feed live ads work the same as horizontal pre-roll and mid-roll ads.</li>
<li>Starting dual format before verifying both <a href="/glossary/stream-key/">stream keys</a> and previews.</li>
<li>Confusing combined live metrics with vertical-only performance.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>Does a vertical YouTube Live appear in the Shorts feed?</h4>
<p>It can be discovered in the Shorts and vertical live experiences, but YouTube does not guarantee distribution or a particular number of impressions simply because the stream is vertical.</p>
<h4>Can I stream horizontally and vertically at the same time?</h4>
<p>Yes. YouTube's current dual-stream feature supports simultaneous 16:9 and 9:16 versions with one URL, one subscriber notification, shared chat, and combined Live Control Room metrics.</p>
<h4>Does Vertical Live support 4K?</h4>
<p>YouTube's current feature table says 4K bitrate streaming is not available in the vertical live feed in the YouTube app. Horizontal live supports 4K when the broader stream configuration is compatible.</p>
<h4>Can viewers click links in a vertical live stream?</h4>
<p>YouTube's current comparison says clickable links in chat and the channel description are not available in the vertical live feed. Creators should plan calls to action that do not depend on those links.</p>
