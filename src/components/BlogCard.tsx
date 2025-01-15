const BlogCard = ({ image, title, excerpt, date }) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[489px] max-md:max-w-full">
      <div className="flex flex-col pb-12 bg-white rounded-md shadow-[0px_4px_4px_rgba(192,189,189,0.25)] max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-contain w-full aspect-[1.66] max-md:mr-0.5 max-md:max-w-full"
        />
        <div className="flex flex-col items-start pr-12 pl-7 mt-8 w-full max-md:px-5 max-md:max-w-full">
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <p className="mt-11 text-lg font-medium text-zinc-600 max-md:mt-10">
            {excerpt}
          </p>
          <div className="flex gap-10 mt-24 text-sm max-md:mt-10">
            <div className="font-medium text-zinc-500">{date}</div>
            <button className="font-bold text-neutral-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;