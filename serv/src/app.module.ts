import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';

@Module({
  //  controllers: [AppController],
  //  providers: [AppService]
  imports: [TrackModule]
})
export class AppModule { }