import { withChildren } from '@iogart-react-ui/types';

export interface useCollapsibleProps extends withChildren {
  collapsed?: boolean;
  duration?: number;
  triggerProps?: {
    className?: string;
  };
  contentProps?: {
    className?: string;
  };
}

export interface useCollapsibleReturn extends useCollapsibleProps {
  trigger: {
    onClick: (e: Event) => void;
    className: string;
    'aria-expanded': string;
  };
  content: {
    className: string;
  };
}
