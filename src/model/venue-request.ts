
type VenueType = 'accommodation' | 'eventVenue';

export type VenueRequest = {
  id: number,
  venueId: string,
  eventId: string,
  type: VenueType
}