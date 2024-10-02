import { GoLink } from "react-icons/go";



const Card = ({ image, title, subtitle }) => {
  return (
    <div className="relative group overflow-hidden rounded-md shadow-lg h-full w-96">
      <img
        src={image}
        alt={title}
        className=" w-full  h-72 object-cover rounded-md transition-transform duration-500 group-hover:scale-105 group-hover:rounded-md"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300">
        <div className="lg:px-40 mt-14 text-[#ffffff] ">
        <div className="flex items-center justify-center w-16 h-16   rounded-full bg-[#4e6b55]">
        <GoLink/>
				</div>
      
      </div>
      </div>
      <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      
      
        <div className="text-center bg-gradient-to-r from-transparent via-[#4e6b55] w-full py-2 px-1 text-white ">
          <h3 className="text-2xl font-bold mb-2 tracking-tighter ">{title}</h3>
          <div className="flex gap-5 px-11">
          <p className="font-bold "><button className=" btn btn-outline w-36 text-white hover:bg-transparent hover:text-white">Previous Works</button></p>
          <p className="font-bold"><button className=" btn btn-outline w-32 text-white hover:bg-transparent hover:text-white">{subtitle}</button></p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
