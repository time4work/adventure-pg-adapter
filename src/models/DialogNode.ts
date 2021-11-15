import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, BeforeInsert } from 'typeorm';
import { v4 } from 'uuid';
import { Dialog } from './Dialog';
import { DialogResponse } from './DialogResponse';

@Entity({ name: 'dialog_node' })
export class DialogNode {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({
        length: '200',
        nullable: false,
    })
    public label: string;

    @Column({
        length: '500',
        nullable: true,
    })
    public description?: string;

    @Column({
        type: 'int',
        nullable: true,
    })
    public timeout?: number;

    @OneToOne((type) => DialogNode, {
        nullable: true,
    })
    public next?: DialogNode;

    @ManyToOne((type) => Dialog, (dialog) => dialog.nodes, {
        nullable: false,
    })
    public dailog: Dialog;

    @OneToMany((type) => DialogResponse, (response) => response.parent, {
        cascade: true,
    })
    public responses: DialogResponse[];

	@BeforeInsert()
	addId() {
		this.id = v4();
	}
}
