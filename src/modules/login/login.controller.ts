import { Controller, Get, Query } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from '../user/user.entity';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('login')
  async login(@Query() {account, password}): Promise<User|Object> {
    const user = await this.loginService.login({account, password})
    let res = user || {}
    return res
  }
}
