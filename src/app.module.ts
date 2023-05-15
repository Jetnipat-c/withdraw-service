import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { AppDataSource } from 'ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WithdrawModule } from './withdraw/withdraw.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeOrmModule.forRoot(AppDataSource.options),
    WithdrawModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
