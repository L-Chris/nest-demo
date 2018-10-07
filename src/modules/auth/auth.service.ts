import * as jwt from 'jsonwebtoken'
import * as crypto from 'crypto'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async sign(credentials: { account: string, passowrd: string }): Promise<string> {
    const user = await this.userRepository.findOne({
      where: {
        account: credentials.account,
        password: crypto.createHmac('sha256', credentials.passowrd).digest('hex')
      }
    })
    if (!user) return ''
    return await jwt.sign(user)
  }
}
