'use client';

import React, { useState } from 'react';
import {
  Button,
  Card,
  Input,
  Tabs,
  TabsList,
  TabsTrigger,
  Badge,
} from '@mijn-ui/react';
import {
  ArrowLeft,
  Search,
  TrendingUp,
  Puzzle,
  Shield,
  Star,
  Download,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PluginMarketplaceScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  // -----------------------------
  // Plugin Data
  // -----------------------------
  const plugins = [
    {
      id: 1,
      name: 'Signature Pad',
      author: 'Acme Plugins',
      description: 'Add electronic signature functionality to your templates',
      category: 'Forms',
      version: '1.2.0',
      rating: 4.8,
      downloads: '12.5K',
      price: 'Free',
      verified: true,
      color: '#4F46E5',
    },
    {
      id: 2,
      name: 'Advanced Charts Pro',
      author: 'Chart Solutions',
      description: 'Create stunning data visualizations with 20+ chart types',
      category: 'Data Visualization',
      version: '2.0.1',
      rating: 4.9,
      downloads: '8.2K',
      price: '$29',
      verified: true,
      color: '#10B981',
    },
    {
      id: 3,
      name: 'QR Code Generator',
      author: 'Code Utils',
      description: 'Generate QR codes dynamically from your data',
      category: 'Utilities',
      version: '1.5.3',
      rating: 4.7,
      downloads: '15.1K',
      price: 'Free',
      verified: true,
      color: '#8B5CF6',
    },
    {
      id: 4,
      name: 'Map Widget',
      author: 'GeoTools',
      description: 'Embed interactive maps with custom markers and styling',
      category: 'Maps',
      version: '0.9.0',
      rating: 4.5,
      downloads: '5.3K',
      price: '$19',
      verified: false,
      color: '#3B82F6',
    },
    {
      id: 5,
      name: 'Barcode Scanner',
      author: 'Scan Tech',
      description: 'Generate and validate multiple barcode formats',
      category: 'Utilities',
      version: '1.0.5',
      rating: 4.6,
      downloads: '9.7K',
      price: 'Free',
      verified: true,
      color: '#F59E0B',
    },
    {
      id: 6,
      name: 'PDF Export Plus',
      author: 'Export Solutions',
      description: 'Enhanced PDF export with advanced formatting options',
      category: 'Export',
      version: '3.1.0',
      rating: 4.9,
      downloads: '21.4K',
      price: '$49',
      verified: true,
      color: '#EF4444',
    },
    {
      id: 7,
      name: 'Data Table Advanced',
      author: 'Table Pro',
      description: 'Sorting, filtering, pagination — advanced table features',
      category: 'Data Display',
      version: '2.3.1',
      rating: 4.8,
      downloads: '11.2K',
      price: '$39',
      verified: true,
      color: '#06B6D4',
    },
    {
      id: 8,
      name: 'Image Optimizer',
      author: 'Media Tools',
      description: 'Automatically optimize and compress images',
      category: 'Media',
      version: '1.4.2',
      rating: 4.6,
      downloads: '6.8K',
      price: 'Free',
      verified: false,
      color: '#EC4899',
    },
  ];

  const categories = ['All', 'Data Visualization', 'Forms', 'Utilities', 'Export', 'Maps', 'Media'];

  // -----------------------------
  // Search Filter
  // -----------------------------
  const filteredPlugins = plugins.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // -----------------------------
  // Navigate to Details
  // -----------------------------
  const onPluginClick = (plugin: any) => {
    localStorage.setItem('selectedPlugin', JSON.stringify(plugin));
    router.push('/plugin-manager/marketplace/details');
  };

  // -----------------------------
  // Plugin Card Component (INLINE)
  // -----------------------------
  const PluginCard = ({ plugin }: any) => (
    <Card
      className="p-5 hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
      onClick={() => onPluginClick(plugin)}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${plugin.color}20` }}
        >
          <Puzzle className="w-6 h-6" style={{ color: plugin.color }} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <h4 className="text-sm font-semibold truncate">{plugin.name}</h4>
            {plugin.verified && <Shield className="w-3 h-3 text-primary" />}
          </div>
          <p className="text-xs text-gray-500">{plugin.author}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 mb-3 line-clamp-2 h-8">{plugin.description}</p>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs mt-auto">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-warning text-warning" />
          {plugin.rating}
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <Download className="w-3 h-3" />
          {plugin.downloads}
        </div>

        <Badge variant="outlined">{plugin.price}</Badge>
      </div>
    </Card>
  );

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border px-6 py-5">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/plugin-manager">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>

          <div className="flex-1">
            <h1 className="text-xl font-semibold">Plugin Marketplace</h1>
            <p className="text-sm text-gray-500">Extend your template editor</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              placeholder="Search plugins..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              startIcon={<Search />}
            />
          </div>

          <Button variant="outlined">
            <TrendingUp className="w-4 h-4 mr-2" />
            Popular
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex-1 overflow-auto p-6 hide-scrollbar" >
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat.toLowerCase()}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Featured */}
          <h2 className="text-lg mb-3 font-medium">Featured Plugins</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {plugins.slice(0, 3).map((plugin) => (
              <Card
                key={plugin.id}
                className="p-6 hover:shadow-lg transition cursor-pointer"
                onClick={() => onPluginClick(plugin)}
              >
                <div className="text-lg font-semibold mb-2">{plugin.name}</div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {plugin.description}
                </p>

                <div className="flex">
                  <Badge variant="outlined">{plugin.category}</Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* All Plugins */}
          <h2 className="text-lg mb-3 font-medium">All Plugins</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {filteredPlugins.map((plugin) => (
              <PluginCard key={plugin.id} plugin={plugin} />
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
