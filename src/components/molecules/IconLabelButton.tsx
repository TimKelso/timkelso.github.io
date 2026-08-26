import * as React from 'react';
import { Button, type ButtonProps } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface IconLabelButtonProps extends Omit<ButtonProps, 'children'> {
  icon: LucideIcon;
  label: string;
  iconClassName?: string;
  labelClassName?: string;
  /** When set, the control renders as a link to this external page. */
  href?: string;
}

const IconLabelButton = React.forwardRef<HTMLButtonElement, IconLabelButtonProps>(
  ({ icon: IconComponent, label, variant = 'ghost', className, iconClassName, labelClassName, href, ...props }, ref) => {
    const classNames = cn('flex h-auto flex-col items-center justify-center gap-1 p-2 [&_svg]:size-7', className);
    const content = (
      <>
        <IconComponent className={iconClassName} aria-hidden="true" />
        <span className={cn('text-xs', labelClassName)}>{label}</span>
      </>
    );

    if (href) {
      return (
        <Button asChild ref={ref} variant={variant} className={classNames} {...props}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        </Button>
      );
    }

    return (
      <Button ref={ref} variant={variant} className={classNames} {...props}>
        {content}
      </Button>
    );
  },
);
IconLabelButton.displayName = 'IconLabelButton';

export { IconLabelButton };
