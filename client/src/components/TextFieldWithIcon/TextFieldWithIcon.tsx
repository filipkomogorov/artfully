interface TextField {
  placeholder?: string;
  name: string;
  type?: string;
  className?: string;
}

const TextFieldWithIcon: React.FC<TextField> = ({ ...props }) => {
  return (
    <div className={`${props.className} bg-white rounded-xl border border-1 w-96 h-14 flex flex-row items-center`}>
      <div className="px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input {...props} className='border-0 focus:outline-none w-full pr-10' />
    </div>
  );
};

export default TextFieldWithIcon;
