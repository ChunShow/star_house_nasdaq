import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StockMarketData {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'date' })
  date: Date;
  @Column({ type: 'float8' })
  high: number;
  @Column({ type: 'float8' })
  open: number;
  @Column({ type: 'float8' })
  low: number;
  @Column({ type: 'float8' })
  close: number;
  @Column({ type: 'float8' })
  adjclose: number;
  @Column({ type: 'int8' })
  volume: number;
  // 참조 -> 어느 회사의 거래 데이터인지
  @ManyToOne(() => Company, (company) => company.stockMarketData)
  @JoinColumn()
  company: Company;
}

export class Company {
  id: number;
  // 상장 회사 이름
  name: string;
  // 상장 회사 주식 코드
  symbol: string;
  // 참조 -> 어느 회사의 거래 데이터인지

  @OneToMany(
    () => StockMarketData,
    (stockMarketData) => stockMarketData.company,
  )
  stockMarketData: StockMarketData[];
}
