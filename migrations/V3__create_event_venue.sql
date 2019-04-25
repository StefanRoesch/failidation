create table if not exists
public.venue_for_event (
  id       SERIAL PRIMARY KEY,
  venue_id INT NOT NULL REFERENCES public.venue(id),
  event_id INT NOT NULL REFERENCES public.event(id),
  type text not null
);

