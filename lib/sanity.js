import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'cfc2cfel',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skTs1UN9T9JtOF0eoiHdLJBMOcmGICWiKT7tTyfIxkqxf37zyhBPFbIQbXuq6NmZeHQ8uQVpEVYmhB0j0VH1u0NitSPIo6AtjWB3aHzTI6MFOIHqb1wtI7qfssb6FOL5FFhMTyQMs90dv2GJTZYa1l9TZn4z1LssD7HueEpzgmm2ziyMPg1t', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})
