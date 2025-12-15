"use client";

import React, { useState } from 'react';

import {
  Search,
  Plus,
  MoreVertical,
  Settings,
  Trash2,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Shield,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@mijn-ui/react';
import Link from 'next/link';

export default function PluginManagerScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const installedPlugins = [
    {
      id: 1,
      name: 'Chart Generator Pro',
      author: 'DataViz Inc.',
      version: '2.1.0',
      status: 'active',
      icon: '📊',
      description: 'Advanced charting and data visualization',
      category: 'Data Visualization',
      lastUpdated: '2024-11-20',
      autoUpdate: true,
      permissions: ['Canvas Access', 'Data Read', 'Storage'],
      usageCount: 156,
    },
    {
      id: 2,
      name: 'QR Code Builder',
      author: 'CodeGen Studios',
      version: '1.5.2',
      status: 'active',
      icon: '⬜',
      description: 'Generate QR codes with custom styling',
      category: 'Components',
      lastUpdated: '2024-11-18',
      autoUpdate: true,
      permissions: ['Canvas Access'],
      usageCount: 89,
    },
    {
      id: 3,
      name: 'Data Validator',
      author: 'SecurityFirst',
      version: '3.0.1',
      status: 'inactive',
      icon: '✓',
      description: 'Validate and sanitize data inputs',
      category: 'Data Processing',
      lastUpdated: '2024-11-15',
      autoUpdate: false,
      permissions: ['Data Read', 'Data Write'],
      usageCount: 234,
    },
    {
      id: 4,
      name: 'Image Optimizer',
      author: 'MediaTools',
      version: '1.8.0',
      status: 'active',
      icon: '🖼️',
      description: 'Compress and optimize images',
      category: 'Media',
      lastUpdated: '2024-11-22',
      autoUpdate: true,
      permissions: ['Canvas Access', 'Storage', 'File System'],
      usageCount: 67,
    },
    {
      id: 5,
      name: 'API Connector Pro',
      author: 'IntegrationHub',
      version: '2.3.0',
      status: 'active',
      icon: '🔌',
      description: 'Advanced API integration tools',
      category: 'Integrations',
      lastUpdated: '2024-11-25',
      autoUpdate: true,
      permissions: ['API Access', 'Data Read', 'Data Write', 'Storage'],
      usageCount: 345,
    },
    {
      id: 6,
      name: 'Barcode Scanner',
      author: 'ScanTech',
      version: '1.2.1',
      status: 'error',
      icon: '▌▌▌',
      description: 'Scan and generate barcodes',
      category: 'Components',
      lastUpdated: '2024-10-30',
      autoUpdate: false,
      permissions: ['Canvas Access', 'Camera'],
      usageCount: 23,
    },
  ];

  const availableUpdates = [
    {
      pluginName: 'Data Validator',
      currentVersion: '3.0.1',
      newVersion: '3.1.0',
      releaseDate: '2024-11-26',
      changes: ['Bug fixes', 'Performance improvements', 'New validation rules'],
    },
  ];

  const filteredPlugins = installedPlugins.filter((plugin) =>
    plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plugin.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plugin.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <Badge variant="filled" color="success">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Active
          </Badge>
        );
      case 'inactive':
        return (
          <Badge variant="outlined" color="secondary">
            <XCircle className="w-3 h-3 mr-1" />
            Inactive
          </Badge>
        );
      case 'error':
        return (
          <Badge variant="outlined" color="inverse">
            <AlertCircle className="w-3 h-3 mr-1" />
            Error
          </Badge>
        );
      default:
        return null;
    }
  };

  const togglePlugin = (pluginId: number) => {
    console.log('Toggle plugin:', pluginId);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <Link href="/project">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>

          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl mb-1">Plugin Manager</h1>
            <p className="text-sm text-gray-500">Manage installed plugins and extensions</p>
          </div>

          <Link href="/plugin-manager/marketplace" className="w-full sm:w-auto">
            <Button size="sm" className="w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Browse Marketplace
            </Button>
          </Link>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            placeholder="Search installed plugins..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 sm:p-8">
        <Tabs defaultValue="installed" className="w-full">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="installed">
              Installed Plugins
              <Badge variant="outlined" className="ml-2">{installedPlugins.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="updates">
              Available Updates
              <Badge
                variant="outlined"
                className="ml-2 bg-warning/10 text-warning border-warning/20"
              >
                {availableUpdates.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          {/* Installed Plugins */}
          <TabsContent value="installed" className="mt-6">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white border border-border rounded-lg p-4">
                <div className="text-2xl font-semibold mb-1">{installedPlugins.length}</div>
                <div className="text-sm text-gray-500">Installed</div>
              </div>
              <div className="bg-white border border-border rounded-lg p-4">
                <div className="text-2xl font-semibold mb-1 text-success">
                  {installedPlugins.filter((p) => p.status === 'active').length}
                </div>
                <div className="text-sm text-gray-500">Active</div>
              </div>
              <div className="bg-white border border-border rounded-lg p-4">
                <div className="text-2xl font-semibold mb-1 text-warning">
                  {availableUpdates.length}
                </div>
                <div className="text-sm text-gray-500">Updates Available</div>
              </div>
              <div className="bg-white border border-border rounded-lg p-4">
                <div className="text-2xl font-semibold mb-1 text-primary">
                  {installedPlugins.reduce((sum, p) => sum + p.usageCount, 0)}
                </div>
                <div className="text-sm text-gray-500">Total Uses</div>
              </div>
            </div>

            {/* Plugins Table */}
            <div className="bg-white border border-border rounded-lg overflow-auto">
              <div className="min-w-[900px]">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHeaderCell>Plugin</TableHeaderCell>
                      <TableHeaderCell>Category</TableHeaderCell>
                      <TableHeaderCell>Version</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                      <TableHeaderCell>Usage</TableHeaderCell>
                      <TableHeaderCell>Auto-Update</TableHeaderCell>
                      <TableHeaderCell className="w-[100px]">Actions</TableHeaderCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlugins.map((plugin) => (
                      <TableRow key={plugin.id} className="hover:bg-hover-bg">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="text-xl">{plugin.icon}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{plugin.name}</div>
                              <div className="text-sm text-gray-500">by {plugin.author}</div>
                            </div>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex">
                            <Badge variant="outlined">{plugin.category}</Badge>
                          </div>
                        </TableCell>

                        <TableCell className="text-sm">v{plugin.version}</TableCell>

                        <TableCell>
                          <div className="flex">
                            {getStatusBadge(plugin.status)}
                          </div>
                        </TableCell>

                        <TableCell className="text-sm">{plugin.usageCount}</TableCell>

                        <TableCell>
                          <Switch key={plugin.id} checked={plugin.autoUpdate} onCheckedChange={() => plugin.autoUpdate = !plugin.autoUpdate} />
                        </TableCell>

                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => togglePlugin(plugin.id)}>
                                {plugin.status === 'active' ? (
                                  <>
                                    <XCircle className="w-4 h-4 mr-2" /> Disable
                                  </>
                                ) : (
                                  <>
                                    <CheckCircle2 className="w-4 h-4 mr-2" /> Enable
                                  </>
                                )}
                              </DropdownMenuItem>

                              <DropdownMenuItem>
                                <Settings className="w-4 h-4 mr-2" />
                                Settings
                              </DropdownMenuItem>

                              <DropdownMenuItem>
                                <Shield className="w-4 h-4 mr-2" />
                                Permissions
                              </DropdownMenuItem>

                              <DropdownMenuItem>
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>

                              <DropdownMenuSeparator />

                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Uninstall
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          {/* Updates */}
          <TabsContent value="updates" className="mt-6">
            <div className="space-y-4">
              {availableUpdates.map((update, index) => (
                <div key={index} className="bg-white border border-border rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-lg mb-1">{update.pluginName}</h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Update available: v{update.currentVersion} → v{update.newVersion}
                      </p>

                      <p className="text-sm font-medium">What's new:</p>
                      <ul className="space-y-1 mt-2">
                        {update.changes.map((change, i) => (
                          <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                      <Button size="sm" className="w-full lg:w-auto">
                        Update Now
                      </Button>
                      <Button size="sm" variant="outlined" className="w-full lg:w-auto">
                        View Changes
                      </Button>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">Released: {update.releaseDate}</div>
                </div>
              ))}

              {availableUpdates.length === 0 && (
                <div className="bg-white border border-border rounded-lg p-12 text-center">
                  <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="font-medium mb-2">All plugins are up to date</h3>
                  <p className="text-sm text-gray-500">Your installed plugins are running the latest versions</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
