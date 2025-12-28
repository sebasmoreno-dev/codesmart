import React from 'react';

type Props = {
  title: string;
  description: string;
  /**
   * image can be:
   * - a filename located in public/assets (e.g. "service1.jpg")
   * - an absolute path (starting with "/")
   * - a full URL (https://...)
   */
  image?: string;
};

const resolveImageSrc = (image?: string) => {
  if (!image) return undefined;
  if (image.startsWith('http') || image.startsWith('/')) return image;
  // assume images are stored under public/assets when a bare filename is provided
  return `${process.env.PUBLIC_URL || ''}/assets/${image}`;
};

const ServiceCard: React.FC<Props> = ({ title, description, image }) => {
  const src = resolveImageSrc(image);

  return (
    <article className="card service-card">
      {src && (
        <div className="card-media">
          <img src={src} alt={title} loading="lazy" />
        </div>
      )}

      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
