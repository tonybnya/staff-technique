const FAQItem = ({ question, answer, isExpanded }) => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-10 items-start self-stretch max-md:max-w-full">
      <div className="flex shrink-0 bg-black rounded-xl h-[351px] w-[3px]" />
      <div className="flex flex-col min-w-[240px] w-[1038px] max-md:max-w-full">
        <button 
          className="text-xl font-semibold text-black max-md:max-w-full text-left w-full focus:outline-none focus:ring-2 focus:ring-black"
          aria-expanded={isExpanded}
        >
          {question}
        </button>
        {isExpanded && (
          <div className="mt-8 text-lg leading-6 text-zinc-800 max-md:max-w-full">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQItem;