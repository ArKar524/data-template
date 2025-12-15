import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
  Label,
  Separator,
  Switch
} from "@mijn-ui/react";

export default function AdvancedSettings() {
  return (
    <div className="max-w-3xl space-y-6">

      {/* Performance */}
      <Card>
        <CardHeader>
          <h3>Performance</h3>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Hardware Acceleration</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Use GPU for rendering (requires restart)
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Cache Templates</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Cache templates locally for faster loading
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Developer Tools */}
      <Card>
        <CardHeader>
          <h3>Developer Tools</h3>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Debug Mode</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Show debug information and logs
              </p>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Experimental Features</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Enable beta features and early access
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive">
        <CardHeader>
          <h3 className="text-destructive">Danger Zone</h3>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Export All Data */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Export All Data</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Download all your templates and data
              </p>
            </div>

            <Button variant="outlined" size="sm">
              Export
            </Button>
          </div>

          <Separator />

          {/* Delete Workspace */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Delete Workspace</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Permanently delete this workspace and all data
              </p>
            </div>

            <Button variant="filledl" size="sm">
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
