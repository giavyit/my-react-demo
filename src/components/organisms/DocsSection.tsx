import IconLink from '@/components/molecules/IconLink';
import SectionHeader from '@/components/molecules/SectionHeader';
import Icon from '@/components/atoms/Icon';
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';

const DocsSection = () => {
  return (
    <div id="docs">
      <SectionHeader 
        iconNode={<Icon id="documentation-icon" />} 
        title="Documentation" 
        description="Your questions, answered" 
      />
      <ul>
        <li>
          <IconLink href="https://vite.dev/" iconNode={<img className="logo" src={viteLogo} alt="" />}>
            Explore Vite
          </IconLink>
        </li>
        <li>
          <IconLink href="https://react.dev/" iconNode={<img className="button-icon" src={reactLogo} alt="" />}>
            Learn more
          </IconLink>
        </li>
      </ul>
    </div>
  );
};

export default DocsSection;
