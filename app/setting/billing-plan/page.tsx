import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch,
} from "@mijn-ui/react";
import { CreditCard } from "lucide-react";

function UsageItem({ label, current, limit, unit = "" }: {
  label: string;
  current: number;
  limit: number;
  unit?: string;
}) {
  const percentage = (current / limit) * 100;
  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-2">
        <span>{label}</span>
        <span className="text-gray-500">
          {current.toLocaleString()} {unit} / {limit.toLocaleString()} {unit}
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function BillingItem({ date, amount, status }: {
  date: string;
  amount: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-sm">{date}</p>
        <p className="text-xs text-gray-500">Professional Plan</p>
      </div>
      <div className="text-right">
        <p className="font-medium text-sm">{amount}</p>
        <Badge variant="outlined" className="text-xs">{status}</Badge>
      </div>
    </div>
  );
}

export default function BillingSettings() {
  return (
    <div className="max-w-3xl space-y-6">
      
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <h3>Current Plan</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h4>Professional Plan</h4>
                <Badge variant="filled">Active</Badge>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                $49/month • Billed monthly • Renews on Dec 15, 2025
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-success" />
                  Unlimited templates
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-success" />
                  Advanced API features
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-success" />
                  Priority support
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button variant="outlined" size="sm">Change Plan</Button>
              <Button variant="ghost" size="sm">Cancel Plan</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardHeader>
          <h3>Payment Method</h3>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-sm">Visa ending in 4242</p>
                <p className="text-xs text-gray-500">Expires 12/2026</p>
              </div>
            </div>
            <Button variant="outlined" size="sm">Update</Button>
          </div>
        </CardContent>
      </Card>

      {/* Usage This Month */}
      <Card>
        <CardHeader>
          <h3>Usage This Month</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <UsageItem label="API Calls" current={8247} limit={50000} />
          <UsageItem label="Storage" current={12.4} limit={100} unit="GB" />
          <UsageItem label="Team Members" current={5} limit={10} />
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <h3>Billing History</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <BillingItem date="Nov 15, 2025" amount="$49.00" status="Paid" />
            <Separator />

            <BillingItem date="Oct 15, 2025" amount="$49.00" status="Paid" />
            <Separator />

            <BillingItem date="Sep 15, 2025" amount="$49.00" status="Paid" />
          </div>

          <Button variant="outlined" size="sm" className="mt-4">
            View All Invoices
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}
