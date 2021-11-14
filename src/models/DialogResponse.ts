import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BeforeInsert } from 'typeorm';
import { v4 } from 'uuid';
import { DialogNode } from './DialogNode';
import { DialogCondition } from './DialogCondition';
import { Dialog } from './Dialog';

@Entity({ name: 'dialog_response' })
export class DialogResponse {
    @PrimaryGeneratedColumn('uuid')
    public id: number;

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

    @ManyToOne((type) => Dialog, (dialog) => dialog.responses, {
        nullable: false,
    })
    public dialog: Dialog;

    @ManyToOne((type) => DialogNode, (dialogNode) => dialogNode.responses, {
        nullable: false,
    })
    public parent: DialogNode;

    @ManyToOne((type) => DialogNode, {
        nullable: false,
    })
    public next: DialogNode;

    @OneToMany((type) => DialogCondition, (condition) => condition.response, {
        cascade: true,
    })
    public conditions: DialogCondition[];

	@BeforeInsert()
	addId() {
		this.id = v4();
	}
}
