// server.js
import express from "express"
const http = require("http");
const socketIo = require("socket.io");
const { client } = require("./sanity/lib/client"); // Import Sanity client

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const query = `*[_type == "products"]{
  _id,
  name,
  slug,
  price,
  description,
  images[]{
    asset->{
      _id,
      url
    }
  },
  reviews[]->{
    _id,
    reviewerName,
    rating,
    comment
  },
  ratings[],
  quantity,
  category,
  discountPercent,
  new,
  colors[],
  sizes[],
  comments[],
  tags[]
}`;

let products = [];

// Function to fetch products from Sanity and emit to clients
const fetchProductsAndNotify = async () => {
  try {
    products = await client.fetch(query);
    io.emit("products-update", products); // Emit update event to all connected clients
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Polling every 5 seconds to check for updates
setInterval(fetchProductsAndNotify, 5000);

// Serve static files
app.use(express.static("public"));

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("A user connected");

  // Emit the current list of products to the newly connected client
  socket.emit("products-update", products);

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start the server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
