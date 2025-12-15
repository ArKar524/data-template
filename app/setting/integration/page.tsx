import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
  Label,
  Separator,
  Switch
} from "@mijn-ui/react";

export default function IntegrationsSettings() {
  return (
    <div className="max-w-3xl space-y-6">

      {/* Connected Integrations */}
      <Card>
        <CardHeader>
          <h3>Connected Integrations</h3>
        </CardHeader>

        <CardContent className="space-y-3">
          <IntegrationItem
            name="Slack"
            description="Send notifications to Slack channels"
            connected
            icon="💬"
          />
          <Separator />

          <IntegrationItem
            name="Google Drive"
            description="Sync templates with Google Drive"
            connected
            icon="📁"
          />
          <Separator />

          <IntegrationItem
            name="Zapier"
            description="Automate workflows with 3,000+ apps"
            icon="⚡"
          />
        </CardContent>
      </Card>

      {/* API Access */}
      <Card>
        <CardHeader>
          <h3>API Access</h3>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="api-key">API Key</Label>

            <div className="flex gap-2 mt-1.5">
              <Input
                id="api-key"
                type="password"
                defaultValue="sk_live_********************************"
                className="flex-1 font-mono text-sm"
                readOnly
              />

              <Button variant="outlined" size="sm">
                Copy
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-1.5">
              Keep your API key secure and never share it publicly
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Regenerate Key
            </Button>

            <Button variant="outlined" size="sm">
              View Documentation
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Webhooks */}
      <Card>
        <CardHeader>
          <h3>Webhooks</h3>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            <WebhookItem
              url="https://api.acme.com/webhooks/templates"
              events={["template.created", "template.updated"]}
              status="active"
            />
          </div>

          <Button variant="outlined" size="sm" className="mt-4">
            Add Webhook
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   ITEMS                                    */
/* -------------------------------------------------------------------------- */

function IntegrationItem({
  name,
  description,
  connected,
  icon,
}: {
  name: string;
  description: string;
  connected?: boolean;
  icon: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-xl">
          {icon}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{name}</span>
            {connected && (
              <Badge variant="filled" className="text-xs">
                Connected
              </Badge>
            )}
          </div>

          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>

      {connected ? (
        <Button variant="outlined" size="sm">Configure</Button>
      ) : (
        <Button size="sm">Connect</Button>
      )}
    </div>
  );
}

function WebhookItem({
  url,
  events,
  status,
}: {
  url: string;
  events: string[];
  status: "active" | "inactive";
}) {
  return (
    <div className="flex items-start justify-between p-4 border border-border rounded-lg">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Badge
            variant={status === "active" ? "filled" : "outlined"}
            className="text-xs"
          >
            {status}
          </Badge>
        </div>

        <p className="font-mono text-xs text-gray-500 mb-2">{url}</p>

        <div className="flex gap-2">
          {events.map((event) => (
            <Badge key={event} variant="outlined" className="text-xs">
              {event}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="ghost" size="sm">Edit</Button>
        <Button variant="ghost" size="sm">Delete</Button>
      </div>
    </div>
  );
}
