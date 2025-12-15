import { Button, Card, CardContent, CardHeader, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Switch } from "@mijn-ui/react";

export default function GeneralSettings() {
  return (
    <div className="max-w-3xl space-y-6">
      <Card className="p-6">
         <CardHeader><h3 className="mb-4">Workspace Information</h3></CardHeader>
              <CardContent>
                  <div className="space-y-4">
                        <div>
                            <Label htmlFor="workspace-name">Workspace Name</Label>
                            <Input id="workspace-name" defaultValue="Acme Corporation" className="mt-1.5" />
                            <p className="text-xs text-muted-foreground mt-1.5">
                            This name will be visible to all members
                            </p>
                        </div>
                        <div>
                            <Label htmlFor="workspace-url">Workspace URL</Label>
                            <div className="flex gap-2 mt-1.5">
                            <Input id="workspace-url" defaultValue="acme-corp" className="flex-1" />
                            <span className="flex items-center text-sm text-muted-foreground">.template.app</span>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="workspace-description">Description</Label>
                            <Input
                            id="workspace-description"
                            defaultValue="Enterprise template management"
                            className="mt-1.5"
                            />
                        </div>
                        </div>
              </CardContent> 
      </Card>

      <Card className="p-6">
        <h3 className="mb-4">Regional Settings</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger id="language" className="mt-1.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English (US)</SelectItem>
                <SelectItem value="en-gb">English (UK)</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="utc-8">
              <SelectTrigger id="timezone" className="mt-1.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc-8">Pacific Time (PT)</SelectItem>
                <SelectItem value="utc-5">Eastern Time (ET)</SelectItem>
                <SelectItem value="utc+0">GMT</SelectItem>
                <SelectItem value="utc+1">Central European Time</SelectItem>
                <SelectItem value="utc+9">Japan Standard Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="date-format">Date Format</Label>
            <Select defaultValue="mdy">
              <SelectTrigger id="date-format" className="mt-1.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4">Default Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Auto-save</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Automatically save changes every 30 seconds
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Version History</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Keep version history for 90 days
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Collaborative Editing</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Allow multiple users to edit simultaneously
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="outlined">Reset to Defaults</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}