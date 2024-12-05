import { Input } from "@/Components/ui/input"
import { Search } from 'lucide-react';


const searchbar = () => {
  return (
    <div className="flex ">
        <Input />
        <Search className="w-9 h-6"/>
        </div>
  )
}

export default searchbar