import {Button} from "@/components/ui/button";
import {Kbd} from "./ui/kbd";

const DocsSearch = () => {

  return (
    <Button className="flex flex-row gap-10" variant="outline">
      Search Docs
      <Kbd>⌘K</Kbd>
    </Button>
  )
}

export default DocsSearch;