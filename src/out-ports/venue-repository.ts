import {withinConnection} from './connection';
import { Omit } from './types';

type VenueType = 'accommodation' | 'eventVenue';
type VenueT = {
  id: number,
  name: string,
  type: VenueType
}

type EventRepository = {
  create: (event: Omit<VenueT, 'id'>) => Promise<VenueT>
}

const repository: EventRepository = {
  create: async (venue) => {
    return withinConnection<VenueT>(async (connection) => {
      const result = await connection.query(`
          insert into event (name, type)
          VALUES ($1, $2)
          RETURNING *
        `, [venue.name, venue.type]
      );

      return {
        id: result.rows[0].id,
        name: result.rows[0].name,
        type: result.rows[0].type as VenueType
      };
    });
  }
}

export default repository;