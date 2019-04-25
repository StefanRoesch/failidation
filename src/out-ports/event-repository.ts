import {withinConnection} from './connection';
import { Omit } from './types';

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
    return withinConnection<EventT>(async (connection) => {
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
    });
  }
}

export default repository;