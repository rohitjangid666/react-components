import styles from './styles/two.module.css';

const Image: React.FC<{
  style?: React.CSSProperties & {
    '--r'?: string;
    '--f'?: string;
  };
  src: string;
  alt: string;
}> = ({ src, alt, style }) => {
  return <img className={`${styles['img']} w-[250px] cursor-pointer object-cover`} src={src} alt={alt} style={style} />;
};

const Two = () => {
  return (
    <div className='flex items-center justify-center gap-10 wrap mb-10'>
      <Image src='https://picsum.photos/id/669/300/300' alt='the back of random person' />
      <Image
        src='https://assets.codepen.io/1480814/pexels-pixabay-62655.jpg'
        alt='an eagle'
        style={{ '--f': '.12', '--r': '5px' }}
      />
      <Image
        src='https://picsum.photos/id/326/300/300'
        alt='a cup of something to drink, probably some tea'
        style={{ '--f': '.08', '--r': '20px' }}
      />
    </div>
  );
};

export default Two;
