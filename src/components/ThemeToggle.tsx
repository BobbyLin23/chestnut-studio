import { useEffect, useState } from 'preact/hooks'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('astro-theme') ?? 'light')
  const [isMounted, setIsMounted] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('astro-theme', theme)
  }, [theme])

  if (!isMounted) {
    return null
  }

  return (
    <div class="w-full flex items-center justify-end">
      <button onClick={toggleTheme}>
        {theme === 'light' ? (
          <div class="i-mdi-weather-sunny w-6 h-6"></div>
        ) : (
          <div class="i-mdi-weather-night w-6 h-6 dark:text-zinc-4"></div>
        )}
      </button>
    </div>
  )
}
