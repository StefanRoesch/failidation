import eventRepository from './event-repository';
import venueRepository from './venue-repository';

describe.only('eventRepository', () => {
  it('returns a new record', async () => {
    const result = await eventRepository.create({
      name: 'Event 1',
      startDate: new Date('2000-01-01'),
      endDate: new Date('2000-01-01')
    });

    expect(result.name).toEqual('Event 1');
  });

  it('returns a new VenueRequest record', async () => {
    const event = await eventRepository.create({
      name: 'Event 1',
      startDate: new Date('2000-01-01'),
      endDate: new Date('2000-01-01')
    });
    const venue = await venueRepository.create({
      name: 'Accomodation 1',
      tenantId: 'string',
      address: {
          streetName: 'string',
          streetNumber: 'string',
          zip: 1234,
          city: 'string',
          country: 'string',
      },
      phone: 'string',
      fax: 'string',
      accessibility: 'ja', 
    });
    const result = await eventRepository.createVenueRequest({
      eventId: event.id,
      venueId: venue.id,
      type: 'accommodation',
    });

    expect(result.eventId).toEqual(event.id);
  });
})