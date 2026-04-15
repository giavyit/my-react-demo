/**
 * UserDetailModal - Modal displaying detailed user information
 */

import type { User } from '@/services/userService';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/atoms/dialog';

interface UserDetailModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * TruncatedText - Shows text limited to 2 lines with tooltip on hover
 */
const TruncatedText = ({ label, value }: { label: string; value: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="rounded-3xl border border-border bg-muted/50 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <div className="relative">
        <p
          className="mt-2 font-medium line-clamp-2 overflow-hidden text-ellipsis cursor-help hover:opacity-80"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {value}
        </p>
        {showTooltip && (
          <div className="absolute bottom-full left-0 mb-2 w-max max-w-xs rounded-lg bg-foreground px-3 py-2 text-xs text-background shadow-lg z-50 break-words">
            {value}
          </div>
        )}
      </div>
    </div>
  );
};

const UserDetailModal = ({ user, isOpen, onClose }: UserDetailModalProps) => {
  const [showTooltipMap, setShowTooltipMap] = useState<Record<string, boolean>>({});

  const toggleTooltip = (key: string) => {
    setShowTooltipMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{user.name}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Chi tiết người dùng và thông tin liên hệ.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2 text-sm text-foreground">
          <div className="grid gap-4 sm:grid-cols-2">
            <TruncatedText label="Email" value={user.email} />
            <TruncatedText label="Phone" value={user.phone} />
          </div>

          <div className="rounded-3xl border border-border bg-muted/50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Company</p>
            <p className="mt-2 font-medium">{user.company.name}</p>
            <div className="relative">
              <p
                className="mt-1 text-sm text-muted-foreground line-clamp-2 overflow-hidden text-ellipsis cursor-help hover:opacity-80"
                onMouseEnter={() => toggleTooltip('catchPhrase')}
                onMouseLeave={() => toggleTooltip('catchPhrase')}
              >
                {user.company.catchPhrase}
              </p>
              {showTooltipMap['catchPhrase'] && (
                <div className="absolute bottom-full left-0 mb-2 w-max max-w-xs rounded-lg bg-foreground px-3 py-2 text-xs text-background shadow-lg z-50 break-words">
                  {user.company.catchPhrase}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted/50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Address</p>
            <div className="relative">
              <p
                className="mt-2 font-medium line-clamp-2 overflow-hidden text-ellipsis cursor-help hover:opacity-80"
                onMouseEnter={() => toggleTooltip('address1')}
                onMouseLeave={() => toggleTooltip('address1')}
              >
                {user.address.street}, {user.address.suite}
              </p>
              {showTooltipMap['address1'] && (
                <div className="absolute bottom-full left-0 mb-2 w-max max-w-xs rounded-lg bg-foreground px-3 py-2 text-xs text-background shadow-lg z-50 break-words">
                  {user.address.street}, {user.address.suite}
                </div>
              )}
            </div>
            <div className="relative">
              <p
                className="mt-1 text-sm text-muted-foreground line-clamp-2 overflow-hidden text-ellipsis cursor-help hover:opacity-80"
                onMouseEnter={() => toggleTooltip('address2')}
                onMouseLeave={() => toggleTooltip('address2')}
              >
                {user.address.city}, {user.address.zipcode}
              </p>
              {showTooltipMap['address2'] && (
                <div className="absolute bottom-full left-0 mb-2 w-max max-w-xs rounded-lg bg-foreground px-3 py-2 text-xs text-background shadow-lg z-50 break-words">
                  {user.address.city}, {user.address.zipcode}
                </div>
              )}
            </div>
          </div>

          <TruncatedText label="Website" value={user.website} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailModal;
