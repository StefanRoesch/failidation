import { withinConnection } from './connection';
import { Event } from '../../model/event';
import { EventRepository } from '../../out-ports/event-repository';
import { VenueRequest } from '../../model/venue-request';

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
  },
  createVenueRequest: async (venueRequest) => {
    return withinConnection<VenueRequest>(async (connection) => {
      const result = await connection.query(`
          insert into venue_for_event (venue_id, event_id, type)
          VALUES ($1, $2, $3)
          RETURNING *
        `, [venueRequest.venueId, venueRequest.eventId, venueRequest.type]
      );

      return {
        id: result.rows[0].id,
        venueId: result.rows[0].venue_id,
        eventId: result.rows[0].event_id,
        type: result.rows[0].type
      };
    });
  }
}

export default repository;