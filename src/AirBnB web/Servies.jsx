// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

// function srcset(image, width, height, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${width * cols}&h=${
//       height * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

// export default function Servies() {
//   return (
//     <ImageList
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         objectFit: "cover",
//         // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
//         transform: "translateZ(0)",
        
//       }}
//       //   rowHeight={200}
//       //   gap={1}
//       cols={3} // you can adjust how many columns you want
//       gap={8}
//     >
//       {itemData.map((item) => {
//         const cols = item.featured ? 2 : 1;
//         const rows = item.featured ? 2 : 1;

//         return (
//           <ImageListItem key={item.img} cols={cols} rows={rows}>
//             <img
//               {...srcset(item.img, 500, 400, rows, cols)}
//               alt={item.title}
//               loading="lazy"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//             <ImageListItemBar
//               sx={{
//                 background:
//                   "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
//                   "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//               }}
//               title={item.title}
//               position="top"
//               actionIcon={
//                 <IconButton
//                   sx={{ color: "white" }}
//                   aria-label={`star ${item.title}`}
//                 >
//                   <StarBorderIcon />
//                 </IconButton>
//               }
//               actionPosition="left"
//             />
//           </ImageListItem>
//         );
//       })}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//     author: "@bkristastucchio",
//     featured: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//     author: "@rollelflex_graphy726",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//     author: "@helloimnik",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     author: "@nolanissac",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     author: "@hjrc33",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//     featured: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//     author: "@tjdragotta",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//     author: "@katie_wasserman",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     author: "@silverdalex",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//     author: "@shelleypauls",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//     author: "@peterlaster",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     author: "@southside_customs",
//   },
// ];


import * as React from "react";
import { motion } from "framer-motion"; // ✨ for animation
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Services() {
  return (
    <div>
        <h1 className="font-bold text-2xl py-3 mx-5">Our Services</h1>
        <div
      style={{
        width: "100%",
        minHeight: "100vh",
       // background: "#f5f5f5",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        padding: "40px 30px",
        marginTop:"-19px"
      }}
    >
        
      <ImageList
        sx={{
          width: "100%",
        //  maxWidth: "1200px",
          gridAutoFlow: "dense",
        }}
        cols={3}
        gap={20}
      >
        {itemData.map((item, i) => (
          <motion.div
            key={item.img}
            initial={{ opacity: 0, y:30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            style={{ borderRadius: "20px" }}
          >
            <ImageListItem
              cols={item.featured ? 2 : 1}
              rows={item.featured ? 2 : 1}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={`${item.img}?auto=format&fit=crop&w=600&q=80`}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
              <ImageListItemBar
                title={item.title}
                position="bottom"
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                  borderRadius: "0 0 20px 20px",
                }}
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </motion.div>
        ))}
      </ImageList>
    </div>

    </div>
    
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato Basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea Star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
