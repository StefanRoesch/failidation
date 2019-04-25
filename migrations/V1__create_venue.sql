create table if not exists
public.venue (
  id		   SERIAL PRIMARY KEY,
  name     text not null,
  type     text not null
);