'use strict'

import { Venue, Event } from './validation'

[
  {input: {}, output: false},
  {input: {type: 'aldfjl'}, output: false},
  {input: {type: 'venue'}, output: false},
  {input: {type: 'venue', venueId: null}, output: false},
  {input: {type: 'venue', venueId: 'aldkfj'}, output: true}
].forEach(({input, output}) => {
  it('', () => {
    Venue.decode(input).map(venue => { 
      if (!output) throw new Error('lajdfa')});
    Event.decode(input).map(venue => { 
      if (!output) throw new Error('lajdfa')})
    const bla = (e: Event) => 1;
  })
})
