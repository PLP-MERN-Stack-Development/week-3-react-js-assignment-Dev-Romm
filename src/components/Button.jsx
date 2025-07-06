const styles = {
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-gray-200 text-black',
  danger: 'bg-red-600 text-white',
};

const Button = ({ children, variant = 'primary', ...props }) => (
  <button className={`px-4 py-2 rounded ${styles[variant]}`} {...props}>
    {children}
  </button>
);

export default Button;