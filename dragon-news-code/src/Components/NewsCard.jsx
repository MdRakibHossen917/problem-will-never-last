import { FaRegEye, FaStar } from "react-icons/fa";
import { BsShareFill, BsBookmark } from "react-icons/bs";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const { title, author, rating, total_view, image_url, details } = news;

  return (
    <div className="card bg-base-100 shadow-md  rounded-xl p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-xl">
          <BsBookmark className="cursor-pointer" />
          <BsShareFill className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold mb-2">{title}</h1>

      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-56 object-cover rounded-md mb-3"
      />

      {/* Details */}
      <p className="text-sm text-gray-700">
        {details.length > 250 ? `${details.slice(0, 250)}...` : details}
        <span className="text-blue-600 font-medium cursor-pointer">
           
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-black ml-2">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
