import { Strategy } from 'passport-yandex';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET,
      callbackURL: process.env.YANDEX_CALLBACK_URL,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ) {
    done(null, profile);
  }
}
