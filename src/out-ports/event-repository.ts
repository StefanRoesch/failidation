import { Omit } from "../model/types";
import { Event } from "../model/Event";

export type EventRepository = {
  create: (event: Omit<Event, 'id'>) => Promise<Event>
}
