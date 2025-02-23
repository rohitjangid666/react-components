import styles from './styles/one.module.css';

const Figure: React.FC<{
  style?: React.CSSProperties & {
    '--c'?: string;
  };
  src: string;
  alt: string;
  caption: string;
}> = ({ src, alt, caption, style }) => {
  return (
    <figure className={`${styles['figure']} grid rounded-2xl overflow-hidden cursor-pointer`} style={style}>
      <img src={src} alt={alt} />
      <figcaption className='grid items-end text-4xl font-bold text-black p-3 -m-[1px]'>{caption}</figcaption>
    </figure>
  );
};

const One = () => {
  return (
    <div className='mb-10 grid place-content-center grid-flow-col gap-10'>
      <Figure src='https://picsum.photos/id/287/250/300' alt='Mountains' caption='The Day' />
      <Figure
        src='https://picsum.photos/id/475/250/300'
        alt='Mountains'
        caption='The Night'
        style={{ '--c': '#fff5' }}
      />
    </div>
  );
};

export default One;
