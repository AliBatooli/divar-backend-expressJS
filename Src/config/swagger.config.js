const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

function swaggerConfig(app) {
  const swaggerDoc = swaggerJSDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "divar",
        description: "backend divar",
        version: "0.0.1",
      },
    },
    apis: [process.cwd() + "/Src/modules/**/*.swagger.js"],
  });
  app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDoc, {}));
}

module.exports = swaggerConfig;
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const SwaggerConfig = (app) => {
//   const swaggerDocument = swaggerJsDoc({
//     swaggerDefinition: {
//       openapi: "3.0.1",
//       info: {
//         title: "divar-backend",
//         description: "beckend ",
//         version: "1.0.0",
//       },
//     },

//     apis: [process.cwd() + "Src/modules/**/*.swagger.js"],
//   });

//   const swagger = swaggerUi.setup(swaggerDocument, {});
//   app.use("/", swaggerUi.serve, swagger);
// };

// module.exports = SwaggerConfig;
