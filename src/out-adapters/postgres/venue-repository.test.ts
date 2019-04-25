import venueRepository from './venue-repository';

describe.only('venueRepository', () => {
  it('returns a new record', async () => {
    const result = await venueRepository.create({
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

    expect(result.name).toEqual('Accomodation 1');
  });
})