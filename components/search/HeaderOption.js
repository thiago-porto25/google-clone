export default function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent cursor-pointer pb-3 hover:text-blue-500 hover:border-blue-500 ${
        selected && 'border-blue-500 text-blue-500'
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}
