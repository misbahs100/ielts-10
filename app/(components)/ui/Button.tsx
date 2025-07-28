type Props = {
    children: React.ReactNode
    onClick?: () => void
    className?: string
  }
  
  export default function Button({ children, onClick, className = '' }: Props) {
    return (
      <button
        onClick={onClick}
        className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition ${className}`}
      >
        {children}
      </button>
    )
  }
  