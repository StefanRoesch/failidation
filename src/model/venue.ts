type Address = {
    streetName: string,
    streetNumber: string,
    zip: number,
    city: string,
    country: string,
};

type Accessibility = 'ja' | 'nein' | 'teilweise' | 'ubekannt';

export type Venue = {
    id: number,
    name: string,
    tenantId: string,
    address: Address,
    phone: string,
    fax: string,
    accessibility: Accessibility,    
};
