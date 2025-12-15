import React from 'react';
import {
  FileText, FolderOpen, MoreVertical, Upload, Plus,
  Clock,
} from 'lucide-react';
import { Badge, Button, Card, CardContent, CardHeader, Label } from '@mijn-ui/react';


export default function Project() {

  const recentProjects = [
    { id: 1, name: 'Invoice Templates', templates: 8, lastModified: '2 hours ago', category: 'Financial' },
    { id: 2, name: 'Marketing Materials', templates: 15, lastModified: '1 day ago', category: 'Marketing' },
    { id: 3, name: 'Customer Reports', templates: 6, lastModified: '3 days ago', category: 'Analytics' },
    { id: 4, name: 'Product Labels', templates: 12, lastModified: '1 week ago', category: 'Production' },
  ];

  const templateLibrary = [
    { id: 1, name: 'Modern Invoice', preview: '#4F46E5', category: 'Financial' },
    { id: 2, name: 'Dashboard Report', preview: '#10B981', category: 'Analytics' },
    { id: 3, name: 'Product Card', preview: '#F59E0B', category: 'E-commerce' },
    { id: 4, name: 'Certificate Template', preview: '#8B5CF6', category: 'Documents' },
    { id: 5, name: 'Email Newsletter', preview: '#EF4444', category: 'Marketing' },
    { id: 6, name: 'Shipping Label', preview: '#3B82F6', category: 'Logistics' },
  ];

  return (
    <>
      {/* 3. Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Main Scrollable Content */}
        <div className="flex-1 overflow-auto p-8 space-y-8">
          
          {/* Quick Actions */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-5 hover:border-primary cursor-pointer">
                <div className="w-13 h-13 bg-primary/10 rounded-md flex items-center justify-center mb-3 bg-blue-50">
                  <Plus className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-medium">New Template</h3>
                <p className="text-sm text-gray-500">Start from scratch.</p>
              </Card>

              <Card className="p-5 hover:border-primary cursor-pointer">
                <div className="w-13 h-13 bg-info/10 rounded-md flex items-center justify-center mb-3">
                  <Upload className="w-5 h-5 text-info" />
                </div>
                <Label className="font-medium">Import Package</Label>
                <p className="text-sm text-gray-500">Upload template files.</p>
              </Card>

              <Card className="p-5 hover:border-primary cursor-pointer">
                <div className="w-10 h-10 bg-success/10 rounded-md flex items-center justify-center mb-3">
                  <FolderOpen className="w-5 h-5 text-success" />
                </div>
                <Label className="font-medium">Open Project</Label>
                <p className="text-sm text-gray-500">Browse existing work.</p>
              </Card>
            </div>
          </section>

          {/* Recent Projects */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Projects</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentProjects.map(project => (
                <Card key={project.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{project.name}</h3>
                        <p className="text-sm text-gray-500">{project.templates} templates</p>
                      </div>
                      <Button variant="ghost" size="sm"><MoreVertical className="w-4 h-4" /></Button>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Badge color="secondary" className='text-gray-600'>{project.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {project.lastModified}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Template Library */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-4 sm:flex-col sm:items-start">
              <h2 className="text-xl font-semibold">Template Library</h2>
              <Button variant="outlined" className='w-48 md:justify-self-end justify-self-start' size="sm">Browse Templates</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {templateLibrary.slice(0, 6).map(template => (
                <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer p-0">
                  <CardHeader
                    className="p-0 h-32 flex items-center justify-center"
                    style={{ backgroundColor: template.preview }}
                  >
                    <FileText className="text-white/80 w-15 h-15" />
                  </CardHeader>

                  <CardContent className="h-24 flex flex-col items-baseline justify-end">
                    <h4 className="text-sm font-medium truncate">{template.name}</h4>
                    <p className="text-xs text-gray-500">{template.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
