export function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="loader">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-pinwheel">
          <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"/>
          <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"/>
          <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      </div>
      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
