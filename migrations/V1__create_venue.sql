create table if not exists
public.venue (
  id		        SERIAL PRIMARY KEY,
  name          text not null,
  tenant_id     text,  
  phone         text, 
  address       text,
  fax           text,
  accessibility text      
);