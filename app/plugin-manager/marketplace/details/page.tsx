'use client';

import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Star,
  Download,
  Shield,
  AlertCircle,
  Check,
  X,
  ExternalLink,
  Puzzle,
  Share2,
} from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  Input,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@mijn-ui/react';
import { useRouter } from 'next/navigation';

type Plugin = {
  id?: number;
  name?: string;
  author?: string;
  version?: string;
  description?: string;
  category?: string;
  rating?: number;
  downloads?: string;
  price?: string;
  verified?: boolean;
  color?: string;
};

export default function PluginDetailsScreen() {
  const router = useRouter();
  const [plugin, setPlugin] = useState<Plugin | null>(null);
  const [loading, setLoading] = useState(true);

  // Read plugin from localStorage on client
  useEffect(() => {
    try {
      const raw = localStorage.getItem('selectedPlugin');
      if (!raw) {
        setPlugin(null);
        setLoading(false);
        return;
      }
      const parsed = JSON.parse(raw);
      setPlugin(parsed);
    } catch (err) {
      console.error('Failed to parse selectedPlugin from localStorage', err);
      setPlugin(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // If plugin is missing, show friendly fallback with ability to go back
  if (!loading && !plugin) {
    return (
      <div className="h-screen flex items-center justify-center bg-background p-6">
        <div className="max-w-xl w-full text-center">
          <Card className="p-8">
            <div className="text-xl font-semibold mb-3">No plugin selected</div>
            <p className="text-sm text-gray-500 mb-6">
              It looks like you navigated here without selecting a plugin first.
            </p>
            <div className="flex justify-center gap-3">
              <Button
                variant="outlined"
                onClick={() => {
                  router.back();
                }}
              >
                Go Back
              </Button>
              <Button
                onClick={() => {
                  router.push('/plugin-manager/marketplace');
                }}
              >
                Open Marketplace
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Local UI handlers
  const handleInstall = () => {
    // placeholder install logic
    console.log('Install requested for', plugin);
    // Simulate install feedback
    alert(`${plugin?.name ?? 'Plugin'} installation started.`);
  };

  const handleShare = () => {
    if (!plugin) return;
    // simplistic share: copy url with id (or fallback)
    const url = `${window.location.origin}/plugin-manager/marketplace/details?id=${plugin.id ?? ''}`;
    navigator.clipboard
      .writeText(url)
      .then(() => alert('Link copied to clipboard'))
      .catch(() => alert('Could not copy link'));
  };

  const handleBack = () => {
    // cleanup selectedPlugin and navigate back
    try {
      localStorage.removeItem('selectedPlugin');
    } catch (e) {
      /* ignore */
    }
    router.back();
  };

  // Derived values (safely)
  const longDescription = plugin
    ? `${plugin.description ?? ''}\n\nFeatures include:\n• Easy integration\n• Interactive charts\n• Customizable styling\n• Export options\n• Responsive design`
    : '';

  const permissions = [
    { name: 'Canvas Access', description: 'Render content on the canvas', required: true },
    { name: 'Data Read', description: 'Read data from variables and datasets', required: true },
    { name: 'API Access', description: 'Fetch data from external sources', required: false },
    { name: 'Storage', description: 'Save plugin configurations', required: false },
  ];

  const screenshots = plugin ? [plugin.color ?? '#4F46E5', '#4F46E5', '#F59E0B'] : [];

  const changelog = [
    { version: plugin?.version ?? '1.0.0', date: '2024-11-20', changes: ['Bug fixes', 'Performance improvements'] },
    { version: '2.0.0', date: '2024-11-01', changes: ['Major update', 'Added new features', 'Redesigned UI'] },
    { version: '1.9.5', date: '2024-10-15', changes: ['Minor bug fixes', 'Updated dependencies'] },
  ];

  // Render loading placeholder
  if (loading || !plugin) {
    return (
      <div className="h-screen flex items-center justify-center bg-background p-6">
        <div className="text-center text-gray-500">Loading plugin…</div>
      </div>
    );
  }

  // Main UI
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <Button variant="ghost" size="sm" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>

            <div className="ml-1">
              <h1 className="text-lg sm:text-2xl font-semibold">{plugin.name}</h1>
              <p className="text-xs sm:text-sm text-gray-500">View information and install plugins</p>
            </div>
          </div>

          {/* Action buttons (right side on large screens) */}
          {/* <div className="ml-auto flex gap-2">
            <Button variant="outlined" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button size="sm" onClick={handleInstall}>
              <Download className="w-4 h-4 mr-2" />
              Install Plugin
            </Button>
          </div> */}
        </div>

        {/* Plugin Header (stacked responsively) */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Icon */}
          <div className="col-span-12 lg:col-span-2 flex justify-start lg:justify-center">
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${plugin.color ?? '#000'}20` }}
            >
              <Puzzle className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: plugin.color }} />
            </div>
          </div>

          {/* Main info */}
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-bold">{plugin.name}</h2>
              {plugin.verified && <Shield className="w-5 h-5 text-primary" />}
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              by {plugin.author} · v{plugin.version}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span className="font-medium">{plugin.rating}</span>
                <span className="text-xs text-gray-500">({'245 reviews'})</span>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Download className="w-4 h-4" />
                <span>{plugin.downloads} downloads</span>
              </div>

              <Badge variant="outlined" className="ml-1">
                {plugin.category}
              </Badge>
            </div>
          </div>

          {/* Price & actions (right) */}
          <div className="col-span-12 lg:col-span-3 flex flex-col items-start lg:items-end gap-3">
            <Badge variant="outlined" className="text-lg px-4 py-2">
              {plugin.price}
            </Badge>

            <div className="flex w-full lg:w-auto gap-2">
              <Button variant="outlined" className="flex-1 lg:flex-none" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant='filled' color='brand' className="flex-1 lg:flex-none" onClick={handleInstall}>
                <Download className="w-4 h-4 mr-2" />
                Install
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-4 sm:p-8">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6 flex">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              <TabsTrigger value="changelog">Changelog</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value="overview" className="space-y-8">
              {/* Screenshots */}
              <div>
                <h3 className="text-lg mb-4">Preview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {screenshots.map((color, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-xl border-2 border-border flex items-center justify-center hover:border-primary transition-colors cursor-pointer"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Puzzle className="w-16 h-16 opacity-30" style={{ color }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg mb-4">Description</h3>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{longDescription}</p>
              </div>

              {/* Plugin info */}
              <div>
                <h3 className="text-lg mb-4">Plugin Information</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-xs text-gray-500 mb-2">Version</div>
                    <div className="text-lg font-medium">{plugin.version}</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-xs text-gray-500 mb-2">Category</div>
                    <div className="text-lg font-medium">{plugin.category}</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-xs text-gray-500 mb-2">Last Updated</div>
                    <div className="text-lg font-medium">Nov 20, 2024</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-xs text-gray-500 mb-2">Size</div>
                    <div className="text-lg font-medium">2.4 MB</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Permissions */}
            <TabsContent value="permissions" className="space-y-6">
              <div className="bg-warning/10 border-2 border-warning/20 rounded-xl p-4">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Review Permissions Carefully</h4>
                    <p className="text-sm text-gray-500">Only grant permissions you're comfortable with.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {permissions.map((permission, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 border-2 border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    {permission.required ? (
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    ) : (
                      <X className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" />
                    )}

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-medium">{permission.name}</h4>
                        {permission.required && <Badge variant="outlined">Required</Badge>}
                      </div>
                      <p className="text-sm text-gray-500">{permission.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Changelog */}
            <TabsContent value="changelog" className="space-y-6">
              {changelog.map((entry, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outlined" className="text-sm">v{entry.version}</Badge>
                    <span className="text-sm text-gray-500">{entry.date}</span>
                  </div>
                  <ul className="space-y-1">
                    {entry.changes.map((c, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </TabsContent>

            {/* Reviews */}
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-muted rounded-xl">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-semibold">{plugin.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(plugin.rating ?? 0) ? 'fill-warning text-warning' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Based on 245 reviews</p>
                </div>

                <div className="mt-4 md:mt-0">
                  <Button>Write a Review</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                {[
                  { name: 'Sarah Johnson', rating: 5, time: '2 days ago', review: 'Excellent plugin!' },
                  { name: 'Mike Chen', rating: 5, time: '1 week ago', review: 'Transformative for reports.' },
                  { name: 'Emma Davis', rating: 4, time: '2 weeks ago', review: 'Very good plugin.' },
                ].map((r, i) => (
                  <Card key={i} className="p-4 border-2 border-border rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium">{r.name}</div>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className={`w-4 h-4 ${j < r.rating ? 'fill-warning text-warning' : 'text-muted'}`} />
                            ))}
                          </div>
                          <span>{r.time}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{r.review}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
