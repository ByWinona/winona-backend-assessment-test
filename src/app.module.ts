import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'node:path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: join(process.cwd(), 'data', 'app.sqlite'),
      entities: [], // add your entities here
      synchronize: true,
      logging: ['error', 'warn'],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
