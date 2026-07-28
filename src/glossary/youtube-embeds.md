---
layout: layouts/glossary.njk
title: "YouTube Embeds Explained: Code, Parameters & View Rules"
description: "What is a YouTube embed? See the exact iframe code, key parameters like autoplay and start time, and whether embedded plays count toward views and revenue."
permalink: /glossary/youtube-embeds/
related_terms:
  - traffic-sources
  - suggested-videos
  - engaged-views
  - monetized-playbacks
  - ad-revenue
  - youtube-partner-program
  - made-for-kids
---

<h2>YouTube Embeds</h2>
<p><strong>YouTube Embeds</strong> refers to placing YouTube's video player on an external website — a blog, news article, or landing page — using an <code>&lt;iframe&gt;</code> embed code, instead of only linking out to the video on youtube.com. Embed codes can be customized with URL parameters (autoplay, start time, captions, related-video behavior, and more), and creators can control whether their videos can be embedded at all.</p>
<p>For creators, the practical questions usually aren't about the HTML — they're about growth and money: does an embedded play count as a real view, does it count toward watch time and <a href="/glossary/monetized-playbacks/">monetized playbacks</a>, and can someone else profit from your video by embedding it on their site? This entry covers both.</p>

<h3>What Is a YouTube Embed?</h3>
<p>An embed is a small <code>&lt;iframe&gt;</code> window that streams the YouTube player directly from YouTube's servers and displays it inside another page. The video itself isn't copied or re-hosted — the embedding site just loads YouTube's player, which is why embedding a video doesn't use the embedder's own bandwidth or storage.</p>
<p>A basic embed code looks like this:</p>
<pre><code>&lt;iframe width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen&gt;&lt;/iframe&gt;
</code></pre>
<p>Google requires embedded players to be at least 200×200 pixels, and recommends 16:9 players be at least 480×270 pixels so the controls display properly — this also matters for ad eligibility (see "Do Embedded Views Count Toward Monetization?" below).</p>

<h3>How to Embed a YouTube Video (Step-by-Step)</h3>
<ol>
<li>On a computer, open the YouTube video or playlist you want to embed.</li>
<li>Click <strong>Share</strong>.</li>
<li>Select <strong>Embed</strong> from the share options.</li>
<li>Copy the HTML code shown in the pop-up box.</li>
<li>Paste the code into your website's HTML — in a text/HTML/code block, not a visual/rich-text editor (visual editors will often strip the <code>&lt;iframe&gt;</code> tag).</li>
<li>If you're on a managed network, ask the network administrator to allowlist <code>youtube.com</code> (or <code>youtube-nocookie.com</code> if using Privacy-Enhanced Mode — see below) in the firewall, or the embed may fail to load for users on that network.</li>
</ol>
<p>For a responsive player that scales to any screen width, wrap the iframe in a container <code>div</code> and use CSS (<code>padding-bottom: 56.25%</code> for 16:9 video) rather than fixed pixel <code>width</code>/<code>height</code> values.</p>

