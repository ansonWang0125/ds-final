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
      "@page": path.resolve(paths.appSrc, "page/"),
      "@config": path.resolve(paths.appSrc, "config/"),
      "@context": path.resolve(paths.appSrc, "context/"),
      "@routes": path.resolve(paths.appSrc, "routes/"),
      "@containers": path.resolve(paths.appSrc, "containers/"),
      "@functions": path.resolve(paths.appSrc, "functions/"),
    },
  },
};
