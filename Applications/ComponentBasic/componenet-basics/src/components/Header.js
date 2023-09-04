import keyConceptsImage from '../assets/images/key-concepts.png';
const Header = () => {
return (
    <header>
        <img src={keyConceptsImage} alt="Logo Main" />
        <h1>Key React Concepts</h1>
        <p>Select the concept you want to know about</p>
      </header>
);
};

export default Header;