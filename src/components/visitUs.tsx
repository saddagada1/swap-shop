import Link from "next/link";
import { address, phone } from "~/utils/constants";

const VisitUs: React.FC = () => {
  return (
    <>
      <h1 className="section-title">Visit Us Today</h1>
      <div className="flex flex-col gap-4 lg:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.3795249582403!2d-79.27645030172248!3d43.75033405910918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cdf49584f341%3A0xab732e22441bc889!2sSwap%20Shop!5e0!3m2!1sen!2sca!4v1701271675275!5m2!1sen!2sca"
          height="450"
          loading="lazy"
          className="w-full rounded-md border lg:w-3/4"
        />
        <div className="flex flex-col gap-4 rounded-md border bg-foreground p-4 text-background">
          <h1 className="section-title text-2xl">Swap Shop</h1>
          <p className="w-5/6 font-medium">
            Address: <br />
            {address}
          </p>
          <Link href={`tel:${phone}`} className="font-medium">
            Phone: <br />
            {phone}
          </Link>
          <p className="font-medium">
            Hours of Operation:
            <br /> Monday to Friday 11am to 7pm
            <br /> Saturday 10am to 6pm
            <br /> Sunday 12 noon to 5pm
          </p>
        </div>
      </div>
    </>
  );
};

export default VisitUs;
