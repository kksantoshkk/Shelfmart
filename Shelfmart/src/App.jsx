import React from "react";

function App() {

  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: "₹499",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: "₹399",
      image:
        "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
    {
      id: 3,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: "₹599",
      image:
        "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
    },
    {
      id: 4,
      title: "Ikigai",
      author: "Hector Garcia",
      price: "₹350",
      image:
        "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>

      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#1e3a8a",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
          ShelfMart
        </h1>

        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Categories
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Sell Books
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Cart
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Login
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Discover Your Next Favorite Book
        </h2>

        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Buy and Sell New & Used Books Easily
        </p>

        <button
          style={{
            backgroundColor: "#f97316",
            color: "white",
            padding: "14px 30px",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Explore Books
        </button>
      </section>

      {/* Search */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "40px 0",
        }}
      >
        <input
          type="text"
          placeholder="Search books..."
          style={{
            width: "50%",
            padding: "15px",
            borderRadius: "10px 0 0 10px",
            border: "1px solid gray",
            outline: "none",
          }}
        />

        <button
          style={{
            backgroundColor: "#1e3a8a",
            color: "white",
            padding: "15px 25px",
            border: "none",
            borderRadius: "0 10px 10px 0",
          }}
        >
          Search
        </button>
      </div>

      {/* Categories */}
      <section style={{ padding: "0 40px", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Categories
        </h2>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {["Fiction", "Programming", "Self Help", "Biography", "Comics"].map(
            (category, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <h3>{category}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Featured Books */}
      <section style={{ padding: "0 40px 60px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Featured Books
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                  {book.title}
                </h3>

                <p style={{ color: "gray", marginBottom: "10px" }}>
                  {book.author}
                </p>

                <p
                  style={{
                    color: "#1e3a8a",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  {book.price}
                </p>

                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#f97316",
                    color: "white",
                    padding: "12px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1e3a8a",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p>© 2026 ShelfMart. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;