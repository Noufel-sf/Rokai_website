import React from 'react'
import { motion } from 'framer-motion'

function HeadingText({heading , subheading ,subheading2, description}: {heading?: string, subheading?: string, subheading2?: string, description?: string}) {
  return (
       <div className="flex flex-col items-center mb-12 ">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 inline-block rounded-full bg-secondary/30 px-6 py-2 text-sm font-semibold text-primary"
          >
            {subheading}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 text-3xl text-center lg:text-5xl font-bold text-slate-900 leading-tight"
          >
             {heading} <span className="text-primary">{subheading2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 text-lg text-center leading-relaxed text-slate-600"
          >
            {description}
          </motion.p>
        </div>

  )
}

export default HeadingText