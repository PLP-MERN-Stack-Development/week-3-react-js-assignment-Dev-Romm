const Card = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
    {title && <h3 className="font-bold text-lg mb-2">{title}</h3>}
    {children}
  </div>
);

export default Card;