import { withinConnection } from './connection';
import { Venue } from '../../model/venue';
import { VenueRepository } from '../../out-ports/venue-repository';

const repository: VenueRepository = {
  create: async (venue) => {
    return withinConnection<Venue>(async (connection) => {
      const result = await connection.query(`
          insert into venue (name, tenant_id, address, phone, fax, accessibility)
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING *
        `, [venue.name, venue.tenantId, JSON.stringify(venue.address), venue.phone, venue.fax, venue.accessibility]
      );

      return {
        id: result.rows[0].id,
        name: result.rows[0].name,
        tenantId: result.rows[0].tenant_id,
        address: JSON.parse(result.rows[0].address),
        phone: result.rows[0].phone,
        fax: result.rows[0].fax,
        accessibility: result.rows[0].accessibility,  
      };
    });
  }
}

export default repository;