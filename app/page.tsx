import { Button, Card, CardContent, CardHeader, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@mijn-ui/react"
import Link from "next/link";

// SVG Icon for Template/Document (easily portable)
const TemplateIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);


export default function Home() {


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="flex flex-col items-center justify-center w-full max-w-md sm:max-w-lg">
        
        <div className="text-center mb-6">
          <TemplateIcon className="h-8 w-8 mx-auto mb-2 text-primary dark:text-white" />
          <h3 className="text-2xl font-bold dark:text-white">Template Editor</h3>
          <p className="text-sm text-zinc-500 mt-1">Enterprise data-driven template platform</p>
        </div>
        
        {/* Card Component (Adjusted max-width for better control) */}
        <Card className="w-full max-w-sm md:max-w-md">
          <CardContent className="flex flex-col space-y-4 p-6">
            
            {/* Organization Select Field */}
            <div>
              <Label htmlFor="organization">Organization</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Organization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Tech Co</SelectItem>
                  <SelectItem value="finance">Finance Inc</SelectItem>
                  <SelectItem value="health">Health Corp</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Email Input Field */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            {/* Password Input Field */}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
            
            {/* Submit Button */}
            <Link href={'/project'}>
               <Button className="w-full mt-2">Continue</Button> 
            </Link>
           
          </CardContent>
        </Card>

        {/* Disclaimer / Terms */}
        <div className="mt-4 text-center px-4">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                By continuing, you agree to our 
                <a href="#" className="underline mx-1">Terms of Service</a> 
                and 
                <a href="#" className="underline ml-1">Privacy Policy</a>
                .
            </p>
        </div>

      </main>
    </div>
  );
}