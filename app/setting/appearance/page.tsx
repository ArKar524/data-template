"use client";

import { useTheme } from "@/provider/ThemeProvider";
import { Button, Card, CardContent, CardHeader, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Switch } from "@mijn-ui/react";


function ThemeOption({
  label,
  active,
  onClick,
  preview,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  preview: React.ReactNode;
}) {
  return (
    <button
      className={`flex flex-col gap-2 p-3 rounded-lg border-2 transition-colors ${
        active ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
        }`}
      onClick={onClick}
    >
      {preview}
      <span className="text-sm">{label}</span>
    </button>
  );
}

function ColorOption({
  color,
  label,
  active,
}: {
  color: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Card
      className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-colors ${
        active ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
      }`}
    >
      <CardContent>
        <div className="w-10 h-10 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
        <span className="text-xs">{label}</span>
      </CardContent>
    </Card>
  );
}


export default function AppearanceSettings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-3xl space-y-6">
      <Card className="p-6">
        <CardHeader>
        <h3 className="mb-4">Theme</h3>
          </CardHeader>
        <CardContent>
           <div className="grid grid-cols-3 gap-4 mb-4">
          <ThemeOption
            label="Light"
            active={theme === 'light'}
            onClick={() => setTheme('light')}
            preview={
              <div className="w-full h-20 bg-white border border-border rounded flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-200 rounded" />
              </div>
            }
          />
          <ThemeOption
            label="Dark"
            active={theme === 'dark'}
            onClick={() => setTheme('dark')}
            preview={
              <div className="w-full h-20 bg-gray-900 border border-gray-700 rounded flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-700 rounded" />
              </div>
            }
          />
          <ThemeOption
            label="System"
            active={theme === 'system'}
            onClick={() => setTheme('system')}
            preview={
              <div className="w-full h-20 border border-border rounded flex">
                <div className="flex-1 bg-white flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-200 rounded" />
                </div>
                <div className="flex-1 bg-gray-900 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-700 rounded" />
                </div>
              </div>
            }
          />
        </div>
       </CardContent>
      </Card>

      <Card className="p-6">
        <CardHeader>
        <h3 className="mb-4">Color Scheme</h3>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-4 gap-3">
          <ColorOption color="#6366f1" label="Indigo" active />
          <ColorOption color="#3b82f6" label="Blue" />
          <ColorOption color="#8b5cf6" label="Purple" />
          <ColorOption color="#ec4899" label="Pink" />
          <ColorOption color="#10b981" label="Green" />
          <ColorOption color="#f59e0b" label="Amber" />
          <ColorOption color="#ef4444" label="Red" />
          <ColorOption color="#06b6d4" label="Cyan" />
        </div>
        </CardContent>
        
      </Card>

      <Card className="p-6">
        <CardHeader>
        <h3 className="mb-4">Display Settings</h3> 
       </CardHeader>
        <CardContent>
           <div className="space-y-4">
          <div>
            <Label htmlFor="density">UI Density</Label>
            <Select defaultValue="comfortable">
              <SelectTrigger id="density" className="mt-1.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compact">Compact</SelectItem>
                <SelectItem value="comfortable">Comfortable</SelectItem>
                <SelectItem value="spacious">Spacious</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="font-size">Font Size</Label>
            <Select defaultValue="medium">
              <SelectTrigger id="font-size" className="mt-1.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
       </CardContent>
      </Card>

      <Card className="p-6">
        <CardHeader>
        <h3 className="mb-4">Canvas Settings</h3> 
       </CardHeader>
        <CardContent>
          <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Show Grid</Label>
              <p className="text-xs text-gray-500 mt-1">Display grid lines on canvas</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Snap to Grid</Label>
              <p className="text-xs text-gray-500 mt-1">
                Automatically align elements to grid
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Show Rulers</Label>
              <p className="text-xs text-gray-500 mt-1">Display rulers around canvas</p>
            </div>
            <Switch />
          </div>
        </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="subtle">Reset to Defaults</Button>
        <Button variant="filled">Save Changes</Button>
      </div>
    </div>
  );
}
