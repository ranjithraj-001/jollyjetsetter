export const ApiTransform = (apiData) => {
  console.log(apiData); // This will help you verify the structure of the API data

  return apiData.map((item) => ({
    id: item.id, // Assuming the API provides an `id` field
    title: item.title, // Assuming the API provides a `title` field
    location: item.location, // Assuming the API provides a `location` field
    image: item.image, // Assuming the API provides an `image` field
    duration: item.duration, // Assuming the API provides a `duration` field
  }));
};
