import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async profile() {
    return {
      page: 'profile',
    };
  }
  async login(profile: any): Promise<any> {
    return await profile;
  }
  async logout() {
    return {
      page: 'logout',
    };
  }
}
