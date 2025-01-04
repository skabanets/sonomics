import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { routes, services } from "../constants";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((service) => service.id === id);

  useEffect(() => {
    if (!service) {
      navigate(`${routes.Services}`);
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <>
      <h1>{service.title}</h1>
    </>
  );
};

export default ServiceDetails;
