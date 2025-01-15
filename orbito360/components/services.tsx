import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      title: "Design",
      description: "At Orbito360, quality is our cornerstone. Every solution we build is tested, refined, and production-ready from day one. Guided by the SMART (Specific, Measurable, Attainable, Relevant, Time-bound) methodology, we ensure each project delivers measurable impact and real-world results."
    },
    {
      title: "Development",
      description: "At Orbito360, quality is our cornerstone. Every solution we build is tested, refined, and production-ready from day one. Guided by the SMART (Specific, Measurable, Attainable, Relevant, Time-bound) methodology, we ensure each project delivers measurable impact and real-world results."
    },
    {
      title: "Marketing",
      description: "At Orbito360, quality is our cornerstone. Every solution we build is tested, refined, and production-ready from day one. Guided by the SMART (Specific, Measurable, Attainable, Relevant, Time-bound) methodology, we ensure each project delivers measurable impact and real-world results."
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-white mb-12">SERVICES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-blue-950/50 border-blue-900 hover:border-blue-800 transition-colors">
              <CardHeader>
                <CardTitle className="text-blue-400">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

