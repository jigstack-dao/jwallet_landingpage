import DiscordIcon from 'components/icons/discord';
import LinkedinIcon from 'components/icons/linkedin';
import MediumIcon from 'components/icons/medium';
import TelegramIcon from 'components/icons/telegram';
import TwitterIcon from 'components/icons/twitter';
import GitbookIcon from 'components/icons/gitbook.svg';

export const SOCIAL_NETWORKS = [
  {
    icon: <MediumIcon />,
    link: process.env.REACT_APP_MEDIUM_LINK
  },
  {
    icon: <TelegramIcon />,
    link: process.env.REACT_APP_TELEGRAM_LINK
  },
  {
    icon: <TwitterIcon />,
    link: process.env.REACT_APP_TWITTER_LINK
  },
  {
    icon: <DiscordIcon />,
    link: process.env.REACT_APP_DISCORD_LINK
  },
  {
    icon: <LinkedinIcon />,
    link: process.env.REACT_APP_LINKEDIN_LINK
  },
  {
    icon: <img src={GitbookIcon} width={32} height={32} />,
    link: process.env.REACT_APP_GITBOOK_LINK
  }
];
