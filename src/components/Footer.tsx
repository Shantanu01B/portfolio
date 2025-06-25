export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-center py-6 border-t border-gray-300 dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Shantanu Barge. Built with ❤️ using{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-medium">
          Next.js & Tailwind CSS
        </span>
      </p>
    </footer>
  )
}
