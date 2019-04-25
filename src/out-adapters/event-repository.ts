import { withinConnection } from './connection';
import { Omit } from '../model/types';
import { Event } from '../model/Event';
import { EventRepository } from '../out-ports/event-repository';

const repository: EventRepository = {
  create: async (event) => {
    return withinConnection<Event>(async (connection) => {
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