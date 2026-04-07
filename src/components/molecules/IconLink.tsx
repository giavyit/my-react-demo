import React from 'react';
import ExternalLink from '@/components/atoms/ExternalLink';

interface IconLinkProps {
  href: string;
  iconNode: React.ReactNode;
  children: React.ReactNode;
}

const IconLink = ({ href, iconNode, children }: IconLinkProps) => {
  return (
    <ExternalLink href={href}>
      {iconNode}
      <span>{children}</span>
    </ExternalLink>
  );
};

export default IconLink;
