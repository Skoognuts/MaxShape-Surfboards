/* Configuration File */

module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("galerie", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/galerie/*.md");
  })
  
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};