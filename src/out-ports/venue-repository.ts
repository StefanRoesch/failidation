import { Venue } from "../model/venue";
import { Omit } from "../model/types";

export type VenueRepository = {
  create: (venueRequest: Omit<Venue, 'id'>) => Promise<Venue>
}
