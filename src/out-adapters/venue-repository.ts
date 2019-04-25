import { withinConnection } from './connection';
import { Venue } from '../model/Venue';
import { VenueRepository } from '../out-ports/venue-repository';

const repository: VenueRepository = {
  create: async (venue) => {
    return withinConnection<Venue>(async (connection) => {
      const result = await connection.query(`
          insert into venue (name, type)
          VALUES ($1, $2)
          RETURNING *
        `, [venue.name, venue.type]
      );

      return {
        id: result.rows[0].id,
        name: result.rows[0].name,
        type: result.rows[0].type
      };
    });
  }
}

export default repository;