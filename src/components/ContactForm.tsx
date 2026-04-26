import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { BrandButton } from './ui/BrandButton'
import {
  CheckCircle2,
  AlertCircle,
  Building2,
  User,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react'

interface ContactForm {
  name: string
  clinicName: string
  email: string
  phone: string
  message: string
}

const EMPTY: ContactForm = { name: '', clinicName: '', email: '', phone: '', message: '' }

const inputCls =
  'w-full rounded-xl bg-slate-100 dark:bg-white/[0.04] ' +
  'px-9 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/25 ' +
  'border-b-2 border-slate-300 dark:border-white/20 ' +
  'outline-none focus:border-brand-secondary dark:focus:border-brand-secondary focus:shadow-[0_4px_12px_-2px_rgba(39,170,225,0.2)] ' +
  'transition-[border-color,box-shadow] duration-150'

export function ContactForm() {
  const [form, setForm] = useState<ContactForm>(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const set = (field: keyof ContactForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.clinicName.trim()) return
    setSubmitting(true)
    setError(null)
    try {
      await emailjs.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          clinic_name: form.clinicName.trim(),
          from_email: form.email.trim().toLowerCase(),
          phone: form.phone.trim() || 'Not provided',
          message: form.message.trim() || 'No message',
          reply_to: form.email.trim().toLowerCase(),
        },
        { publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY },
      )

      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-7">
            <CheckCircle2 className="w-8 h-8 text-brand-secondary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            You just made us smile.
          </h1>
          <p className="text-slate-500 dark:text-white/45">We'll be in touch soon.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="w-full rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-brand-primary/[0.18] shadow-sm dark:shadow-none dark:backdrop-blur-md overflow-hidden"
        >
          <div className="px-8 pt-8 pb-6 border-b border-slate-100 dark:border-white/[0.06] flex items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Tell us about{' '}
              <span className="italic text-slate-500 dark:text-white/50">your practice.</span>
            </h1>
            <a
              href="/"
              className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-xl border border-slate-200 dark:border-white/[0.12] text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 transition-colors"
              title="Back to home"
            >
              ←
            </a>
          </div>

          <div className="px-8 py-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-white/55 mb-1.5">
                  Your name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/25 z-10" />
                  <input type="text" required value={form.name} onChange={set('name')} placeholder="Dr. Aarav Sharma" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-white/55 mb-1.5">
                  Practice name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/25 z-10" />
                  <input type="text" required value={form.clinicName} onChange={set('clinicName')} placeholder="Your practice name" className={inputCls} />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-white/55 mb-1.5">
                  Email <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/25 z-10" />
                  <input type="email" required value={form.email} onChange={set('email')} placeholder="you@clinic.com" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-white/55 mb-1.5">
                  Phone <span className="text-slate-400 dark:text-white/30 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/25 z-10" />
                  <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+977 98XXXXXXXX" className={inputCls} />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-600 dark:text-white/55 mb-1.5">
                Anything you'd like us to know?{' '}
                <span className="text-slate-400 dark:text-white/30 font-normal">(optional)</span>
              </label>
              <div className="relative">
                <MessageSquare className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400 dark:text-white/25 z-10" />
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Anything you'd like us to know…"
                  className={`${inputCls} resize-none`}
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-xl px-3 py-2.5 bg-rose-500/10 border border-rose-500/20">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                <p className="text-xs text-rose-400">{error}</p>
              </div>
            )}

            <BrandButton
              type="submit"
              size="sm"
              disabled={submitting || !form.name.trim() || !form.email.trim() || !form.clinicName.trim()}
              className="w-full"
            >
              {submitting
                ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                : <>Let's talk</>
              }
            </BrandButton>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
