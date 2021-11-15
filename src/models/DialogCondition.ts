import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert } from 'typeorm';
import { v4 } from 'uuid';
import { Dialog } from './Dialog';
import { DialogResponse } from './DialogResponse';

export enum ConditionComparisonEnum {
    LESS_THEN = 'lt', // lessThen
    GREATER_THEN = 'gt', // greaterThen
    EQUAL = 'eq', // equal
}

@Entity({ name: 'dialog_condition' })
export class DialogCondition {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @ManyToOne((type) => Dialog, (dialog) => dialog.conditions, {
        nullable: true,
    })
    public dialog?: Dialog;

    @ManyToOne((type) => DialogResponse, (response) => response.conditions, {
        nullable: true,
    })
    public response?: DialogResponse;

    // config start // maybe we can use json
    @Column({
        type: 'int',
        nullable: true,
    })
    public amount: number;

    @Column({
        type: 'bool',
        nullable: true,
    })
    public exist: number;

    @Column({
        type: 'enum',
        enum: ConditionComparisonEnum,
        default: ConditionComparisonEnum.EQUAL,
    })
    public comparison: ConditionComparisonEnum;
    // config end

    // TODO
    // characteristic?: CharacteristicsEnum // Enum
    // questRef?: uuidRef; // Quest
    // itemRef?: uuidRef; // Item
    // perkRef?: uuidRef; // Perk
    // achievementRef: uuidRef; // Achievement    
	@BeforeInsert()
	addId() {
		this.id = v4();
	}
}
