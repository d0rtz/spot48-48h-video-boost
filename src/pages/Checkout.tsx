"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Check, Star, Clock, Shield, Zap } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const Checkout = () => {
  const location = useLocation()
  const [selectedPack, setSelectedPack] = useState("profesional")
  const [selectedUpsells, setSelectedUpsells] = useState<string[]>([])
  const [selectedSubscription, setSelectedSubscription] = useState("")
  const [currentStep, setCurrentStep] = useState(1)

  const packs = [
    {
      id: "basico",
      name: "Básico",
      price: 149,
      originalPrice: 199,
      features: ["1 Vídeo Vertical (15-20s)", "Guion + Voz + Subtítulos", "Entrega en 48h", "1 Revisión incluida"],
    },
    {
      id: "profesional",
      name: "Profesional",
      price: 249,
      originalPrice: 349,
      popular: true,
      features: [
        "3 Vídeos Verticales (15-25s)",
        "Guion + Voz + Subtítulos",
        "2 Rondas de Ajustes",
        "Entrega en 48h",
        "Copies listos para usar",
        "Estrategia de contenido básica",
        "Garantía de devolución",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: 399,
      originalPrice: 549,
      features: [
        "5 Vídeos Verticales (15-30s)",
        "Guion + Voz + Subtítulos profesional",
        "3 Rondas de Ajustes",
        "Entrega en 48h",
        "Copies + Estrategia completa",
        "Consultoría personalizada 1h",
        "Soporte prioritario",
        "Garantía de devolución extendida",
      ],
    },
  ]

  const upsells = [
    {
      id: "revision",
      title: "Revisión Extra",
      description: "Una revisión adicional para hacer cambios en tus vídeos",
      price: 29,
      icon: <Check className="w-6 h-6" />,
    },
    {
      id: "strategy",
      title: "Guía de Estrategia Digital",
      description: "PDF completo con estrategias de contenido y mejores horarios de publicación",
      price: 39,
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: "hooks",
      title: "Variaciones de Hook",
      description: "Recibe 2 versiones con diferentes intros para test A/B",
      price: 49,
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  const subscriptionPlans = [
    {
      id: "lite",
      name: "Starter",
      price: 299,
      features: ["6 vídeos al mes", "Entrega en 48h", "1 revisión incluida", "Soporte básico"],
    },
    {
      id: "pro",
      name: "Growth",
      price: 549,
      popular: true,
      features: [
        "12 vídeos al mes",
        "Entrega en 48h",
        "2 revisiones incluidas",
        "Copies listos para publicar",
        "Estrategia mensual básica",
      ],
    },
    {
      id: "premium-sub",
      name: "Scale",
      price: 799,
      features: [
        "20 vídeos al mes",
        "Entrega en 48h",
        "3 revisiones incluidas",
        "Consultoría mensual 1h",
        "Soporte prioritario",
        "Estrategia de contenido completa",
        "Análisis de rendimiento",
      ],
    },
  ]

  const steps = ["Selecciona tu pack", "Pago", "Confirmación"]

  const toggleUpsell = (upsellId: string) => {
    setSelectedUpsells((prev) => (prev.includes(upsellId) ? prev.filter((id) => id !== upsellId) : [...prev, upsellId]))
  }

  const calculateTotal = () => {
    const selectedPackPrice = packs.find((pack) => pack.id === selectedPack)?.price || 0
    const upsellsTotal = selectedUpsells.reduce((total, upsellId) => {
      const upsell = upsells.find((u) => u.id === upsellId)
      return total + (upsell?.price || 0)
    }, 0)
    return selectedPackPrice + upsellsTotal
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const planParam = urlParams.get("plan")

    if (planParam && packs.find((pack) => pack.id === planParam)) {
      setSelectedPack(planParam)
    }
  }, [location.search])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
              <img src="/src/assets/spot48-logo-official.png" alt="Spot48" className="h-8" />
            </Link>

            {/* Progress Steps */}
            <div className="hidden md:flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      index + 1 <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index + 1 <= currentStep ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span
                    className={`ml-2 text-sm font-medium ${
                      index + 1 <= currentStep ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pack Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Selecciona tu pack</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {packs.map((pack) => (
                  <div
                    key={pack.id}
                    className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all ${
                      selectedPack === pack.id ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300"
                    }`}
                    onClick={() => setSelectedPack(pack.id)}
                  >
                    {pack.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Más Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{pack.name}</h3>
                      <div className="mt-2">
                        <span className="text-sm text-gray-500 line-through">{pack.originalPrice}€</span>
                        <div className="text-3xl font-bold text-blue-600">{pack.price}€</div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {pack.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Upsells */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Mejora tu pedido</h2>
              <p className="text-gray-600 mb-6">Añade estos extras para maximizar el impacto de tus vídeos</p>

              <div className="space-y-4">
                {upsells.map((upsell) => (
                  <div
                    key={upsell.id}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      selectedUpsells.includes(upsell.id)
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                    onClick={() => toggleUpsell(upsell.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-blue-600">{upsell.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{upsell.title}</h3>
                          <p className="text-sm text-gray-600">{upsell.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">+{upsell.price}€</div>
                        <button
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            selectedUpsells.includes(upsell.id)
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {selectedUpsells.includes(upsell.id) ? "Añadido" : "Añadir"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Offer */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">🚀 Spot48 Pro Membership</h2>
                <p className="text-blue-100">Contenido viral constante sin límites ni preocupaciones</p>
                <div className="mt-4">
                  <Link
                    to="/subscriptions"
                    className="inline-flex items-center text-white hover:text-blue-100 underline font-medium"
                  >
                    Saber más sobre las suscripciones →
                  </Link>
                </div>
              </div>

              <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">¿Necesitas contenido constante?</h3>
                <p className="text-blue-100 mb-4">
                  Nuestras suscripciones mensuales te dan acceso a vídeos ilimitados con descuentos de hasta el 40%
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Desde 249€</div>
                    <div className="text-sm text-blue-100">por mes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">6-20 vídeos</div>
                    <div className="text-sm text-blue-100">según el plan</div>
                  </div>
                </div>
                <Link
                  to="/subscriptions"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Ver planes de suscripción
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resumen del pedido</h3>

              <div className="space-y-3 mb-6">
                {/* Selected Pack */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">Pack {packs.find((p) => p.id === selectedPack)?.name}</span>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Entrega en 48h</span>
                    </div>
                  </div>
                  <span className="font-semibold">{packs.find((p) => p.id === selectedPack)?.price}€</span>
                </div>

                {/* Selected Upsells */}
                {selectedUpsells.map((upsellId) => {
                  const upsell = upsells.find((u) => u.id === upsellId)
                  return upsell ? (
                    <div key={upsellId} className="flex justify-between items-center text-sm">
                      <span>{upsell.title}</span>
                      <span>+{upsell.price}€</span>
                    </div>
                  ) : null
                })}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">{calculateTotal()}€</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                Proceder al pago
              </button>

              <div className="text-center space-y-2">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-1" />
                  Pago 100% seguro
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  Garantía de devolución
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
