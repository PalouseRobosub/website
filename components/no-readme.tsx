import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {TriangleAlert} from "lucide-react";


const NoReadme = ({ name }: { name: string }) => {

  return (
    <Alert variant="destructive" className="m-4 w-min bg-red-100">
      <TriangleAlert />
      <AlertTitle><code>README.md</code> not found</AlertTitle>
      <AlertDescription className="md:text-nowrap">
        Please ensure that the package <code>{name}</code> contains a <code>README.md</code> file in its root directory.
      </AlertDescription>
    </Alert>
  )
}

export default NoReadme;