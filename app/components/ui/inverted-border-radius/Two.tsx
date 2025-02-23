import clsx from 'clsx';

import styles from './two.module.css';

const Button: React.FC<{ children: React.ReactNode; className: string; textClass?: string }> = ({
  children,
  className,
  textClass,
}) => {
  return (
    <div className={clsx('absolute bg-border rounded-3xl p-5 flex items-center justify-center', className)}>
      <span className={textClass}>{children}</span>
    </div>
  );
};

const Two = () => {
  return (
    <div className='container flex items-center justify-center flex-col h-screen'>
      <div className=' relative'>
        <div className='card relative' style={{ filter: 'drop-shadow(0 0 5px #171d1ac9)' }}>
          <div
            className={clsx(
              'w-[80vw] h-[80vh] bg-[0%] bg-no-repeat bg-cover bg-scroll rounded-tl-[2.5rem] rounded-tr-[2.5rem] rounded-bl-[2.5rem] relative',
              styles['card-image-with-svg-mask']
            )}
          >
            <p
              className='text text-white w-[550px] absolute left-[2%] top-[3%] text-[20px] leading-[1.5] h-[94%] overflow-y-auto'
              style={{ filter: 'drop-shadow(2px 4px 6px black)' }}
            >
              The Koenigsegg Regera is a limited production, plug-in hybrid grand touring sports car manufactured by
              Swedish automotive manufacturer Koenigsegg. It was unveiled at the March 2015 Geneva Motor Show. The name
              Regera is a Swedish verb, meaning "to reign" or "to rule". Koenigsegg produced 85 Regeras, most of which
              were sold upon unveiling. The Regera was developed and designed to be a more practical, luxurious, grand
              touring alternative to the rest of Koenigsegg's lightweight sports car lineup: initially the Agera and
              later the Jesko.
            </p>
          </div>
        </div>
        <Button
          className='w-[240px] h-[95px] top-[1%] right-0 left-0 mx-auto'
          textClass={clsx('text-3xl font-semibold uppercase', styles['btn-top-center-text'])}
        >
          Koenigsegg
        </Button>
        <Button
          className='w-[380px] h-[160px] rounded-[2.5rem] bottom-[2%] right-[1%]'
          textClass='text-[19px] text-center relative text-white'
        >
          <i className='-top-9 -left-4 absolute text-[40px] text-white fa-solid fa-quote-left' />
          Luxurious as well as insanely fast.
          <i className='-right-4 -bottom-9 absolute text-[40px] text-white fa-solid fa-quote-right' />
        </Button>
      </div>
    </div>
  );
};

export default Two;
