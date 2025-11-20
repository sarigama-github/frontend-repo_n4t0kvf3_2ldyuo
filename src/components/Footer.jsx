export default function Footer(){
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-blue-100/70">© {new Date().getFullYear()} DC Finance. All rights reserved.</p>
        <div className="flex items-center gap-6 text-blue-100/70 text-sm">
          <a href="#security" className="hover:text-white">Security</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}
