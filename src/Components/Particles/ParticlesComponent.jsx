import { background } from "../../assets";


const ParticlesComponent = (props) => {
  

  return (
    <video className="w-full h-full object-cover" src={background} loop autoPlay muted></video>
  );
};

export default ParticlesComponent;
