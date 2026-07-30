---
layout: layouts/glossary.njk
title: "What Are UTM Parameters? Creator Campaign Analytics Guide"
description: "Learn how UTM source, medium, campaign, term, and content parameters label creator traffic, how to build consistent URLs, and which tracking limits matter."
permalink: /glossary/utm-parameters/

---

<h2>UTM Parameters</h2>
<p><strong>UTM parameters</strong> are campaign labels added to the end of a URL so analytics tools can identify where traffic came from and which marketing activity generated the visit.</p>
<p>A tagged URL can look like:</p>
<p><code>https://example.com/course?utm_source=youtube&amp;utm_medium=creator&amp;utm_campaign=editing_launch</code></p>
<p>The UTM portion does not change the destination page. It adds campaign information that an analytics system can collect when the visitor arrives.</p>
<h3>What does UTM mean?</h3>
<p>UTM historically refers to <strong>Urchin Tracking Module</strong>, from the analytics technology acquired by Google.</p>
<p>The important practical point is that UTM parameters provide a standard way to label campaign traffic.</p>
<h3>The five common UTM parameters</h3>
<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Purpose</th>
  <th>Creator example</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>utm_source</code></td>
  <td>Identifies the traffic source</td>
  <td><code>youtube</code></td>
</tr>
<tr>
  <td><code>utm_medium</code></td>
  <td>Identifies the marketing medium</td>
  <td><code>creator</code> or <code>video</code></td>
</tr>
<tr>
  <td><code>utm_campaign</code></td>
  <td>Identifies the campaign</td>
  <td><code>summer_camera_launch</code></td>
</tr>
<tr>
  <td><code>utm_term</code></td>
  <td>Identifies a paid keyword or optional targeting detail</td>
  <td><code>mirrorless_camera</code></td>
</tr>
<tr>
  <td><code>utm_content</code></td>
  <td>Distinguishes links, creatives, or placements</td>
  <td><code>description_top</code></td>
</tr>
</tbody>
</table>
<p>Google's current campaign URL guidance centers on source, medium, and campaign. Term and content add detail when needed.</p>
<h3>UTM source</h3>
<p><code>utm_source</code> answers: <strong>Where did the traffic come from?</strong></p>
<p>Examples:</p>
<ul>
<li><code>youtube</code></li>
<li><code>instagram</code></li>
<li><code>newsletter</code></li>
<li><code>partner_name</code></li>
<li><code>google</code></li>
<li><code>creator_name</code></li>
</ul>
<p>Choose one convention and use it consistently.</p>
<p>Avoid mixing:</p>
<ul>
<li><code>YouTube</code></li>
<li><code>youtube.com</code></li>
<li><code>YT</code></li>
<li><code>youtube</code></li>
</ul>
<p>Analytics can treat these as separate sources.</p>
<h3>UTM medium</h3>
<p><code>utm_medium</code> answers: <strong>What type of marketing channel or placement sent the traffic?</strong></p>
<p>Examples:</p>
<ul>
<li><code>creator</code></li>
<li><code>affiliate</code></li>
<li><code>email</code></li>
<li><code>social</code></li>
<li><code>paid_social</code></li>
<li><code>video</code></li>
<li><code>referral</code></li>
</ul>
<p>The best value depends on the brand's analytics taxonomy.</p>
<p>A creator should not invent a different medium for every video if the brand needs all creator traffic grouped together.</p>
<h3>UTM campaign</h3>
<p><code>utm_campaign</code> identifies the initiative.</p>
<p>Examples:</p>
<ul>
<li><code>summer_launch</code></li>
<li><code>q3_creator_campaign</code></li>
<li><code>back_to_school</code></li>
<li><code>new_product_2026</code></li>
<li><code>membership_launch</code></li>
</ul>
<p>Use a value that remains understandable months later.</p>
<h3>UTM term</h3>
<p><code>utm_term</code> was designed primarily for paid-search keyword information.</p>
<p>Brands sometimes repurpose it for:</p>
<ul>
<li>Audience</li>
<li>Product</li>
<li>Targeting</li>
<li>Creator tier</li>
<li>Keyword</li>
</ul>
<p>Repurposing can work if documented, but it can confuse teams expecting the standard paid-search meaning.</p>
<h3>UTM content</h3>
<p><code>utm_content</code> can distinguish:</p>
<ul>
<li>Top description link</li>
<li>Pinned comment</li>
<li>End-screen link</li>
<li>Thumbnail</li>
<li>Button</li>
<li>Creative version</li>
<li>Video</li>
<li>Short</li>
<li>Livestream</li>
</ul>
<p>Example:</p>
<p><code>utm_content=video_description_v2</code></p>
<p>This lets a team compare placements inside the same campaign.</p>
<h3>UTM parameters vs. tracking links</h3>
<p>A URL with UTMs is one type of <a href="/glossary/tracking-link">tracking link</a>.</p>
<p>However, tracking links can also use:</p>
<ul>
<li>Affiliate redirects</li>
<li>Click IDs</li>
<li>Server-side identifiers</li>
<li>Short-link systems</li>
<li>Product tags</li>
<li>Referral codes</li>
</ul>
<p>UTMs primarily label acquisition traffic in analytics. They do not automatically validate sales or commission.</p>
<h3>UTM parameters vs. GCLID</h3>
<table>
<thead>
<tr>
  <th>UTM parameters</th>
  <th>GCLID</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Manually or systematically assigned campaign labels</td>
  <td>Google-generated click identifier</td>
