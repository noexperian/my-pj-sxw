export default function Contactpage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/tcf4.jpg')] bg-cover bg-center flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center px-4">
            CONTACT US
          </h1>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center mt-6 sm:mt-11 px-4">
        <div className="text-3xl sm:text-4xl text-green-800 animate-bounce">↓</div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 text-gray-800 mb-20">
        <section className="flex flex-col md:flex-row justify-between gap-10">
          {/* Headquarters */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-3 pt-4 mt-6">
              HEADQUARTER
            </h1>
            <p className="mb-2 text-base sm:text-lg">
              Patthana Sanamxay Village, Pakse District, Champasak Province.
              <br />
              Gmail:{" "}
              <a
                href="mailto:somhack.loun@somxaychalern.com"
                className="text-blue-500 hover:underline"
              >
                somhack.loun@somxaychalern.com
              </a>
            </p>
          </div>

          {/* Plantations Office */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-3 pt-4 mt-6">
              PLANTATIONS OFFICE
            </h1>
            <p className="mb-2 text-base sm:text-lg">
              Kongtoun Village, Paksong District, Champasak Province.
              <br />
              Gmail:{" "}
              <a
                href="mailto:admin@somxaychalern.com"
                className="text-blue-500 hover:underline"
              >
                info@somxaychalern.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
