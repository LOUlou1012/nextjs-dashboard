export default function Loading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-6">
      {/* Spinner */}
      <div className="relative">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700">
          Loading your data...
        </p>
        <p className="text-sm text-gray-400">
          Please wait a moment
        </p>
      </div>

    </div>
  );
}