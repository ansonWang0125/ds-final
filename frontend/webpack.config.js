const path = require("path");

const paths = {
  appSrc: path.resolve(__dirname, "src"), // Your source code directory
};

module.exports = {
  context: paths.appSrc,
  entry: {
    vendor: ["react", "react-dom"],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [paths.appSrc, "node_modules"],
    alias: {
      "@components": path.resolve(paths.appSrc, "components/"),
    },
  },
};
