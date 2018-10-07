import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { LoginModule } from './modules/login/login.module';
import { UserModule } from './modules/user/user.module';
import { OrderModule } from './modules/order/order.module';
import { MenuModule } from './modules/menu/menu.module';
import { DishModule } from './modules/dish/dish.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LoginModule,
    UserModule,
    OrderModule,
    MenuModule,
    DishModule,
    AuthModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
