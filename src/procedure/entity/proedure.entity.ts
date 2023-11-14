import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class PROC_DET {
  @PrimaryGeneratedColumn()
  PROC_ID: number;

  @Column({ nullable: true })
  NME: string;

  @Column({ nullable: true })
  PROC_PRCE: number;

  @Column({ nullable: true })
  PROC_CODE: string;

}