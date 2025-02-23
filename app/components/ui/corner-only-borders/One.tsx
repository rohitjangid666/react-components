import style from './styles/one.module.css'

const One = () => {
  return <img className={`${style['img']} p-4 border-8 border-border`} src='https://picsum.photos/seed/car/250/250' />;
};

export default One;
