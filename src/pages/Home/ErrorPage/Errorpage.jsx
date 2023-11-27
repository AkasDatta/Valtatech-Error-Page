import errorimage from '../../../../src/assets/404-banner.png'

const ErrorPage = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div
          className="bg-cover bg-center xl:h-96 lg:h-96 md:h-96 w-full h-72 flex items-center justify-center xl:mt-20 lg:mt-20 md:mt-0 mt-0"
          style={{
            backgroundImage: `url(${errorimage})`,
          }}
        >
          <div className="text-[#231F20] font-medium first-letter:z-10 flex flex-col items-center justify-center pb-0 pt-14">
            <span className='text-center banner-text py-10'>
              <h2 className='xl:text-5xl lg:text-5xl md:text-5xl text-5xl font-serif'>Page not found.</h2>
            </span>
            <button className='text-xl text-white bg-[#718498] hover:bg-[#415239] px-6 py-3 font-semibold'>
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
