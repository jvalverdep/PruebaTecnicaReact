import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Trademark {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    Name: string;

    @ApiProperty()
    @Column({type:'varchar', length: 4294967295})
    Logo: String;

    @ApiProperty()
    @Column()
    DescriptionBrands: String;

    @ApiProperty()
    @Column()
    webSupplier: String;
    
    @ApiProperty()
    @Column()
    barndssuppliern: String;

    @ApiProperty()
    @Column()
    Active: boolean;

    @ApiProperty()
    @Column()
    createdAt: string;

    @ApiProperty()
    @Column()
    updateAt: string;
}
