import { Module } from '@nestjs/common';
import { Lab1Service } from './lab-1.service';
import { Lab1Controller } from './lab-1.controller';

@Module({
    controllers: [Lab1Controller],
    providers: [Lab1Service],
})
export class Lab1Module {}
