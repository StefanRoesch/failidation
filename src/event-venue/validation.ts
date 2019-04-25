'use strict'

import * as t from 'io-ts';

type EventVenue = string
type Accomodation = string
type Venue = EventVenue | Accomodation

const oneOf = (name: string, values: string[]) => {
    const isVenue = (value: unknown): value is string => typeof value === 'string' && values.includes(value);
    return new t.Type<string, string, unknown>(
        name,
        isVenue,
        (u, c) => isVenue(u) ? t.success(u as Venue) : t.failure(u, c),
        t.identity,
    )
}

export const Venue = t.type({
    resId: t.string,
    city: t.string,
    country: t.string,
    state: t.string,
    streetName: t.string,
    zipCode: t.string,
})

export const VenueRequest = t.type({
    type: oneOf('VenueRequiestFromString', ['venue', 'accomondation']),
    venueId: t.string,
})

const DateFromString = new t.Type<Date, string, unknown>(
    'DateFromString',
    (u): u is Date => u instanceof Date,
    (u, c) =>
      t.string.validate(u, c).chain(s => {
        const d = new Date(s)
        return isNaN(d.getTime()) ? t.failure(u, c) : t.success(d)
      }),
    a => a.toISOString()
  )

const EventUnconstrained = t.type({
    type: oneOf('EventFromString', ['Event']),
    resId: t.string,
    start: DateFromString,
    end: DateFromString,
    title: t.string,
});

export const Event = new t.Type(
  'Event',
  (u): u is Object => EventUnconstrained.is(u),
  (u, c) =>
    t.string.validate(u, c).chain(s => {
      const d = new Date(s)
      return isNaN(d.getTime()) ? t.failure(u, c) : t.success(d)
    }),
  a => a.toISOString()
)




