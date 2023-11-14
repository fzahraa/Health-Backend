import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class XRAY_DET {
  @PrimaryGeneratedColumn()
  XRAY_ID: number;

  @Column({ nullable: true })
  NME: string;

  @Column({ nullable: true })
  XRAY_PRCE: number;

  @Column({ nullable: true })
  XRAY_CODE: string;

}