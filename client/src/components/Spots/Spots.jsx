import '../Global/Style.css';
import React from "react"

function Spots() {

    const spots = [
        { id: 1, title: "Modeval med känsla", image: "/images/Products/spot-img1.jpg" },
        { id: 2, title: "Vår kollektion förenar komfort och elegans", image: "/images/Products/spot-img2.jpg" },
        { id: 3, title: "Sofistikerad och självsäker design", image: "/images/Products/spot-img3.jpg" },
      ];

    return (
        <section className="spots">
            {spots.map((spot) => (
                <div className="spots-item" key={spot.id}>
                    <a href="#" className="spots-link">
                        <h2>{spot.title}</h2>
                        <img src={spot.image} alt={`spot${spot.id}`} />
                    </a>

                </div>
            ))}

        </section>
    );
}

export default Spots;