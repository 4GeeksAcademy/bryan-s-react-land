import React from "react";

function Card() {
    const cardData = [
        {
            imgSrc: "https://via.placeholder.com/500x325",
            title: "Card title 1",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            btnText: "Find out more!"
        },
        {
            imgSrc: "https://via.placeholder.com/500x325",
            title: "Card title 2",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            btnText: "Find out more!"
        },
        {
            imgSrc: "https://via.placeholder.com/500x325",
            title: "Card title 3",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            btnText: "Find out more!"
        },
        {
            imgSrc: "https://via.placeholder.com/500x325",
            title: "Card title 4",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            btnText: "Find out more!"
        },
    ];

    return (
        <div className="container card-main">
        <div className="row justify-content-center d-flex flex-wrap">
            {cardData.map((card, index) => (
                <div key={index} className="col-lg-3 col-md-6 mx-auto p2">
                    <div className="card h-100 mr-2">
                        <img src={card.imgSrc} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.text}</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">{card.btnText}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Card;
