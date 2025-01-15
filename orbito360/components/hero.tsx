import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold leading-tight lg:text-7xl lg:leading-tight text-white">
              Deploy.
              <br />
              Development.
              <br />
              Marketing.
            </h1>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              ENQUIRY NOW
            </Button>
          </div>
        </div>
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-1/2 grid grid-cols-2 grid-rows-2 gap-4 p-8">
        <div className="bg-white rounded-tl-full" />
        <div className="bg-white rounded-sm" />
        <div className="bg-white rounded-sm col-span-2" />
      </div>
    </div>
  )
}

