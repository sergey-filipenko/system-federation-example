

window.System = System;

const init = () => {
  System.addImportMap({
    imports: {
      app_two: "http://localhost:3002/remoteEntry.js",
      app_three: "http://localhost:3003/remoteEntry.js",
      app_four: "http://localhost:3004/remoteEntry.js",
      "app_one/": "http://localhost:3001/",
    },
  });
  System.import('app_one/main.js')
}
init();
