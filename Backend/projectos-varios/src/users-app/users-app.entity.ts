import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UserApp {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    Profile: string;

    @ApiProperty()
    @Column()
    Username: string;
    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    Surname: string;

    @ApiProperty()
    @Column()
    Mail: string;

    @ApiProperty()
    @Column()
    Password: string;

    @ApiProperty()
    @Column()
    Active: boolean;
}
