import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-white dark:bg-ink-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-2xl font-bold tracking-tight text-ink-900 dark:text-white"
      >
        <span className="text-primary-600">B</span>Tech
      </motion.div>
      <div className="h-1 w-40 overflow-hidden rounded-full bg-ink-100 dark:bg-white/10">
        <motion.div
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary-600 to-accent-500"
          animate={{ x: ['-100%', '220%'] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
