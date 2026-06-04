import type { Service } from "../../types/site.types";
import { SERVICE_CARD_CLASSES } from "../styles/serviceCard.styles";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className={SERVICE_CARD_CLASSES.card}>
      <div className={SERVICE_CARD_CLASSES.iconBox}>
        <Icon className={SERVICE_CARD_CLASSES.icon} />
      </div>

      <h3 className={SERVICE_CARD_CLASSES.title}>{service.title}</h3>

      {service.secondaryTitle ? (
        <p className={SERVICE_CARD_CLASSES.secondaryTitle}>
          {service.secondaryTitle}
        </p>
      ) : null}

      <p className={SERVICE_CARD_CLASSES.description}>
        {service.description}
      </p>
    </article>
  );
}