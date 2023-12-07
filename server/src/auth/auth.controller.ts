import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('yandex'))
  @Get('profile')
  async profile() {
    return this.authService.profile();
  }
  @UseGuards(AuthGuard('yandex'))
  @Get('login')
  async login(@Req() req: any, @Res() res: any) {
    if (req.isAuthenticated()) {
      res.redirect('/profile');
    } else {
      res.redirect('/login');
    }
  }

  @Get('logout')
  async logout() {
    return this.authService.logout();
  }
}
