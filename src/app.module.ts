import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Lab1Module } from './lab-1/lab-1.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
    imports: [Lab1Module],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
