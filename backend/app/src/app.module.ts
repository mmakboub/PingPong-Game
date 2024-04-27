import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { GameModule } from './modules/game/game.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [UserModule, GameModule, ProfileModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
