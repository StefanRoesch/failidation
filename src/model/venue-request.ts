
type VenueType = 'accommodation' | 'eventVenue';

export type VenueRequest = {
  id: number,
  venueId: number,
  eventId: number,
  type: VenueType
}