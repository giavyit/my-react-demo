import IconLink from '@/components/molecules/IconLink';
import SectionHeader from '@/components/molecules/SectionHeader';
import Icon from '@/components/atoms/Icon';

const SocialSection = () => {
  return (
    <div id="social">
      <SectionHeader 
        iconNode={<Icon id="social-icon" />} 
        title="Connect with us" 
        description="Join the Vite community" 
      />
      <ul>
        <li>
          <IconLink href="https://github.com/vitejs/vite" iconNode={<Icon id="github-icon" className="button-icon" />}>
            GitHub
          </IconLink>
        </li>
        <li>
          <IconLink href="https://chat.vite.dev/" iconNode={<Icon id="discord-icon" className="button-icon" />}>
            Discord
          </IconLink>
        </li>
        <li>
          <IconLink href="https://x.com/vite_js" iconNode={<Icon id="x-icon" className="button-icon" />}>
            X.com
          </IconLink>
        </li>
        <li>
          <IconLink href="https://bsky.app/profile/vite.dev" iconNode={<Icon id="bluesky-icon" className="button-icon" />}>
            Bluesky
          </IconLink>
        </li>
      </ul>
    </div>
  );
};

export default SocialSection;
