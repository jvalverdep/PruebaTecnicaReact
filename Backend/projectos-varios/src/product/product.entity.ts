import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    Name: string;

    @ApiProperty()
    @Column()
    imgProduct: string;

    @ApiProperty()
    @Column()
    descriptionProduct: string;

    @ApiProperty()
    @Column()
    priceProduct: string;

    @ApiProperty()
    @Column()
    category_id: string;

    @ApiProperty()
    @Column()
    brands: string;

    @ApiProperty()
    @Column()
    mark_id: string;

    @ApiProperty()
    @Column()
    countProduct: string;

    @ApiProperty()
    @Column()
    gender: string;

    @ApiProperty()
    @Column()
    sku: string;

    
    @ApiProperty()
    @Column()
    material: string;

    @ApiProperty()
    @Column()
    discount: string;

    @ApiProperty()
    @Column()
    Active: string;
}