<h3>YouTube Embed Parameters Reference</h3>
<p>Parameters are appended to the embed URL as a query string, e.g. <code>https://www.youtube.com/embed/VIDEO_ID?autoplay=1&amp;start=90</code>. The first parameter follows a <code>?</code>; additional parameters are joined with <code>&amp;</code>.</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Values</th>
<th>What it does</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>autoplay</code></td>
<td><code>0</code> / <code>1</code> (default <code>0</code>)</td>
<td>Starts playback automatically on load. Most browsers block autoplay with sound, so it's almost always paired with <code>mute=1</code>.</td>
<td>Active</td>
</tr>
<tr>
<td><code>mute</code></td>
<td><code>0</code> / <code>1</code></td>
<td>Mutes the player on load. Not in Google's official parameter list, but works reliably and is the standard workaround for browser autoplay-with-sound restrictions.</td>
<td>Undocumented but functional</td>
</tr>
<tr>
<td><code>start</code></td>
<td>seconds (integer)</td>
<td>Begins playback at a specific timestamp.</td>
<td>Active</td>
</tr>
<tr>
<td><code>end</code></td>
<td>seconds (integer)</td>
<td>Stops playback at a specific timestamp, measured from the start of the video.</td>
<td>Active</td>
</tr>
<tr>
<td><code>controls</code></td>
<td><code>0</code> / <code>1</code> (default <code>1</code>)</td>
<td>Shows or hides the player's control bar.</td>
<td>Active</td>
</tr>
<tr>
<td><code>loop</code></td>
<td><code>0</code> / <code>1</code></td>
<td>Loops content. For a single video, <code>loop=1</code> alone does nothing — you must also set <code>playlist=VIDEO_ID</code> using the same video's ID.</td>
<td>Active (with caveat above)</td>
</tr>
<tr>
<td><code>rel</code></td>
<td><code>0</code> / <code>1</code> (default <code>1</code>)</td>
<td>Historically hid related videos at the end of playback when set to <code>0</code>. Since September 25, 2018, this no longer disables related videos — <code>rel=0</code> now only limits end-screen suggestions to videos from the same channel.</td>
<td>Changed 2018 — commonly misreported</td>
</tr>
<tr>
<td><code>cc_load_policy</code></td>
<td><code>1</code></td>
<td>Turns captions on by default.</td>
<td>Active</td>
</tr>
<tr>
<td><code>cc_lang_pref</code></td>
<td>ISO 639-1 code (e.g. <code>fr</code>)</td>
<td>Sets default caption language (use with <code>cc_load_policy=1</code>).</td>
<td>Active</td>
</tr>
<tr>
<td><code>hl</code></td>
<td>ISO 639-1 code or locale</td>
<td>Sets the player interface language.</td>
<td>Active</td>
</tr>
<tr>
<td><code>disablekb</code></td>
<td><code>0</code> / <code>1</code></td>
<td>Disables keyboard shortcuts (spacebar, arrow keys, etc.).</td>
<td>Active</td>
</tr>
<tr>
<td><code>fs</code></td>
<td><code>0</code> / <code>1</code> (default <code>1</code>)</td>
<td>Hides the fullscreen button when set to <code>0</code>.</td>
<td>Active</td>
</tr>
<tr>
<td><code>iv_load_policy</code></td>
<td><code>1</code> / <code>3</code></td>
<td>Shows (<code>1</code>, default) or hides (<code>3</code>) video annotations.</td>
<td>Active</td>
</tr>
<tr>
<td><code>list</code> / <code>listType</code></td>
<td>playlist ID / <code>playlist</code> or <code>user_uploads</code></td>
<td>Loads a playlist or a channel's uploads instead of a single video.</td>
<td>Active</td>
</tr>
<tr>
<td><code>playsinline</code></td>
<td><code>0</code> / <code>1</code></td>
<td>Controls inline vs. fullscreen playback on iOS.</td>
<td>Active</td>
</tr>
<tr>
<td><code>origin</code></td>
<td>your domain</td>
<td>Security parameter required when using the IFrame Player API (<code>enablejsapi=1</code>).</td>
<td>Active</td>
</tr>
<tr>
<td><code>enablejsapi</code></td>
<td><code>0</code> / <code>1</code></td>
<td>Allows the player to be controlled via JavaScript (IFrame Player API).</td>
<td>Active</td>
</tr>
<tr>
<td><code>color</code></td>
<td><code>red</code> / <code>white</code></td>
<td>Sets the progress-bar color.</td>
<td>Active</td>
</tr>
<tr>
<td><code>widget_referrer</code></td>
<td>your domain</td>
<td>Identifies the true traffic source in YouTube Analytics when the player is embedded inside a widget that's itself embedded elsewhere.</td>
<td>Active</td>
</tr>
<tr>
<td><code>showinfo</code></td>
<td>—</td>
<td>Used to toggle title/uploader info before playback.</td>
<td>Deprecated since 2018 — removed from Google's docs, has no effect</td>
</tr>
<tr>
<td><code>modestbranding</code></td>
<td>—</td>
<td>Used to hide the YouTube logo.</td>
<td>Deprecated since August 2023 — has no effect</td>
</tr>
</tbody>
</table>
<p>Fact-check note: A lot of embed guides still list <code>rel=0</code> as "hides related videos" and <code>modestbranding=1</code> as "removes the YouTube logo." Neither is true anymore. Related-video suppression ended in 2018, and <code>modestbranding</code> stopped doing anything in 2023. If you copy embed code from an older tutorial, don't expect these two to work.</p>

<h3>Privacy-Enhanced Mode (youtube-nocookie.com)</h3>
<p>Swapping the domain in the embed <code>src</code> from <code>youtube.com</code> to <code>youtube-nocookie.com</code> turns on <strong>Privacy-Enhanced Mode</strong>:</p>
<pre><code>&lt;iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" ...&gt;&lt;/iframe&gt;
</code></pre>
<p>What it actually changes: a view played in Privacy-Enhanced Mode isn't used to personalize the viewer's YouTube browsing experience or the ads they see, either inside that embed or afterward on YouTube itself. If ads run on the video, they'll be non-personalized.</p>
<p>What it doesn't change: this is not a zero-tracking mode. YouTube's own player still communicates with Google's servers when the page loads and when the viewer presses play (including sending the viewer's IP address), and normal cookies are set once playback starts. If the viewer clicks through to YouTube from the embed, standard tracking resumes there. Treat Privacy-Enhanced Mode as a meaningful reduction in personalization, not a complete privacy or GDPR solution on its own.</p>
<p>If your site or app is itself child-directed, you're required to self-designate it through Google's compliance tools regardless of which domain you embed from — this turns off personalized ads and disables some embedded-player features, and is a separate requirement from the video's own <a href="/glossary/made-for-kids/">Made for Kids</a> status.</p>

