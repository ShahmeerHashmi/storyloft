import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your actual project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Default to 'production' if not set
  apiVersion: '2023-10-01', // Use the current date or the date of your Sanity API version
  token: process.env.SANITY_API_TOKEN, // Private token for write operations
  useCdn: false, // `false` if you want to ensure fresh data
});
