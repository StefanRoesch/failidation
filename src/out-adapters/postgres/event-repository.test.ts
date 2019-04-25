import eventRepository from './event-repository';

describe.only('eventRepository', () => {
  it('returns a new record', async () => {
    const result = await eventRepository.create({
      name: 'Event 1',
      startDate: new Date('2000-01-01'),
      endDate: new Date('2000-01-01')
    });

    expect(result.name).toEqual('Event 1');
  });
})