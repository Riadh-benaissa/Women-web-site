import React from 'react';

function Final() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "80px", background: "#1B4D3E", padding: "110px 0" }}>
        <div style={{ marginLeft: "-125px" }}>
          <h1 style={{ color: "rgba(153, 149, 149, 1)", fontSize: "22px" }}>EARTHLY ELEGANCE</h1>
          <div style={{ marginTop: "20px" }}>
            <p style={{ margin: "8px 0" }}>Sustainable, ethically crafted jewelry that celebrates natural beauty</p>
            <p style={{ margin: "8px 0" }}>and minimalist design.</p>
          </div>
        </div>

        <div>
          <h1 style={{ color: "rgba(61, 42, 42, 1)", fontSize: "22px" }}>SHOP</h1>
          <div style={{ cursor: "pointer", color: "rgba(153, 149, 149, 1)" }}>
            <p style={{ margin: "12px 0" }}>All Jewelry</p>
            <p style={{ margin: "12px 0" }}>New Arrivals</p>
            <p style={{ margin: "12px 0" }}>Best Sellers</p>
            <p style={{ margin: "12px 0" }}>Sale</p>
          </div>
        </div>

        <div>
          <h1 style={{ color: "rgba(61, 42, 42, 1)", fontSize: "22px" }}>ABOUT</h1>
          <div style={{ cursor: "pointer", color: "rgba(153, 149, 149, 1)" }}>
            <p style={{ margin: "12px 0" }}>Our Story</p>
            <p style={{ margin: "12px 0" }}>Sustainability</p>
            <p style={{ margin: "12px 0" }}>Materials</p>
            <p style={{ margin: "12px 0" }}>Journal</p>
          </div>
        </div>

        <div>
          <h1 style={{ color: "rgba(61, 42, 42, 1)", fontSize: "22px" }}>HELP</h1>
          <div style={{ cursor: "pointer", color: "rgba(153, 149, 149, 1)" }}>
            <p style={{ margin: "12px 0" }}>Contact Us</p>
            <p style={{ margin: "12px 0" }}>FAQs</p>
            <p style={{ margin: "12px 0" }}>Shipping</p>
            <p style={{ margin: "12px 0" }}>Returns</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Final;
