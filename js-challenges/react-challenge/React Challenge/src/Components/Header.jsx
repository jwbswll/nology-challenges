import s from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <h2 className={s.heading}>React Challenge</h2>
      <p className={s.heading}>This is our first React Challenge</p>
    </header>
  )
}

export default Header;