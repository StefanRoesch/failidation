
create table if not exists
public.event (
  id		      SERIAL PRIMARY KEY,
  name        text not null,
  start_date  date not null,
  end_date    date not null
);