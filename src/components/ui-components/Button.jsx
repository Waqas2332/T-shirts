const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 text-white bg-buttonBg lg:px-5 px-2 font-semibold text-base outline-none rounded-lg hover:text-gray-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
