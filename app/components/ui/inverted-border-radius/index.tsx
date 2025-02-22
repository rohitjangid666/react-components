import clsx from 'clsx';

const LableWrapper = ({ className, text }: { className: string; text: string }) => (
  <div
    className={clsx(
      'w-[12.5rem] h-[3.75rem] bg-primary flex items-center justify-center absolute p-[0.3rem] after:size-[1.125rem] before:size-[1.125rem] after:absolute before:absolute',
      className
    )}
  >
    <p className='bg-border text-white text-sm px-2.5 w-[95%] flex items-center justify-center gap-[0.3125rem] rounded-[0.3125rem] h-[80%]'>
      <span className='font-semibold text-xl'>{text}</span>
    </p>
  </div>
);

export const InvertedBorderRadius = () => {
  return (
    <div className='bg-primary p-14'>
      <div className='flex items-center justify-center flex-wrap gap-2.5 p-5'>
        <div className='relative'>
          <div className='size-96 rounded-[1.25rem] overflow-hidden relative border-8 border-border'>
            <img
              className='h-full w-full object-cover object-center'
              src='https://images.unsplash.com/photo-1632993950427-44e4c8f90023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwxfHxrb2VuaWdzZWdnfGVufDB8fHx8MTc0MDIwMjAwNHww&ixlib=rb-4.0.3&q=80&w=1080'
              alt='Koenigsegg'
            />
          </div>
          <LableWrapper
            className='top-0 left-0 border-r-8 border-b-8 border-border rounded-br-2xl after:bg-transparent after:shadow-neg-primary after:top-0 after:-right-[1.125rem] after:rounded-tl-[0.8rem] before:bg-transparent before:shadow-neg-border before:top-2 before:-right-[1.625rem] before:rounded-tl-lg'
            text='Koenigsegg'
          />
          <LableWrapper
            className='right-0 bottom-0 border-t-8 border-l-8 border-border after:bg-transparent after:-top-[1.125rem] after:right-0 after:rounded-br-[0.8rem] rounded-tl-2xl after:shadow-pos-primary before:bg-transparent before:right-2 before:-top-7 before:rounded-br-lg before:shadow-pos-border'
            text='$1.89 million'
          />

          {curves.map((className, idx) => (
            <div key={idx} className={clsx('size-5 absolute', className)} />
          ))}
        </div>
      </div>
    </div>
  );
};

const curves = [
  'bg-transparent left-[43%] bottom-2 rounded-br-lg shadow-pos-border',
  'bg-transparent left-[45%] bottom-0 rounded-br-[0.8rem] shadow-pos-primary',
  'bg-transparent top-[15.5%] left-2 rounded-tl-lg shadow-neg-border',
  'bg-transparent top-[13.5%] left-0 rounded-tl-[0.8rem] shadow-neg-primary',
];
