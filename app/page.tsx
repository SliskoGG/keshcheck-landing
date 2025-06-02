import { CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  Utensils,
  Car,
  ShoppingCart,
  Home,
  Gamepad2,
  Heart,
  GraduationCap,
  Brain,
  TrendingUp,
  Target,
  MessageCircle,
  Star,
  ArrowRight,
  Menu,
  Smartphone,
  PiggyBank,
  Zap,
  Sparkles,
  Laugh,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const categories = [
    { id: "kaffe", name: "Kaffe", icon: Coffee },
    { id: "food", name: "Hrana", icon: Utensils },
    { id: "transport", name: "Transport", icon: Car },
    { id: "shopping", name: "Kupovina", icon: ShoppingCart },
    { id: "home", name: "Dom", icon: Home },
    { id: "entertainment", name: "Zabava", icon: Gamepad2 },
    { id: "health", name: "Zdravlje", icon: Heart },
    { id: "education", name: "Obrazovanje", icon: GraduationCap },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="w-full max-w-none flex h-16 items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              KeshCheck
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Funkcije
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Kako radi
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Recenzije
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Cene
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex text-gray-700 hover:text-purple-600">
              Prijavi se
            </Button>
            <Link href="https://keshcheck-app.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
              >
                Počni besplatno ✨
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Fun background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-300 rounded-full opacity-20 animate-bounce delay-1000"></div>
          </div>

          <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-gradient-to-r from-yellow-200 to-orange-200 text-orange-800 border-orange-300 shadow-sm"
                  >
                    💰 Finansije koje ne dosađuju!
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-gray-900">
                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                      Tvoj AI drugar
                    </span>
                    <br />
                    <span className="text-gray-900">za pametne finansije!</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl leading-relaxed">
                    Zaboravi dosadne finansijske aplikacije! KeshCheck ima AI koji te <strong>stvarno razume</strong>,
                    daje ti savete sa dozom humora i pomaže ti da uštediš - bez dosađivanja! 😄
                  </p>
                </div>

                {/* AI Example with more fun styling */}
                <div className="bg-white p-5 rounded-2xl border-2 border-purple-200 shadow-lg relative">
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2">
                      <Laugh className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-purple-600 mb-1 font-medium">Tvoj AI finansijski drugar kaže:</p>
                      <p className="text-gray-900 font-medium text-lg">
                        "€25 na kafu ove nedelje? Možda je vreme za neki kućni aparat? 😅 Ali nije loše, video sam i
                        gore slučajeve!"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link href="https://keshcheck-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl text-lg font-semibold"
                    >
                      Počni zabavu!
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 border-2 border-purple-300 text-purple-700 hover:bg-purple-50 font-semibold"
                  >
                    Pogledaj demo 
                  </Button>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">Besplatno 30 dana</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Smartphone className="h-4 w-4 text-green-500" />
                    <span className="font-medium">iOS & Android</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">Bez dosade!</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lifestyle%20Fintech%20App%20with%20AI%20Chatbot-p5I2tVh986IT5YRRU1xtVXRmZxCKpG.png"
                    width="500"
                    height="750"
                    alt="KeshCheck App - AI finansijski savetnik sa dozom humora"
                    className="mx-auto rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg xl:max-w-xl"
                    priority
                  />
                  {/* Subtle floating elements that don't compete with the real image */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-xl shadow-lg animate-pulse opacity-80">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-400 p-2 rounded-xl shadow-lg animate-bounce opacity-80">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Preview with more fun styling */}
        <section className="w-full py-12 bg-white">
          <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Prati sve što potrošiš!</h2>
              <p className="text-gray-600 text-lg">
                AI automatski sortira troškove i daje ti savete koji te neće uspavati 😴
              </p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 gap-4 max-w-6xl mx-auto">
              {categories.map((cat, index) => {
                const IconComponent = cat.icon
                const colors = [
                  "from-purple-400 to-pink-400",
                  "from-blue-400 to-cyan-400",
                  "from-green-400 to-emerald-400",
                  "from-yellow-400 to-orange-400",
                  "from-red-400 to-pink-400",
                  "from-indigo-400 to-purple-400",
                  "from-teal-400 to-green-400",
                  "from-orange-400 to-red-400",
                ]
                return (
                  <div
                    key={cat.id}
                    className="p-4 rounded-2xl bg-white border-2 border-gray-200 flex flex-col items-center space-y-2 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${colors[index]} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900">{cat.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Section with more personality */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 border-purple-300"
              >
                Zašto je KeshCheck drugačiji
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-gray-900">
                AI koji te <span className="text-purple-600">stvarno razume</span>
              </h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl">
                Nema više dosadnih finansijskih aplikacija! KeshCheck koristi AI koji govori tvoj jezik, razume tvoje
                navike i motiviše te na zabavan način! 
              </p>
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <Card className="border-2 border-purple-200 bg-white hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900">Pametno praćenje troškova</CardTitle>
                        <CardDescription className="text-gray-600">
                          AI koji uči tvoje navike (i pamti da voliš kafu)
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Naš AI automatski kategoriše sve troškove i uči kako trošiš. Nema dosadnog kucanja - samo pametne
                      analize! 🤖
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-pink-200 bg-white hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl shadow-lg">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900">Saveti sa stavom</CardTitle>
                        <CardDescription className="text-gray-600">
                          Finansijski saveti koji te neće uspavati
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Zaboravi dosadne savete! Naš AI koristi humor, razume balkanski mentalitet i motiviše te na pravi
                      način! 💪
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6">
                <Card className="border-2 border-green-200 bg-white hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900">Ciljevi koji se postižu</CardTitle>
                        <CardDescription className="text-gray-600">Realni ciljevi, ne nemoguće misije</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      AI postavlja ciljeve na osnovu TVOJIH navika. Neće ti reći da prestaneš sa kafom, već kako da je
                      piješ pametnije! ☕
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-yellow-200 bg-white hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg">
                        <PiggyBank className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900">Štednja bez muke</CardTitle>
                        <CardDescription className="text-gray-600">Uštedi novac a da se ne osetiš loše</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Dobij konkretne savete kako da uštediš bez odricanja od stvari koje voliš. Pametno, ne bolno! 🎯
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works with more fun */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800 border-blue-300"
              >
                Super jednostavno
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-gray-900">
                Kako da počneš za <span className="text-purple-600">3 minuta</span>!
              </h2>
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-2xl font-bold shadow-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">Poveži račune </h3>
                <p className="text-gray-700">
                  Bezbedno povezuj bankovne račune. Sve je šifrovano kao u banci - samo što je zabavnije! 🔒
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-2xl font-bold shadow-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI radi svoj posao</h3>
                <p className="text-gray-700">
                  Naš AI analizira tvoje troškove, uči navike i priprema personalizovane savete. Ti samo trošiš ili štediš! 
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-2xl font-bold shadow-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">Uživaj u savetima! </h3>
                <p className="text-gray-700">
                  Počni da dobijaš savete, ciljeve i motivaciju koja te neće dosađivati. Štednja postaje zabavna! 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials with more personality */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-50 to-orange-50"
        >
          <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-yellow-200 to-orange-200 text-orange-800 border-orange-300"
              >
                💬 Šta kažu naši korisnici
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-gray-900">
                Ljudi <span className="text-orange-600">obožavaju</span> KeshCheck!
              </h2>
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-3">
              <Card className="border-2 border-yellow-200 bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 mb-4 text-lg">
                    "Brate, ova aplikacija je genijalna! AI me zajebava kad potrošim previše na kafu, ali na dobar
                    način. Uštedio sam 200€ u prvom mesecu! 😂💰"
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                      height="40"
                      alt="Marko P."
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Marko P.</p>
                      <p className="text-xs text-gray-600">Beograd, Srbija 🇷🇸</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-200 bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 mb-4 text-lg">
                    "Konačno aplikacija koja me ne dosađuje! AI komentari su presmiješni, a saveti stvarno rade.
                    Preporučujem svima! 🤣👌"
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                      height="40"
                      alt="Ana M."
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Ana M.</p>
                      <p className="text-xs text-gray-600">Zagreb, Hrvatska 🇭🇷</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 mb-4 text-lg">
                    "Najbolja finansijska aplikacija ikad! AI razumije naš mentalitet i govori naš jezik. Štedim novac a
                    smijem se svaki dan! 😄"
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                      height="40"
                      alt="Stefan J."
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Stefan J.</p>
                      <p className="text-xs text-gray-600">Sarajevo, BiH 🇧🇦</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing with more fun */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-green-200 to-emerald-200 text-green-800 border-green-300"
              >
                Cene koje neće slomiti budžet
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-gray-900">
                Jednostavno i <span className="text-gray-900">pošteno</span>!
              </h2>
            </div>

            <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-2">
              <Card className="border-2 border-gray-200 bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-gray-900 text-2xl">Besplatno </CardTitle>
                  <CardDescription className="text-lg text-gray-600">Savršeno za početak</CardDescription>
                  <div className="text-4xl font-bold text-gray-900">
                    €0<span className="text-lg font-normal text-gray-500">/mesečno</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Osnovni AI saveti (i dalje zabavni!) 😊</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Praćenje do 3 kategorije 📊</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Mesečni izveštaji 📈</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="https://keshcheck-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full text-lg h-12" variant="outline">
                      Počni besplatno! 🚀
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-4 border-purple-300 relative bg-gradient-to-br from-white to-purple-50 hover:shadow-2xl transition-shadow">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-4 py-1 shadow-lg">
                    🔥 Najpopularniji
                  </Badge>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-gray-900 text-2xl">Premium ⭐</CardTitle>
                  <CardDescription className="text-lg text-gray-600">Za ozbiljne štediše</CardDescription>
                  <div className="text-4xl font-bold text-gray-900">
                    €4.99<span className="text-lg font-normal text-gray-500">/mesečno</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Napredni AI saveti 🤖</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Sve kategorije 🛍️</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Personalizovani ciljevi 🎯</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Nedeljni izveštaji 📊</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">VIP podrška 👑</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="https://keshcheck-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg h-12 shadow-lg">
                      Počni Premium! ✨
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA with maximum energy */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
          {/* Fun background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
          </div>

          <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 relative">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Spreman za finansijsku <span className="text-yellow-300">revoluciju</span>?
              </h2>
              <p className="max-w-[600px] text-xl text-purple-100">
                Pridruži se hiljadama korisnika koji su već počeli da štede uz osmeh na licu!
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="https://keshcheck-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="h-16 px-12 bg-white text-purple-600 hover:bg-gray-100 text-xl font-bold shadow-2xl"
                  >
                    Počni štednju ODMAH! 🎉
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-12 border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-purple-600 text-xl font-bold"
                >
                  Pogledaj demo 🎬
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-lg text-purple-100">
                <span>✨ 30 dana besplatno</span>
                <span>🚫 Bez obaveze</span>
                <span>😄 100% zabavno</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with personality */}
      <footer className="w-full border-t bg-gray-50 text-gray-900">
        <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  KeshCheck
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Finansijska aplikacija sa AI-jem koji te razume, motiviše i ponekad malo zadirkuje! Napravljeno sa ❤️ za
                Balkan! 🌍
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">Proizvod </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                    Funkcije
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                    Cene
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                    Sigurnost
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">Kompanija </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                    O nama
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">Podrška </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                    Pomoć
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                    Privatnost
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-600">© 2024 KeshCheck. Sva prava zadržana. Napravljeno sa ❤️ i kafom! ☕</p>
            <div className="flex space-x-4 text-xs text-gray-600 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-purple-400 transition-colors">
                Uslovi korišćenja
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                Privatnost
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
