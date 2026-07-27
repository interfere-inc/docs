// Hero matching the interfere.com homepage layout.
// Side-by-side: heading left, subtitle + CTAs right on desktop.
// Breaks out of the Above column constraint via w-screen + negative margin.
'use client'

export function HeroSection() {
  return (
    <div className='relative mb-6 lg:mb-10 w-screen ml-[calc(-50vw+50%)] flex flex-col items-center'>
      <div className='w-full max-w-[1100px] mx-auto px-6'>
        <div className='relative flex flex-col items-start justify-between gap-6 pt-8 pb-12 lg:flex-row lg:items-end lg:gap-0 lg:pt-16 lg:pb-12'>
          <h1 className='flex max-w-sm flex-wrap items-center font-medium text-foreground leading-none md:max-w-md lg:max-w-xl text-[32px] sm:text-[40px] lg:text-[56px]'>
            <span className='relative block'>
              <span className='block whitespace-nowrap'>
                <span className='inline-block whitespace-pre-wrap tracking-[-0.02em]'>
                  Ship{' '}
                </span>
                <span className='inline-block whitespace-pre-wrap tracking-[-0.02em]'>
                  software{' '}
                </span>
                <span className='inline-block whitespace-pre-wrap tracking-[-0.02em]'>
                  that{' '}
                </span>
              </span>
              <span className='inline-block h-9 whitespace-pre-wrap lg:h-14'>
                <span className='inline-block whitespace-pre-wrap tracking-[-0.02em]'>
                  never{' '}
                </span>
                <span className='inline-block whitespace-pre-wrap italic leading-none tracking-[-0.03em]'>
                  breaks
                </span>
              </span>
            </span>
          </h1>

          <div className='relative z-10 flex flex-col items-start gap-4 lg:items-end'>
            <h2 className='max-w-lg text-balance text-base text-muted-foreground lg:text-right'>
              Interfere empowers engineers, product managers and designers with
              real-time understanding of previously unseen bugs and issues.
            </h2>
            <div className='flex items-center gap-4'>
              <a
                href='https://interfere.com/auth/waitlist'
                className='inline-flex items-center justify-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium no-underline hover:bg-muted transition-colors'
              >
                Get Early Access
              </a>
              <a
                href='https://interfere.com/contact-sales'
                className='inline-flex items-center justify-center rounded-lg bg-foreground text-background px-5 py-2.5 text-sm font-medium no-underline hover:opacity-90 transition-opacity'
              >
                Request a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
