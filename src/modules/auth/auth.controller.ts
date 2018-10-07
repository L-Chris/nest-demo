import { Controller, Post, Body, Res, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() body, @Res() res) {
    if (!body) return
    const token = this.authService.sign(body)
    res.status(HttpStatus.ACCEPTED).json(`Bearer ${token}`)
  }
}