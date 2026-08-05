const markdownIt = require("markdown-it");

const segmentLabels = {
  services:          "Services",
  products:          "Products",
  resources:         "Resources",
  blog:              "Blog",
  glossary:          "YouTube Glossary",
  about:             "About",
  contact:           "Contact",
  tools:             "YouTuber Tools",
  "free-guides":     "Free Creator Guides",
  "facebook-groups": "Facebook Groups",
  "who-we-serve":    "Who We Serve",
  "privacy-policy":  "Privacy Policy",
};

function slugToLabel(segment) {
  return segment.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function slugToTermName(slug) {
  const overrides = {
    "b-roll": "B-Roll",
    "click-through-rate": "Click-Through Rate",
    "cta": "CTA",
    "dslr-cameras": "DSLR Cameras",
    "royalty-free-music": "Royalty-Free Music",
    "seo": "SEO",
    "sub-for-sub": "Sub for Sub",
    "youtube-cpm": "YouTube CPM",
  };
  if (overrides[slug]) return overrides[slug];
  const wordMap = { youtube: "YouTube", cpm: "CPM", seo: "SEO", dslr: "DSLR", ama: "AMA", avd: "AVD", cta: "CTA" };
  return slug.split("-").map(w => wordMap[w] || (w.charAt(0).toUpperCase() + w.slice(1))).join(" ");
}

module.exports = function (eleventyConfig) {
  const md = markdownIt({ html: true, typographer: true });
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/google99c4ec46c718f75c.html");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("glossary", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/glossary/*.md")
      .sort((a, b) => a.fileSlug.localeCompare(b.fileSlug));
  });

  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob(["src/index.njk", "src/pages/**"])
      .sort((a, b) => (a.url || "").localeCompare(b.url || ""));
  });

  eleventyConfig.addFilter("termName", function (slug) {
    return slugToTermName(slug);
  });

  eleventyConfig.addFilter("groupByLetter", function (collection) {
    const groups = {};
    collection.forEach(item => {
      const name = slugToTermName(item.fileSlug);
      const letter = name[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push({ name, url: item.url });
    });
    return Object.keys(groups).sort().map(letter => ({ letter, terms: groups[letter] }));
  });

  eleventyConfig.addFilter("buildBreadcrumbs", function (url, title, fileSlug) {
    const segments = url.split("/").filter(s => s);
    if (segments.length === 0) return [];

    const crumbs = [{ label: "Home", url: "/", current: false }];

    segments.forEach((segment, i) => {
      const isLast = i === segments.length - 1;
      const href = "/" + segments.slice(0, i + 1).join("/") + "/";
      let label;

      if (isLast) {
        const isGlossaryTerm = url.includes("/glossary/") && segments.length > 1;
        label = isGlossaryTerm ? slugToTermName(fileSlug) : (title || segmentLabels[segment] || slugToLabel(segment));
      } else {
        label = segmentLabels[segment] || slugToLabel(segment);
      }

      crumbs.push({ label, url: href, current: isLast });
    });

    return crumbs;
  });

  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  eleventyConfig.addFilter("dateDisplay", function (date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("dateISO", function (date) {
    return new Date(date).toISOString().split("T")[0];
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
