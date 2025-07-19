import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Facebook, Mail, Phone, MapPin, Palette, Brush, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const services = [
    "CHARCOAL PORTRAIT",
    "COLORED PENCIL PORTRAIT",
    "ACRYLIC PAINT PORTRAIT",
    "OIL PAINT PORTRAIT",
    "FAMILY PORTRAIT",
    "PET PORTRAIT",
    "CARICATURE PORTRAIT",
    "ACRYLIC PAINTING",
    "OIL PAINTING",
  ]

  const sampleProjects = [
    {
      title: "Charcoal Portrait Study",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Colored Pencil Pet Portrait",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Acrylic Family Portrait",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Oil Painting Landscape",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Caricature Portrait",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Realistic Oil Portrait",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-800">Mitchy Art</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-amber-600 transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6">
              <Brush className="h-10 w-10 text-amber-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Create with passion, express with purpose
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 italic leading-relaxed">
              "Every artist dips his brush in his own soul and paints his own nature into his pictures."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 bg-transparent"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Services</h2>
            <p className="text-lg text-gray-600">Bringing your vision to life through various artistic mediums</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-amber-100">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service}</h3>
                  <p className="text-gray-600 text-sm">Professional quality artwork tailored to your needs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sample Projects</h2>
            <p className="text-lg text-gray-600">A glimpse into my artistic journey and creations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                    Featured Work
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Ready to bring your artistic vision to life? Let's connect!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-amber-100">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Create Together</h3>
                <p className="text-gray-600 mb-6">
                  Whether you're looking for a custom portrait, a unique painting, or any other artistic creation, I'm
                  here to help bring your vision to life. Each piece is crafted with passion and attention to detail.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Available for commissions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Custom artwork consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Worldwide shipping available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect With Me</h3>
                <p className="text-gray-600 mb-6">
                  Follow my artistic journey and see my latest creations on social media. I love sharing the creative
                  process and connecting with fellow art enthusiasts.
                </p>
                <Link
                  href="https://www.facebook.com/share/1L7PBvthUP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="font-medium">Visit Mitchy Art on Facebook</span>
                </Link>
                <p className="text-sm text-gray-500 mt-4">
                  See my latest works, behind-the-scenes content, and connect with the art community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Palette className="h-6 w-6 text-amber-400" />
            <span className="text-xl font-bold">Mitchy Art</span>
          </div>
          <p className="text-gray-400 mb-4">Creating beautiful art with passion and purpose</p>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Mitchy Art. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
