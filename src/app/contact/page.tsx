import GoogleMap from "../components/google";

export const contactpage = async () => {
  return (
    <div>
     
      <div className="relative w-full h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/tcf4.jpg')] bg-cover bg-center flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center">
            CONTACT US
          </h1>
        </div>
      </div>


      <div className="flex justify-center mt-11 p-11">
        <div className="text-4xl text-green-800 animate-bounce">↓</div> 
      </div>

      <div className="max-w-7xl mx-auto py-10  space-y-10 text-gray-800">
        <section>
          <h1 className="text-4xl font-bold text-green-800 mb-2">PLANTATIONS OFFICE</h1>
          <p className="mb-1 text-lg">
            <br></br>Kongtoon,
            <br></br>Paksong,Champasak,
            <br></br>Tel: +856 20 52734443.
          </p>

          <h1 className="text-4xl font-bold text-green-800 mb-2 pt-4 mt-6">HEADQUARTERS</h1>
          <p className="mb-1 text-lg">
            <br></br>Sanamxay,
            <br></br>Pakse,Champasak,
            <br></br>Tel: +856 20 52734443.
          </p>
        </section>
      </div>



      <div className="flex justify-center  pb-20 pt-20">
        <div className="w-full max-w-9xl">
          <GoogleMap />
        </div>
      </div>

      
    </div>
  );
};
export default contactpage;
