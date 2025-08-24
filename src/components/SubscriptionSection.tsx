import { Link } from "react-router-dom"
import { Star, Clock, Users, ArrowRight, Check } from "lucide-react"

const SubscriptionSection = () => {
  return (
    <section id="subscriptions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Spot48 Pro Membership</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Necesitas contenido{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              constante?
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Olvídate de preocuparte por el contenido. Con nuestras suscripciones mensuales, tendrás un flujo constante
            de vídeos profesionales que harán crecer tu negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Ahorro significativo</h3>
                <p className="text-blue-100">
                  Hasta un 40% más económico que comprar vídeos individuales. Más contenido, menos coste por vídeo.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Consistencia garantizada</h3>
                <p className="text-blue-100">
                  Contenido regular y planificado. Tu audiencia siempre tendrá algo nuevo que ver de tu marca.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Soporte prioritario</h3>
                <p className="text-blue-100">
                  Acceso directo a nuestro equipo, estrategia personalizada y análisis detallado de rendimiento.
                </p>
              </div>
            </div>
          </div>

          {/* Plans Preview */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Starter</h3>
                  <p className="text-blue-100">Perfecto para empezar</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">249€</div>
                  <div className="text-sm text-blue-200">/mes</div>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-blue-100">
                  <Check className="w-4 h-4 mr-2 text-green-300" />6 vídeos profesionales al mes
                </li>
                <li className="flex items-center text-sm text-blue-100">
                  <Check className="w-4 h-4 mr-2 text-green-300" />
                  Entrega en 48h garantizada
                </li>
                <li className="flex items-center text-sm text-blue-100">
                  <Check className="w-4 h-4 mr-2 text-green-300" />
                  Revisiones ilimitadas
                </li>
              </ul>
            </div>

            <div className="bg-white/15 backdrop-blur-sm border-2 border-yellow-300/50 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  Más Popular
                </span>
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Professional</h3>
                  <p className="text-blue-100">Para negocios en crecimiento</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">449€</div>
                  <div className="text-sm text-blue-200">/mes</div>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-blue-100">
                  <Check className="w-4 h-4 mr-2 text-green-300" />
                  12 vídeos profesionales al mes
                </li>
                <li className="flex items-center text-sm text-blue-100">
                  <Check className="w-4 h-4 mr-2 text-green-300" />
                  Entrega en 48h garantizada
                </li>
                <li className="flex items-center text-sm text-blue-100">
                  <Check className="w-4 h-4 mr-2 text-green-300" />
                  Estrategia de contenido mensual
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link
                to="/subscriptions"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Ver todos los planes</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-white">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-300" />
              <span className="font-medium">Sin permanencia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-300" />
              <span className="font-medium">Cancela cuando quieras</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-300" />
              <span className="font-medium">Primer mes con descuento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionSection
