import React from 'react';

interface SectionHeaderProps {
  iconNode: React.ReactNode;
  title: string;
  description: string;
}

const SectionHeader = ({ iconNode, title, description }: SectionHeaderProps) => {
  return (
    <>
      {iconNode}
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default SectionHeader;
