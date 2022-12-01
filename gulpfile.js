const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("css"));
  // .pipe(purgecss({ content: ["*.html"] }))
}

function watchTask() {
  watch(["sass/**/*.scss"], buildStyles);
  // watch(["sass/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
