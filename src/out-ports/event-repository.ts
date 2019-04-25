import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'dbuser',
  password: 'password',
  database: 'compup',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type EventT = {
  id: number,
  name: string,
  startDate: Date,
  endDate: Date
}


type EventRepository = {
  create: (event: Omit<EventT, 'id'>) => Promise<EventT>
}

const repository: EventRepository = {
  create: async (event) => {
    const connection = await pool.connect();
    const result = await connection.query(`
        insert into event (name, start_date, end_date)
        VALUES ($1, $2, $3)
        RETURNING *
      `, [event.name, event.startDate, event.endDate]
    );

    return {
      id: result.rows[0].id,
      name: result.rows[0].name,
      startDate: result.rows[0].start_date,
      endDate: result.rows[0].end_date
    };
  }
}

export default repository;