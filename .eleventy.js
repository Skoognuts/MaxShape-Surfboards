/* Configuration File */

module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/blog/*.md");
  })

  eleventyConfig.addCollection("models", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/models/*.md").sort((a, b) => a.data.id - b.data.id);
  })

  eleventyConfig.addCollection("galerie", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/galerie/*.md");
  })
  
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/assets");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};