</tr>
<tr>
  <td>Human-readable</td>
  <td>Usually opaque</td>
</tr>
<tr>
  <td>Can be used across platforms</td>
  <td>Associated with eligible Google ad clicks</td>
</tr>
<tr>
  <td>Helps organize source, medium, and campaign</td>
  <td>Connects click details with Google Ads measurement</td>
</tr>
<tr>
  <td>Can coexist with auto-tagging</td>
  <td>Often added automatically when auto-tagging is enabled</td>
</tr>
</tbody>
</table>
<p>A brand should understand how manual UTMs interact with platform auto-tagging and analytics settings.</p>
<h3>Building a creator UTM link</h3>
<p>Suppose a brand wants to track a YouTube creator's top description link.</p>
<p>Destination:</p>
<p><code>https://example.com/product</code></p>
<p>Campaign values:</p>
<ul>
<li>Source: <code>youtube</code></li>
<li>Medium: <code>creator</code></li>
<li>Campaign: <code>summer_launch</code></li>
<li>Content: <code>rob_description_top</code></li>
</ul>
<p>Final URL:</p>
<p><code>https://example.com/product?utm_source=youtube&amp;utm_medium=creator&amp;utm_campaign=summer_launch&amp;utm_content=rob_description_top</code></p>
<p>A URL builder can reduce punctuation and encoding errors.</p>
<h3>UTM naming conventions</h3>
<p>A team can establish rules for:</p>
<ul>
<li>Lowercase only</li>
<li>Underscores or hyphens</li>
<li>No spaces</li>
<li>Date format</li>
<li>Creator identifier</li>
<li>Platform naming</li>
<li>Campaign naming</li>
<li>Placement naming</li>
<li>Product naming</li>
</ul>
<p>Example:</p>
<p><code>utm_source=youtube</code>
<code>utm_medium=creator</code>
<code>utm_campaign=2026_summer_launch</code>
<code>utm_content=rob_video_description</code></p>
<p>Document the taxonomy before distributing links.</p>
<h3>Case sensitivity and fragmentation</h3>
<p>Campaign values can appear separately when capitalization differs.</p>
<p>For example:</p>
<ul>
<li><code>YouTube</code></li>
<li><code>youtube</code></li>
<li><code>YOUTUBE</code></li>
</ul>
<p>can fragment reporting.</p>
<p>Google's older campaign best-practice guidance specifically warns that campaign parameters are case-sensitive.</p>
<p>Use lowercase unless the organization has a different standard.</p>
<h3>URL encoding</h3>
<p>Some characters must be encoded in URLs.</p>
<p>Avoid:</p>
<ul>
<li>Spaces</li>
<li><code>#</code> inside parameter values</li>
<li>Unescaped punctuation</li>
<li>Sensitive personal information</li>
<li>Long sentences</li>
</ul>
<p>A URL builder can encode values safely.</p>
<h3>Do not use UTMs on internal links</h3>
<p>UTMs are intended for inbound campaign links.</p>
<p>Using them on links between pages of the same website can:</p>
<ul>
<li>Start a new session or campaign attribution</li>
<li>Overwrite the original acquisition source</li>
<li>Distort reports</li>
<li>Break the customer journey</li>
</ul>
<p>Use internal analytics events or other identifiers for on-site navigation.</p>
<h3>UTM parameters and privacy</h3>
<p>UTM values are visible in the URL and can appear in:</p>
<ul>
<li>Browser history</li>
<li>Screenshots</li>
<li>Analytics</li>
<li>Server logs</li>
<li>Shared messages</li>
<li>Referrer data</li>
<li>Customer support tickets</li>
</ul>
<p>Do not place sensitive information in UTMs, such as:</p>
<ul>
<li>Email address</li>
<li>Full name</li>
<li>Phone number</li>
<li>Account number</li>
<li>Health information</li>
<li>Private audience label</li>
<li>Confidential price</li>
</ul>
<p>Use nonpersonal campaign IDs.</p>
<h3>Redirects and UTMs</h3>
<p>A redirect should preserve the UTM query string.</p>
<p>Creators should test:</p>
<ul>
<li>Short links</li>
<li>Country redirects</li>
<li>Mobile-app links</li>
<li>Ecommerce redirects</li>
<li>Checkout domains</li>
<li>Link-in-bio tools</li>
<li>Affiliate redirects</li>
</ul>
<p>If parameters disappear before the landing page loads, analytics may not record the campaign correctly.</p>
<h3>UTMs and conversion tracking</h3>
<p>UTMs tell analytics how the visit was labeled.</p>
<p><a href="/glossary/conversion-tracking">Conversion tracking</a> records the valuable action.</p>
<p>A complete setup needs:</p>
<ol>
<li>Tagged inbound link</li>
<li>Analytics or tracking code</li>
<li>Defined conversion event</li>
<li>Correct attribution settings</li>
<li>Testing</li>
<li>Reporting</li>
</ol>
<p>UTMs alone cannot tell whether a purchase occurred.</p>
<h3>Creator UTM checklist</h3>
<p>Before publishing:</p>
<ul>
<li>Confirm destination</li>
<li>Use approved taxonomy</li>
<li>Check source</li>
<li>Check medium</li>
<li>Check campaign</li>
<li>Add content only when useful</li>
<li>Use lowercase consistently</li>
<li>Encode special characters</li>
<li>Avoid personal information</li>
<li>Test redirects</li>
<li>Test mobile</li>
<li>Confirm analytics reporting</li>
<li>Save the final link</li>
<li>Avoid editing after publication</li>
</ul>
<h3>Related terms</h3>
<p><a href="/glossary/tracking-link">Tracking Link</a>, <a href="/glossary/conversion-tracking">Conversion Tracking</a>, <a href="/glossary/click-attribution">Click Attribution</a>, <a href="/glossary/traffic-sources">Traffic Sources</a>, <a href="/glossary/affiliate-link">Affiliate Link</a>, and <a href="/glossary/promo-code">Promo Code</a></p>

<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>

<h3>Frequently asked questions</h3>
<h4>Which UTM parameters are required?</h4>
<p>Google's campaign guidance commonly uses source, medium, and campaign as the core fields. Term and content are optional details.</p>
<h4>Are UTM parameters case-sensitive?</h4>
<p>Campaign values can be separated by capitalization in reporting, so consistent lowercase naming is a strong practice.</p>
<h4>Do UTMs track individual people?</h4>
<p>They label campaign traffic. They should not contain personal information, and they do not identify every person across devices by themselves.</p>
<h4>Do UTM parameters affect SEO?</h4>
<p>They do not inherently change page content, but duplicate parameter URLs can create reporting and crawling complexity. Sites should manage canonical URLs and link practices appropriately.</p>
