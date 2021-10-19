import { Module } from "@nestjs/common";
//import { AppController } from "./app.controller";
//import { AppService } from "./app.service";
import { TrackModule } from "./track/track.module";
//import {MongooseModule} from "@nestjs/mongoose";
//import {FileModule} from "./file/file.module";
//import * as path from 'path'
//import {ServeStaticModule} from "@nestjs/serve-static";

@Module({
  //controllers: [AppController],
  //providers: [AppService],

  imports: [
    //        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    //  MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.q4ykt.mongodb.net/music-platform?retryWrites=true&w=majority'),
    TrackModule//,
    //        FileModule
  ]
})
export class AppModule { }