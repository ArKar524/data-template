import { Button, Card, CardContent, CardHeader, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Switch } from "@mijn-ui/react";


export default function NotificationSettings() {
  return (
    <div className="max-w-3xl space-y-6">
    <Card className="p-6">
              <CardHeader>
        <h3 className="mb-4">Email Notifications</h3>
              </CardHeader>
              <CardContent>
                  <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Project Updates</Label>
              <p className="text-xs text-gray-500 mt-1">
                Get notified when someone updates a shared project
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Comments & Mentions</Label>
              <p className="text-xs text-gray-500 mt-1">
                Notifications when someone comments or mentions you
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Team Invitations</Label>
              <p className="text-xs text-gray-500 mt-1">
                When you're invited to a team or project
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Weekly Summary</Label>
              <p className="text-xs text-gray-500 mt-1">
                Weekly digest of activity and statistics
              </p>
            </div>
            <Switch />
          </div>
        </div>
        </CardContent>
      </Card>

      <Card className="p-6">
              <CardHeader>
        <h3 className="mb-4">In-App Notifications</h3>
                  
        </CardHeader>
              <CardContent>
                  <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Desktop Notifications</Label>
              <p className="text-xs text-gray-500 mt-1">
                Show desktop notifications for important events
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Sound Effects</Label>
              <p className="text-xs text-gray-500 mt-1">
                Play sound for notifications
              </p>
            </div>
            <Switch />
          </div>
        </div>
        </CardContent>
      </Card>

      <Card className="p-6">
        <CardHeader>
        <h3 className="mb-4">API & System Alerts</h3>
            
              </CardHeader>
              <CardContent>
                  <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>API Rate Limits</Label>
              <p className="text-xs text-gray-500 mt-1">
                Alert when approaching API rate limits
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Error Notifications</Label>
              <p className="text-xs text-gray-500 mt-1">
                Notify about API errors and failures
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Maintenance Updates</Label>
              <p className="text-xs text-gray-500 mt-1">
                Scheduled maintenance and downtime alerts
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
              </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="subtle">Disable All</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
