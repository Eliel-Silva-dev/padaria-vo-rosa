import style from './style.min.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        <a href="assets/Politica-de-Privacidade.pdf" target="_blank">
          Politica de privacidade
        </a>{' '}
        -{' '}
        <a href="assets/Termos-e-condicoes.pdf" target="_blank">
          Termos de uso
        </a>
      </p>
      <p>Desenvolvido por Hydrah Tecnologia - todos os direitos reservados</p>
    </footer>
  );
};
export default Footer;
