// src/Dummy.js

import Card from "./Card";


// Dummy data for cards
const cardsData = [
  { image: "https://i.postimg.cc/tC810NXt/road.jpg", title: "7.5 km Flexible Road’s Pavement", subtitle: "Recent Works" },
  { image: "https://i.postimg.cc/J02szbj8/D-S.jpg", title: "Jolshiri Drainage & Swerege Network", subtitle: "Recent Works" },
  { image: "https://i.postimg.cc/90M42xR1/NPB.jpg", title: "Construction of Non-Process Building (NPB)", subtitle: "Recent Works" },
  { image: "https://i.postimg.cc/9FD4NnjQ/constraction1.jpg", title: "Raw Water Flow Measurement Chamber", subtitle: "Recent Works" },
  { image: "https://i.postimg.cc/26TqPp6V/UN.jpg", title: "UN Vehicle Repair Shed", subtitle: "Recent Works" },
  { image: "https://i.postimg.cc/gjCG74vx/IMG20200408164436.jpg", title: "Bhasan Char Ashrayan-3, Storm Drain project at Bhasanchar, Noakhali", subtitle: "Recent Works" },
];

const Dummy = () => {
  return (
    <div className="bg-gray-100 py-10 ">
      <div className="text-center justify-center mb-20 text-black text-5xl font-bold">
        <h1>
          LIST OF PROJECTS
        </h1>
      </div>
      <div className=" container mx-auto max-w-[1200px]  grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} subtitle={card.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default Dummy;
