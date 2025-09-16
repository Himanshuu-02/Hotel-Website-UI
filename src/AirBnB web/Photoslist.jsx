import React from 'react'
import PhotoContainer from './PhotoContainer'

const listings = [
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/4942aea3-bcf5-45f2-8b74-e6ead10453e0.jpeg?im_w=960",
    title: "Flat in Sahibzada Ajit Singh Nagar",
    price: "$4,565 for 2 nights",
    rating: 4.89,
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/6442ec1a-6678-4808-abf1-f2acc99350fa.jpeg?im_w=720",
    title: "Luxury Apartment in Chandigarh",
    price: "$7,200 for 3 nights",
    rating: 4.92,
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1283051799102141261/original/44b72e59-9c09-490f-a193-96d1af1c2b7f.jpeg?im_w=960",
    title: "Cozy Villa near Mohali",
    price: "$6,150 for 2 nights",
    rating: 4.95,
  },
  {
    id: 4,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1007964257609982196/original/010666fa-3ced-4b2b-bc93-62a83c078a12.jpeg?im_w=960",
    title: "Modern Studio in Panchkula",
    price: "$3,999 for 1 night",
    rating: 4.75,
  },
  {
    id: 5,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1204215111494236072/original/fd0924ca-ccdc-48ec-931f-641967a1202c.jpeg?im_w=960",
    title: "Countryside Home",
    price: "$5,100 for 2 nights",
    rating: 4.82,
  },
  {
    id: 6,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/4942aea3-bcf5-45f2-8b74-e6ead10453e0.jpeg?im_w=960",
    title: "Flat in Sahibzada Ajit Singh Nagar",
    price: "$4,565 for 2 nights",
    rating: 4.89,
  },
  {
    id: 7,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/6442ec1a-6678-4808-abf1-f2acc99350fa.jpeg?im_w=720",
    title: "Luxury Apartment in Chandigarh",
    price: "$7,200 for 3 nights",
    rating: 4.92,
  },
  {
    id: 8,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1283051799102141261/original/44b72e59-9c09-490f-a193-96d1af1c2b7f.jpeg?im_w=960",
    title: "Cozy Villa near Mohali",
    price: "$6,150 for 2 nights",
    rating: 4.95,
  },
  {
    id: 9,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1007964257609982196/original/010666fa-3ced-4b2b-bc93-62a83c078a12.jpeg?im_w=960",
    title: "Modern Studio in Panchkula",
    price: "$3,999 for 1 night",
    rating: 4.75,
  },
  {
    id: 10,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1204215111494236072/original/fd0924ca-ccdc-48ec-931f-641967a1202c.jpeg?im_w=960",
    title: "Countryside Home",
    price: "$5,100 for 2 nights",
    rating: 4.82,
  },
  {
    id: 11,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/4942aea3-bcf5-45f2-8b74-e6ead10453e0.jpeg?im_w=960",
    title: "Flat in Sahibzada Ajit Singh Nagar",
    price: "$4,565 for 2 nights",
    rating: 4.89,
  },
  {
    id: 12,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/6442ec1a-6678-4808-abf1-f2acc99350fa.jpeg?im_w=720",
    title: "Luxury Apartment in Chandigarh",
    price: "$7,200 for 3 nights",
    rating: 4.92,
  },
  {
    id: 13,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1283051799102141261/original/44b72e59-9c09-490f-a193-96d1af1c2b7f.jpeg?im_w=960",
    title: "Cozy Villa near Mohali",
    price: "$6,150 for 2 nights",
    rating: 4.95,
  },
  {
    id: 14,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1007964257609982196/original/010666fa-3ced-4b2b-bc93-62a83c078a12.jpeg?im_w=960",
    title: "Modern Studio in Panchkula",
    price: "$3,999 for 1 night",
    rating: 4.75,
  },
  {
    id: 15,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1204215111494236072/original/fd0924ca-ccdc-48ec-931f-641967a1202c.jpeg?im_w=960",
    title: "Countryside Home",
    price: "$5,100 for 2 nights",
    rating: 4.82,
  },
  {
    id: 16,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/4942aea3-bcf5-45f2-8b74-e6ead10453e0.jpeg?im_w=960",
    title: "Flat in Sahibzada Ajit Singh Nagar",
    price: "$4,565 for 2 nights",
    rating: 4.89,
  },
  {
    id: 17,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1181820222986566507/original/6442ec1a-6678-4808-abf1-f2acc99350fa.jpeg?im_w=720",
    title: "Luxury Apartment in Chandigarh",
    price: "$7,200 for 3 nights",
    rating: 4.92,
  },
  {
    id: 18,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1283051799102141261/original/44b72e59-9c09-490f-a193-96d1af1c2b7f.jpeg?im_w=960",
    title: "Cozy Villa near Mohali",
    price: "$6,150 for 2 nights",
    rating: 4.95,
  },
  {
    id: 19,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1007964257609982196/original/010666fa-3ced-4b2b-bc93-62a83c078a12.jpeg?im_w=960",
    title: "Modern Studio in Panchkula",
    price: "$3,999 for 1 night",
    rating: 4.75,
  },
  {
    id: 20,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1204215111494236072/original/fd0924ca-ccdc-48ec-931f-641967a1202c.jpeg?im_w=960",
    title: "Countryside Home",
    price: "$5,100 for 2 nights",
    rating: 4.82,
  },
];

const Photoslist = () => {
  //shuffle funtion
    function shuffleArray(array) {
    let arr = [...array]; // copy to avoid mutating original
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const chandigarhHomes=shuffleArray(listings)
  const solanHomes=shuffleArray(listings)
  const gurgoanHomes=shuffleArray(listings)
  const delhiHomes=shuffleArray(listings)
  const dehradunHomes=shuffleArray(listings)
  const shimlaHomes=shuffleArray(listings)

  return (
    <div>
        <PhotoContainer  name="Popular homes in Sahibzada Ajit Singh Nagar" listings={shimlaHomes}/>
        <PhotoContainer  name="Available in Chandigarh this weekend" listings={chandigarhHomes}/>
        <PhotoContainer  name="Stay in Solan" listings={solanHomes}/>
        <PhotoContainer  name="Available in Gurgaon District this weekend" listings={gurgoanHomes}/>
        <PhotoContainer  name="Homes in New Delhi" listings={delhiHomes}/>
        <PhotoContainer  name="Available in Dehradun this weekend" listings={dehradunHomes}/>
        <PhotoContainer  name="Places to stay in Shimla" listings={shimlaHomes}/>
    </div>
  )
}

export default Photoslist