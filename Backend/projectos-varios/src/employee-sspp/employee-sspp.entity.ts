import { Entity, Column, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class EmployeeSSPP {

    @ApiProperty()
    @PrimaryColumn()
    id: number;

    @ApiProperty()
    @Column()
    Perfil: string;

    @ApiProperty()
    @Column()
    NombreEmpleado: string;

    @ApiProperty()
    @Column()
    Mail: string;

    @ApiProperty()
    @Column()
    DenomEdifMI: string;

    @ApiProperty()
    @Column()
    Planta: string;

    @ApiProperty()
    @Column()
    DireccionMI: string;

    @ApiProperty()
    @Column()
    ProvinciaMI: string;

    @ApiProperty()
    @Column()
    TelefonoOficina: string;

}
