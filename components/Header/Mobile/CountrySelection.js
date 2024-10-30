export default function CountrySelection() {
  return (
    <div className="bg-gray-50 px-6 py-4 w-full">
      <div className="flex justify-between items-center">
        <p className="text-13 leading-14 font-medium flex items-center gap-1">
          <span className="text-gray-300">You are in</span>
          <span className="icon-globe text-gray-900 text-24"></span>
          <span className="text-gray-900">APAC</span>
        </p>
        <p className="underline text-black">Change</p>
      </div>
    </div>
  );
}
