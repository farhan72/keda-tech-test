import './Title.module.scss';

interface ITitleProps {
 name: string;
}
const Index = ({name}: ITitleProps) => (
    <h1>{name}</h1>
);

export default Index;