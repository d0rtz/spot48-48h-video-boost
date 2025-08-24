import { Link } from "react-router-dom"
import { ArrowLeft, Check, Star, Zap, Clock, Users } from "lucide-react"

const Subscriptions = () => {
  const plans = [
    {
      name: "Starter",
      price: 249,
      originalPrice: 349,
      videos: 6,
      features: [
        "6 vídeos profesionales al mes",
        "Guiones optimizados con IA",
        "Edición profesional incluida",
        "Revisiones ilimitadas",
        "Entrega en 48h garantizada",
        "Soporte prioritario",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: 449,
      originalPrice: 649,
      videos: 12,
      features: [
        "12 vídeos profesionales al mes",
        "Guiones optimizados con IA",
        "Edición profesional avanzada",
        "Revisiones ilimitadas",
        "Entrega en 48h garantizada",
        "Soporte prioritario",
        "Estrategia de contenido mensual",
        "Análisis de rendimiento",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: 699,
      originalPrice: 999,
      videos: 20,
      features: [
        "20 vídeos profesionales al mes",
        "Guiones optimizados con IA",
        "Edición profesional premium",
        "Revisiones ilimitadas",
        "Entrega en 48h garantizada",
        "Soporte 24/7 dedicado",
        "Estrategia de contenido personalizada",
        "Análisis avanzado de rendimiento",
        "Consultoría mensual 1:1",
        "Acceso a beta features",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/src/assets/spot48-logo-official.png" alt="Spot48" className="h-8 w-auto" />
            </Link>
            <Link
              to="/checkout"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al checkout</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Spot48 Pro Membership</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contenido ilimitado para tu{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              crecimiento digital
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Olvídate de preocuparte por el contenido. Con nuestras suscripciones mensuales, tendrás un flujo constante
            de vídeos profesionales que harán crecer tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-green-600">
              <Check className="w-5 h-5" />
              <span className="font-medium">Sin permanencia</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <Check className="w-5 h-5" />
              <span className="font-medium">Cancela cuando quieras</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <Check className="w-5 h-5" />
              <span className="font-medium">Primer mes con descuento</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">¿Por qué elegir una suscripción?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ahorro significativo</h3>
              <p className="text-gray-600">
                Hasta un 40% más económico que comprar vídeos individuales. Más contenido, menos coste por vídeo.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consistencia garantizada</h3>
              <p className="text-gray-600">
                Contenido regular y planificado. Tu audiencia siempre tendrá algo nuevo que ver de tu marca.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Soporte prioritario</h3>
              <p className="text-gray-600">
                Acceso directo a nuestro equipo, estrategia personalizada y análisis detallado de rendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Elige tu plan mensual</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todos los planes incluyen entrega garantizada, revisiones ilimitadas y soporte prioritario
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>

                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-sm text-gray-500 line-through">€{plan.originalPrice}</span>
                      <span className="text-4xl font-bold text-gray-900">€{plan.price}</span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium mt-1">
                      Ahorra €{plan.originalPrice - plan.price} al mes
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="text-center p-4 bg-blue-50 rounded-lg mb-6">
                      <span className="text-3xl font-bold text-blue-600">{plan.videos}</span>
                      <p className="text-sm text-blue-800">vídeos profesionales/mes</p>
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/checkout?subscription=${plan.name.toLowerCase()}`}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 block ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Comenzar suscripción
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿Prefieres un proyecto puntual?</p>
            <Link to="/checkout" className="text-blue-600 hover:text-blue-700 font-medium underline">
              Ver packs individuales
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Preguntas frecuentes</h2>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Puedo cancelar mi suscripción en cualquier momento?
              </h3>
              <p className="text-gray-600">
                Sí, puedes cancelar tu suscripción en cualquier momento sin penalizaciones. Seguirás teniendo acceso
                hasta el final de tu período de facturación actual.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Qué pasa si no uso todos mis vídeos en un mes?
              </h3>
              <p className="text-gray-600">
                Los vídeos no utilizados no se acumulan para el siguiente mes. Cada mes tienes tu cuota completa
                disponible para usar.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Puedo cambiar de plan durante mi suscripción?
              </h3>
              <p className="text-gray-600">
                Sí, puedes actualizar o reducir tu plan en cualquier momento. Los cambios se aplicarán en tu próximo
                ciclo de facturación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Subscriptions
