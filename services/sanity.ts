// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// export const client = createClient({
//   projectId: "9f1c8qyn",
//   dataset: "production",
//   useCdn: true, // set to `false` to bypass the edge cache
//   apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
//   // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
// });

// const builder = imageUrlBuilder(client);

// export function urlFor(source: SanityImageSource) {
//   return builder.image(source);
// }
// export async function getFeaturedRows() {
//   const featuredRows = await client.fetch('*[_type == "featured"]');
//   return featuredRows;
// }
// export async function getCategories() {
//   const categories = await client.fetch('*[_type == "category"]');
//   return categories;
// }
// export async function getDishes() {
//   const dishes = await client.fetch('*[_type == "dish"]');
//   return dishes;
// }
// export async function getRestaurants() {
//   const restaurants = await client.fetch('*[_type == "restaurant"]');
//   return restaurants;
// }
// export async function getFullFeaturedRows() {
//   const fullFeaturedRows = await client.fetch(
//     `*[_type == "featured"] {
//         ...,
//         restaurants[]->{
//           ...,
//           dishes[]->
//         }
//       }`
//   );
//   return fullFeaturedRows;
// }
// export async function getFullRestaurants() {
//   const fullRestaurants = await client.fetch(
//     `*[_type == "restaurant"] {
//         ...,
//         dishes[]->,
//         type->
//       }`
//   );

//   return fullRestaurants;
// }
// export async function getOneFeaturedRow(id: string) {
//   const fullRestaurant = await client.fetch(
//     `*[_type == "featured" && _id == $id] {
//       ...,
//       restaurants[]->{
//         ...,
//         dishes[]->,
//         type-> {
//           name
//         }
//       },
//     }[0]`,
//     { id }
//   );
//   return fullRestaurant;
// }
