import 'reflect-metadata';
import { Column, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

@Entity()
export class Style {
    /**
     * Identifier for keeping track of records
     *
     * @type {number}
     * @memberof Style
     */
    @ApiProperty({type:'string'})
    @PrimaryColumn()
    id: string;

    /**
     * Name of style for display purposes
     *
     * @type {string}
     * @memberof Style
     */
    @Column()
    name: string;

    /**
     * Name of style in Geoserver
     *
     * @type {string}
     * @memberof Style
     */
    @Column()
    geoserverStyleName: string;

    /**
     * Description of style
     *
     * @type {string}
     * @memberof Style
     */
    @Column()
    description: string;

    /**
     * Soft delete date
     */
    @ApiHideProperty()
    @DeleteDateColumn()
    deletedDate: Date;
}
