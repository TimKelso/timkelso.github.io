import * as React from 'react';
import { Button, type ButtonProps } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface IconLabelButtonProps extends Omit<ButtonProps, 'children'> {
  icon: LucideIcon;
  label: string;
  iconClassName?: string;
  labelClassName?: string;
}

const IconLabelButton = React.forwardRef<HTMLButtonElement, IconLabelButtonProps>(
  ({ icon: IconComponent, label, variant = 'ghost', className, iconClassName, labelClassName, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn('flex h-auto flex-col items-center justify-center gap-1 p-2 [&_svg]:size-7', className)}
        {...props}
      >
        <IconComponent className={iconClassName} aria-hidden="true" />
        <span className={cn('text-xs', labelClassName)}>{label}</span>
      </Button>
    );
  },
);
IconLabelButton.displayName = 'IconLabelButton';

export { IconLabelButton };
