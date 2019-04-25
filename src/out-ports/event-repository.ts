import { Omit } from "../model/types";
import { Event } from "../model/event";
import { VenueRequest } from '../model/venue-request'

export type EventRepository = {
  create: (event: Omit<Event, 'id'>) => Promise<Event>,
  createVenueRequest: (venueRequest: VenueRequest) => Promise<VenueRequest>
}
