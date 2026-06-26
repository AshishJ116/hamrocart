// const Logo = () => {
//   return (
//     <span className="font-bold text-3xl">
//       <span className="text-blue-600">Hamro</span>
//       <span className="text-black">Cart</span>
//     </span>
//   );
// };

// export default Logo;




interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <span className={`font-bold ${className}`}>
      <span className="text-blue-600">Hamro</span>
      <span className="text-black">Cart</span>
    </span>
  );
};

export default Logo;


// import logocopy from "../../../assets/logocopy.png";

// type LogoProps = {
//   className?: string;
// };

// const Logo = ({ className = "h-12 w-auto" }: LogoProps) => {
//   return (
//     <img
//       src={logocopy}
//       alt="HamroCart"
//       className={className}
//     />
//   );
// };

// export default Logo;