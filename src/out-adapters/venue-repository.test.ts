import venueRepository from './venue-repository';

describe.only('venueRepository', () => {
  it('returns a new record', async () => {
    const result = await venueRepository.create({
      name: 'Accomodation 1',
      type: 'accommodation',
    });

    expect(result.name).toEqual('Accomodation 1');
  });
})