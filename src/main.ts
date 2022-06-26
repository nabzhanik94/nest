import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


async function start() {
  const PORT = process.env.PORT || 8000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle("nest-api").setDescription("Documentation").setVersion("1.0.0")
  .addTag("NESTJS").build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log('listening on port ' + PORT));
}

start();