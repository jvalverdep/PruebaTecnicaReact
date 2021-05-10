"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const swagger_1 = require("@nestjs/swagger");
const utils_1 = require("./shared/utils");
const timeout = require("connect-timeout");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(helmet());
    app.enableCors();
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 500,
    }));
    app.use(timeout('600s'));
    app.use(bodyParser.json({ limit: '25mb' }));
    app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Api Tablas')
        .setDescription('Api Rest')
        .setVersion('1.3.0 - beta')
        .addTag('Login')
        .addTag(utils_1.tags.UserApp)
        .addTag(utils_1.tags.Trademark)
        .addTag(utils_1.tags.Product)
        .addTag(utils_1.tags.Category)
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 3030);
}
bootstrap();
//# sourceMappingURL=main.js.map