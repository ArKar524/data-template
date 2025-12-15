import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch
} from "@mijn-ui/react";
import { Monitor, Shield } from "lucide-react";

function SessionItem({
  device,
  location,
  active,
  lastActive,
}: {
  device: string;
  location: string;
  active?: boolean;
  lastActive: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mt-0.5">
          <Monitor className="w-5 h-5 text-gray-500" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{device}</span>
            {active && <Badge variant="filled" className="text-xs">Active</Badge>}
          </div>
          <p className="text-xs text-gray-500">{location}</p>
          <p className="text-xs text-gray-500">{lastActive}</p>
        </div>
      </div>

      {!active && (
        <Button variant="ghost" size="sm">
          Revoke
        </Button>
      )}
    </div>
  );
}

export default function SecuritySettings() {
  return (
    <div className="max-w-3xl space-y-6">

      {/* Password & Authentication */}
      <Card>
        <CardHeader>
          <h3>Password & Authentication</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" className="mt-1.5" />
          </div>

          <div>
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" className="mt-1.5" />
          </div>

          <div>
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" className="mt-1.5" />
          </div>

          <Button variant="outlined" size="sm">
            Change Password
          </Button>
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card>
        <CardHeader>
          <h3>Two-Factor Authentication</h3>
        </CardHeader>
        <CardContent>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Label>2FA Status</Label>
                <Badge variant="outlined">Disabled</Badge>
              </div>
              <p className="text-sm text-gray-500">
                Add an extra layer of security to your account
              </p>
            </div>

            <Button size="sm">
              <Shield className="w-4 h-4 mr-2" />
              Enable 2FA
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Active Sessions */}
      <Card>
        <CardHeader>
          <h3>Active Sessions</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <SessionItem
              device="Chrome on macOS"
              location="San Francisco, CA"
              active
              lastActive="Current session"
            />
            <Separator />

            <SessionItem
              device="Safari on iOS"
              location="San Francisco, CA"
              lastActive="2 hours ago"
            />
            <Separator />

            <SessionItem
              device="Firefox on Windows"
              location="New York, NY"
              lastActive="1 day ago"
            />
          </div>

          <Button variant="outlined" size="sm" className="mt-4">
            Revoke All Other Sessions
          </Button>
        </CardContent>
      </Card>

      {/* Security Preferences */}
      <Card>
        <CardHeader>
          <h3>Security Preferences</h3>
        </CardHeader>
        <CardContent className="space-y-4">

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Require password for sensitive operations</Label>
              <p className="text-xs text-gray-500 mt-1">
                Re-authenticate before critical actions
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Login Notifications</Label>
              <p className="text-xs text-gray-500 mt-1">
                Email alerts for new logins from unrecognized devices
              </p>
            </div>
            <Switch defaultChecked />
          </div>

        </CardContent>
      </Card>

    </div>
  );
}
