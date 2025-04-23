import styles from './Title.module.scss';

interface ITitleProps {
 name: string;
}
const Index = ({ name }: ITitleProps) => (
  <h1 className={styles["title"]}>{name}</h1>
);

export default Index;