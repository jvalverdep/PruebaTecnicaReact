import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { tags } from './shared/utils';
//var bodyParser = require('body-parser');
import * as timeout from 'connect-timeout';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //middlewares
  app.use(helmet());
  app.enableCors();
  //app.use(csurf());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 500, // limit each IP to 100 requests per windowMs
    }),
  );
  app.use(timeout('600s'));
  app.use(bodyParser.json({limit: '25mb'}));
  app.use(bodyParser.urlencoded({limit: '25mb', extended: true}));

  const options = new DocumentBuilder()
    .setTitle('Api Tablas')
    .setDescription('Api Rest')
    .setVersion('1.3.0 - beta')
    .addTag('Login')
    //.addTag(tags.EMPLEADOSSSPP)
    .addTag(tags.UserApp)
    .addTag(tags.Trademark)
    .addTag(tags.Product)
    .addTag(tags.Category)
  //  .addTag(tags.Brands)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3030);
}
bootstrap();
