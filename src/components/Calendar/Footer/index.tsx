import './style.scss';

type FooterProps = { 
  onClick: () => void;
}

export const Footer = ({ onClick }: FooterProps) => {

  return (
    <div className="calendar-footer">
      <button className="calendar-footer__btn" onClick={onClick}>
        Confirmar
      </button>
    </div>
  )
};