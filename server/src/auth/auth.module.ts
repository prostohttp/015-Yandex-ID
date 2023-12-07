import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { YandexStrategy } from './yandex.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'yandex' })],
  controllers: [AuthController],
  providers: [AuthService, YandexStrategy],
})
export class AuthModule {}
