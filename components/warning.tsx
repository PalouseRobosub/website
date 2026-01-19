import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {TriangleAlert} from "lucide-react";


const Warning = ({ title, children }: { title: string, children: React.ReactNode }) => {

  return (
    <Alert variant="destructive" className="bg-red-100">
      <TriangleAlert />
      <AlertTitle>
        {title}
      </AlertTitle>
      <AlertDescription>
        {children}
      </AlertDescription>
    </Alert>
  )
}

export default Warning