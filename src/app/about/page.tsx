export const Aboutpage = async () => {
  return (
    <div>
      <div className="relative w-full h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/tcf3.jpg')] bg-cover bg-center flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center">
            ABOUT US
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-11 p-11">
        <div className="text-4xl text-green-800 animate-bounce">↓</div> 
      </div>

      <div className="max-w-7xl mx-auto py-10  space-y-10 text-gray-800">
        <section>
          <h1 className="text-4xl font-bold text-green-800 mb-2">MISSION</h1>
          <p className="mb-2 text-lg">
            Create distinctive long-term value for all stakeholders with Coffee.
          </p>
        </section>

        <section>
          <h1 className="text-4xl font-bold text-green-800 mb-2">VALUES</h1>
          <ul className="list-disc list-inside space-y-1 mb-2 text-lg">
            <li>Safety</li>
            <li>Customer focus</li>
            <li>Responsibility</li>
            <li>Innovation & Agility</li>
            <li>People-centric</li>
            <li>Transparency</li>
          </ul>
        </section>

        <section>
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            SAFETY & QUALITY POLICY
          </h1>
          <ul className="list-disc list-inside space-y-2 mb-2 text-lg">
            <li>
              To provide a safe working environment by incorporating the best
              practices in safety at all our locations, thus safeguarding the
              overall well-being of our employees.
            </li>
            <li>
              To achieve customer delight through excellence in quality in all
              our products, processes and services to emerge as a leading
              player.
            </li>
          </ul>
        </section>

        <section>
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            CLIMATE CHANGE & ENVIRONMENT POLICY
          </h1>
          <p className="mb-2 text-lg">
            We will play a leadership role in reducing climate change by being
            knowledgeable, responsive and trustworthy, and by adopting
            environment-friendly technologies, business practices and
            innovation, while pursuing our own growth aspirations.
          </p>
          <p className="mb-2 text-lg">
            We will measure our carbon footprint and will strive to:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-lg">
            <li>
              Be the benchmark in our industry segment on carbon footprint, for
              our plants and operations.
            </li>
            <li>
              Engage actively in climate change advocacy and shaping regulations
              in different sectors.
            </li>
            <li>
              Incorporate a ‘green’ perspective in all our key organisational
              processes.
            </li>
          </ol>
          <ul className="list-disc list-inside space-y-1 mt-2 text-lg">
            <li>
              We are committed to preserving and enriching the environment by
              optimal use of resources and adopting green processes.
            </li>
            <li>Reduce Reuse Recycle.</li>
          </ul>
        </section>

        <section>
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            CORPORATE SOCIAL RESPONSIBILITY POLICY
          </h1>
          <p className="mb-2 text-lg">
            We are dedicated to uplifting / improving the quality of life in the
            community we operate in, using our competencies to meet the needs of
            the community.
          </p>
        </section>

        <section>
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Affirmative Action Policy
          </h1>
          <p className="mb-2 text-lg">
            SOXAY COFFEE abides by the Somxay Group Affirmative Action Policy and
            commits to the following:
          </p>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>SOMXAY COFFEE believes in social equity.</li>
            <li>
              The company adheres to the principle of equal opportunity,
              irrespective of caste, whether in recruitment or career
              advancement within the organization.
            </li>
            <li>
              The company is also committed to directly conducting or supporting
              initiatives to ensure an equal footing for socially and
              economically disadvantaged sections, especially Scheduled Caste
              and Scheduled Tribe communities.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
export default Aboutpage;