<h3>Do Embedded Views Count Toward Analytics and Monetization?</h3>
<p>Short answer: yes, largely the same as any other playback — with one specific exception.</p>
<ul>
<li><strong>View count</strong>: YouTube's own guidance states that embedded videos which are <em>autoplayed</em> do not increment the video's view count. A view counts when a viewer actively engages with playback, not simply because the page loaded with the video auto-running.</li>
<li><strong>Watch time</strong>: Watch time accumulated from a properly embedded, <strong>public</strong> video counts toward the channel's total watch time, including <a href="/glossary/youtube-partner-program/">YouTube Partner Program</a> eligibility hours — the same as watch time from youtube.com or the mobile app.</li>
<li><strong>Traffic source reporting</strong>: Plays from an embedded player show up in YouTube Analytics as their own <a href="/glossary/traffic-sources/">traffic source</a> category, distinct from search, suggested videos, or direct/channel traffic — useful for seeing how much of a video's performance comes from being embedded elsewhere versus watched on YouTube.</li>
<li><strong>Ad monetization</strong>: Embedded videos "honor the same ad enablement settings as videos on youtube.com" — if ads are turned on for a video, they can also show on embedded plays of it, counted as <a href="/glossary/monetized-playbacks/">monetized playbacks</a> the same as on-platform plays. Requirements include a reasonably sized player (200×200px minimum) and standard click-to-play embedding rather than scripted/forced autoplay of ads.</li>
<li><strong>Who gets paid</strong>: This is the most commonly misunderstood part. Only YouTube and the video's owner earn <a href="/glossary/ad-revenue/">ad revenue</a> from ads shown on an embed — the website where the video is embedded earns nothing from those YouTube ads. A site owner who wants to make money from an embedded video needs to run their own separate ads or sponsorships around it; embedding someone else's monetized video does not entitle the embedding site to a cut.</li>
</ul>

<h3>Can Creators Disable Embedding?</h3>
<p>Yes. To stop other sites from embedding a specific video:</p>
<ol>
<li>Sign in to YouTube Studio.</li>
<li>Select <strong>Content</strong> from the left menu.</li>
<li>Next to the video, open <strong>Details</strong>.</li>
<li>Click <strong>Show more</strong>.</li>
<li>Uncheck <strong>Allow embedding</strong>.</li>
<li>Click <strong>Save</strong>.</li>
</ol>
<p>This is an all-or-nothing switch per video — there's no setting to allow embedding everywhere except specific sites, and no way to allow the embed but block only the ads on it. If embedding is disabled, viewers on third-party pages see a message that playback has been disabled by the video owner and can only watch on YouTube itself.</p>

<h3>Embedding Restrictions to Know</h3>
<ul>
<li><strong>Private videos</strong> can't be embedded or played by the public at all, even with the embed code.</li>
<li><strong>Unlisted videos</strong> <em>can</em> be embedded and played by anyone who has the link or embed code, even though the video won't appear in search or on the channel page — a distinction that trips up creators who assume "unlisted" behaves like "private."</li>
<li><strong>Age-restricted videos</strong> cannot be watched inside a third-party embed. Clicking play redirects the viewer to youtube.com, where they must sign in and verify they're 18 or older.</li>
<li><strong>Made for Kids videos</strong> carry their contextual (non-personalized) ad settings into any embed of them, since embeds inherit the video's own youtube.com ad settings.</li>
<li><strong>Missing HTTP Referer</strong>: YouTube's terms require the embedding page to send an HTTP Referer header. Without one — such as opening the embed URL directly in a browser address bar rather than inside a page — viewers hit a blocked-playback "error 153" screen, with an option to click through and watch on YouTube.</li>
</ul>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>FAQ</h3>
<h4>Does embedding my video on another website hurt my YouTube views?</h4>
<p>No — it's a genuine playback source. Watch time and (for non-autoplayed plays) view count from embeds add to your channel totals the same as views from youtube.com, and they show up separately in your traffic source reports.</p>
<h4>Can I stop other people from embedding my videos?</h4>
<p>Yes. In YouTube Studio, open the video's Details, click Show more, and uncheck "Allow embedding," then save. It applies to the whole video everywhere, not select sites.</p>
<h4>Do I earn extra money when someone embeds my monetized video on their blog?</h4>
<p>You earn the same ad revenue share you'd earn from any other watch — YouTube and you split it. The blog or site owner hosting the embed does not get a cut of those YouTube ad earnings.</p>
<h4>What does youtube-nocookie.com actually do?</h4>
<p>It reduces personalization: the view won't be used to personalize the viewer's YouTube experience or ad targeting, and any ads served will be non-personalized. It does not eliminate all data being sent to Google, so don't rely on it alone for full privacy or cookie-consent compliance.</p>
