import { Venue } from "../model/Venue";
import { Omit } from "../model/types";

export type VenueRepository = {
  create: (event: Omit<Venue, 'id'>) => Promise<Venue>
}
